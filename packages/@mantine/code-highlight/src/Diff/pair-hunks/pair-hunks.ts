import { diffChars, DiffResult, diffWords } from '../diff-algorithm';
import type { LineEntry } from '../split-into-lines/split-into-lines';

export interface HunkPair {
  kind: 'hunkPair';
  removedLine: LineEntry;
  addedLine: LineEntry;
  inlineDiff: DiffResult[];
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
