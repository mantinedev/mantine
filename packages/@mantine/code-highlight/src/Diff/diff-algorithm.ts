import {
  diffChars as jsDiffChars,
  diffWordsWithSpace as jsDiffWords,
  diffLines as jsDiffLines,
  Change,
} from 'diff';

export interface DiffResult {
  type: 'add' | 'remove' | 'equal';
  value: string;
}

function changesToDiffResults(changes: Change[]): DiffResult[] {
  return changes.map((change) => ({
    type: change.added ? 'add' : change.removed ? 'remove' : 'equal',
    value: change.value,
  }));
}

export function diffChars(oldText: string, newText: string): DiffResult[] {
  return changesToDiffResults(jsDiffChars(oldText, newText));
}

export function diffWords(oldText: string, newText: string): DiffResult[] {
  return changesToDiffResults(jsDiffWords(oldText, newText));
}

export function diffLines(oldText: string, newText: string): DiffResult[] {
  return changesToDiffResults(jsDiffLines(oldText, newText));
}
