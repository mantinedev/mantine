import { diffChars, type DiffMethod, type DiffResult, diffWords } from '../diff-algorithm';
import type { LineEntry } from '../split-into-lines/split-into-lines';

export interface LineRow extends LineEntry {
  kind: 'line';
}

export interface ChangeBlock {
  kind: 'block';
  removed: LineEntry[];
  added: LineEntry[];
  inlineDiffs: (DiffResult[] | undefined)[];
}

export type DiffRow = LineRow | ChangeBlock;

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

function getInlineDiffs(removed: LineEntry[], added: LineEntry[], diffMethod: DiffMethod) {
  const pairCount = Math.min(removed.length, added.length);
  const inlineDiffs: (DiffResult[] | undefined)[] = [];
  const inlineDiffFn = diffMethod === 'chars' ? diffChars : diffWords;

  for (let i = 0; i < pairCount; i++) {
    const previous = removed[i].value;
    const current = added[i].value;
    const withInlineDiff =
      diffMethod !== 'lines' &&
      previous !== '' &&
      current !== '' &&
      computeSimilarity(previous.trim(), current.trim()) >= SIMILARITY_THRESHOLD;
    inlineDiffs.push(withInlineDiff ? inlineDiffFn(previous, current) : undefined);
  }

  return inlineDiffs;
}

export function groupChangeBlocks(entries: LineEntry[], diffMethod: DiffMethod): DiffRow[] {
  const result: DiffRow[] = [];
  let i = 0;

  while (i < entries.length) {
    if (entries[i].type === 'equal') {
      result.push({ ...entries[i], kind: 'line' });
      i++;
      continue;
    }

    const removed: LineEntry[] = [];
    const added: LineEntry[] = [];

    while (i < entries.length && entries[i].type === 'remove') {
      removed.push(entries[i]);
      i++;
    }

    while (i < entries.length && entries[i].type === 'add') {
      added.push(entries[i]);
      i++;
    }

    result.push({
      kind: 'block',
      removed,
      added,
      inlineDiffs: getInlineDiffs(removed, added, diffMethod),
    });
  }

  return result;
}
