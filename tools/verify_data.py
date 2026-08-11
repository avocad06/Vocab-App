#!/usr/bin/env python3
"""
tools/verify_data.py
words.js 데이터 정합성 검증. 단어 추가/수정 후마다 실행하세요.
사용법: python3 tools/verify_data.py [words.js 경로 (기본: data/words.js)]
"""
import json, sys, collections

REQUIRED = ['id', 'grade', 'day', 'seq', 'word', 'pos', 'meaning', 'example', 'exampleChunks', 'media']

def main(path):
    src = open(path, encoding='utf-8').read()
    words = json.loads(src[src.index('['):src.rindex(']')+1])
    errors, warns = [], []

    seen_ids = collections.Counter(w.get('id') for w in words)
    for wid, c in seen_ids.items():
        if c > 1: errors.append(f"id 중복: {wid} ({c}회)")

    seen_slot = collections.Counter()
    for w in words:
        wid = w.get('id', '?')
        for k in REQUIRED:
            if w.get(k) in (None, '', []):
                errors.append(f"{wid}: 필수 필드 누락/비어있음 → {k}")
        g, d, s = w.get('grade'), w.get('day'), w.get('seq')
        if g is not None and g not in (1, 2, 3): errors.append(f"{wid}: grade 범위 밖 ({g})")
        if d is not None and not (1 <= d <= 10): errors.append(f"{wid}: day 범위 밖 ({d})")
        if None not in (g, d, s): seen_slot[(g, d, s)] += 1
        au = (w.get('media') or {}).get('audio') or {}
        if not au.get('word'): errors.append(f"{wid}: audio.word 없음")
        if not au.get('example'): errors.append(f"{wid}: audio.example 없음")
        ex, chunks = w.get('example', ''), w.get('exampleChunks', [])
        if ex and chunks and ex.replace(' ', '') != ''.join(chunks).replace(' ', ''):
            warns.append(f"{wid}: example과 exampleChunks 불일치")

    for slot, c in seen_slot.items():
        if c > 1: errors.append(f"(grade,day,seq) 중복: G{slot[0]} Day{slot[1]} #{slot[2]} ({c}개)")

    dist = collections.Counter((w['grade'], w['day']) for w in words if w.get('grade'))
    print(f"단어 {len(words)}개 / 학년·Day 분포:")
    for g in (1, 2, 3):
        row = [dist.get((g, d), 0) for d in range(1, 11)]
        print(f"  G{g}: {row} (계 {sum(row)})")
    print(f"\n오류 {len(errors)}건, 경고 {len(warns)}건")
    for e in errors: print(f"  [오류] {e}")
    for w in warns: print(f"  [경고] {w}")
    return 1 if errors else 0

if __name__ == '__main__':
    sys.exit(main(sys.argv[1] if len(sys.argv) > 1 else 'data/words.js'))
