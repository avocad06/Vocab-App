#!/usr/bin/env python3
"""
tools/assign_grade_day.py
words.js의 각 단어에 grade / day / seq 필드를 부여합니다.
근거: media.audio.word 의 Supabase 파일명 (예: G1_Day 1_001_watch_word.mp3)
사용법: python3 tools/assign_grade_day.py <words.js 경로> <출력 경로>
"""
import json, re, sys, collections
from urllib.parse import unquote

def load_words(path):
    src = open(path, encoding='utf-8').read()
    start = src.index('[')
    end = src.rindex(']') + 1
    header = src[:src.index('window.VOCAB_WORDS')]
    return header, json.loads(src[start:end])

def extract(url):
    """오디오 URL에서 (grade, day, seq) 추출. 실패 시 None."""
    if not url or not url.startswith('http'):
        return None
    fname = unquote(url.split('/')[-1])
    m = re.match(r'G(\d+)_Day (\d+)_(\d+)_', fname)
    if not m:
        return None
    return int(m.group(1)), int(m.group(2)), int(m.group(3))


# 오디오 URL에 정보가 없는 단어들 — words.js 내 위치(앞뒤 이웃의 소속)와
# Supabase 파일명의 빈 슬롯 대조로 판정 (2026-07-15)
OVERRIDES = {
    'wear':      (1, 1, 16),  # 확정: 이웃 D1#15/#17 사이
    'buy':       (1, 2, 4),   # 확정: 이웃 D2#3/#6 사이
    'wink':      (1, 2, 5),   # 확정: 이웃 D2#3/#6 사이
    'sell':      (1, 2, 20),  # D2#19 뒤, D3#1 앞 → D2 마지막 슬롯
    'get':       (1, 3, 6),   # 확정: 이웃 D3#5/#7 사이
    'kick':      (1, 4, 11),  # 확정: 이웃 D4#10/#12 사이
    'think':     (1, 5, 10),  # D5#9/#12 사이 (10 또는 11 — 순서 보존용 10)
    'equal':     (1, 7, 1),   # D7 오디오가 #9부터 시작 → 빈 1~8 슬롯
    'fascinate': (1, 7, 2),
    'feast':     (1, 7, 3),
    'focus':     (1, 7, 4),
    'frustrate': (1, 7, 5),
    'punish':    (1, 7, 6),
    'add':       (1, 9, 15),  # 확정: 이웃 D9#14/#16 사이
    'hang':      (2, 8, 16),  # 확정: 이웃 D8#15/#17 사이
    'lay':       (2, 9, 5),   # D9#4/#8 사이 (5~7 중 — 순서 보존용 5)
}

def main(src_path, out_path):
    header, words = load_words(src_path)
    unresolved = []
    out = []
    for w in words:
        url = (w.get('media', {}).get('audio') or {}).get('word', '')
        info = extract(url) or OVERRIDES.get(w['id'])
        # 필드 순서: id, grade, day, seq, word, ...
        nw = {'id': w['id']}
        if info:
            nw['grade'], nw['day'], nw['seq'] = info
        else:
            nw['grade'] = nw['day'] = nw['seq'] = None
            unresolved.append((w['id'], w.get('word'), url))
        for k, v in w.items():
            if k != 'id':
                nw[k] = v
        out.append(nw)

    body = json.dumps(out, ensure_ascii=False, indent=2)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(header + 'window.VOCAB_WORDS = ' + body + ';\n')

    dist = collections.Counter((w['grade'], w['day']) for w in out if w['grade'])
    print(f"총 {len(out)}개 단어 처리, 자동 부여 {len(out)-len(unresolved)}개, 미해결 {len(unresolved)}개")
    for g in (1, 2, 3):
        row = [dist.get((g, d), 0) for d in range(1, 11)]
        print(f"  G{g}: {row}  (계 {sum(row)})")
    if unresolved:
        print("\n[미해결 — grade/day/seq = null]")
        for wid, word, url in unresolved:
            print(f"  - {wid} ({word}): audio.word = {url or '(없음)'}")
    return 0

if __name__ == '__main__':
    sys.exit(main(sys.argv[1], sys.argv[2]))
