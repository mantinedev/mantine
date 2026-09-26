import { diffChars, DiffResult, diffWords } from '../diff-algorithm';
import { LineEntry } from '../split-into-lines/split-into-lines';

export interface HunkPair {
  kind: 'hunkPair';
  removedLine: LineEntry;
  addedLine: LineEntry;
  inlineDiff: DiffResult[];
}

const SIMILARITY_THRESHOLD = 0.4;

export function computeSimilarity(a: string, b: string): number {
  if (a.length === 0 && b.length === 0) {
    return 1;
  }

  if (a.length === 0 || b.length === 0) {
    return 0;
  }

  const freqA = new Map<string, number>();
  const freqB = new Map<string, number>();

  for (const c of a) {
    freqA.set(c, (freqA.get(c) || 0) + 1);
  }

  for (const c of b) {
    freqB.set(c, (freqB.get(c) || 0) + 1);
  }

  let intersection = 0;
  for (const [c, count] of freqA) {
    intersection += Math.min(count, freqB.get(c) || 0);
  }

  return (2 * intersection) / (a.length + b.length);
}

export function pairHunks(
  entries: LineEntry[],
  diffMethod: 'chars' | 'words' | 'lines'
): ((LineEntry & { kind: 'line' }) | HunkPair)[] {
  const result: ((LineEntry & { kind: 'line' }) | HunkPair)[] = [];
  let i = 0;

  while (i < entries.length) {
    if (entries[i].type === 'equal') {
      result.push({ ...entries[i], kind: 'line' });
      i++;
      continue;
    }

    const removedLines: LineEntry[] = [];
    const addedLines: LineEntry[] = [];

    while (i < entries.length && entries[i].type === 'remove') {
      removedLines.push(entries[i]);
      i++;
    }

    while (i < entries.length && entries[i].type === 'add') {
      addedLines.push(entries[i]);
      i++;
    }

    const pairCount = Math.min(removedLines.length, addedLines.length);
    const inlineDiffFn = diffMethod === 'chars' ? diffChars : diffWords;

    for (let j = 0; j < pairCount; j++) {
      if (diffMethod === 'lines') {
        result.push({ ...removedLines[j], kind: 'line' });
        result.push({ ...addedLines[j], kind: 'line' });
      } else {
        const sim = computeSimilarity(removedLines[j].value.trim(), addedLines[j].value.trim());

        if (sim >= SIMILARITY_THRESHOLD) {
          const inlineDiff = inlineDiffFn(
            removedLines[j].value.replace(/\n$/, ''),
            addedLines[j].value.replace(/\n$/, '')
          );
          result.push({
            kind: 'hunkPair',
            removedLine: removedLines[j],
            addedLine: addedLines[j],
            inlineDiff,
          });
        } else {
          result.push({ ...removedLines[j], kind: 'line' });
          result.push({ ...addedLines[j], kind: 'line' });
        }
      }
    }

    for (let j = pairCount; j < removedLines.length; j++) {
      result.push({ ...removedLines[j], kind: 'line' });
    }

    for (let j = pairCount; j < addedLines.length; j++) {
      result.push({ ...addedLines[j], kind: 'line' });
    }
  }

  return result;
}
