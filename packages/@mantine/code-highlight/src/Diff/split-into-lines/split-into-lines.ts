import { DiffResult } from '../diff-algorithm';

export interface LineEntry {
  type: 'add' | 'remove' | 'equal';
  value: string;
  oldLineNumber?: number;
  newLineNumber?: number;
}

export function splitIntoLines(results: DiffResult[]): LineEntry[] {
  const entries: LineEntry[] = [];
  let oldLine = 1;
  let newLine = 1;

  for (const result of results) {
    const lines = result.value.split('\n');

    for (let i = 0; i < lines.length; i++) {
      if (i === lines.length - 1 && lines[i] === '') {
        break;
      }

      const value = i < lines.length - 1 ? `${lines[i]}\n` : lines[i];
      const entry: LineEntry = { type: result.type, value };

      if (result.type === 'equal') {
        entry.oldLineNumber = oldLine++;
        entry.newLineNumber = newLine++;
      } else if (result.type === 'remove') {
        entry.oldLineNumber = oldLine++;
      } else {
        entry.newLineNumber = newLine++;
      }

      entries.push(entry);
    }
  }

  return entries;
}
