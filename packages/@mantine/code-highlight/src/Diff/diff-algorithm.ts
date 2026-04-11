export interface DiffResult {
  type: 'add' | 'remove' | 'equal';
  value: string;
}

function myersDiff(oldTokens: string[], newTokens: string[]): DiffResult[] {
  const n = oldTokens.length;
  const m = newTokens.length;

  if (n === 0 && m === 0) {
    return [];
  }

  if (n === 0) {
    return [{ type: 'add', value: newTokens.join('') }];
  }

  if (m === 0) {
    return [{ type: 'remove', value: oldTokens.join('') }];
  }

  const max = n + m;
  const size = 2 * max + 1;
  const vOffset = max;

  const v = new Int32Array(size);
  const trace: Int32Array[] = [];

  let finalD = -1;

  for (let d = 0; d <= max; d++) {
    trace.push(new Int32Array(v));

    for (let k = -d; k <= d; k += 2) {
      let x: number;

      if (k === -d || (k !== d && v[k - 1 + vOffset] < v[k + 1 + vOffset])) {
        x = v[k + 1 + vOffset];
      } else {
        x = v[k - 1 + vOffset] + 1;
      }

      let y = x - k;

      while (x < n && y < m && oldTokens[x] === newTokens[y]) {
        x++;
        y++;
      }

      v[k + vOffset] = x;

      if (x >= n && y >= m) {
        finalD = d;
        break;
      }
    }

    if (finalD >= 0) {
      break;
    }
  }

  const edits: DiffResult[] = [];
  let x = n;
  let y = m;

  for (let d = finalD; d > 0; d--) {
    const prevV = trace[d];
    const k = x - y;

    let prevK: number;
    if (k === -d || (k !== d && prevV[k - 1 + vOffset] < prevV[k + 1 + vOffset])) {
      prevK = k + 1;
    } else {
      prevK = k - 1;
    }

    const prevX = prevV[prevK + vOffset];
    const prevY = prevX - prevK;

    while (x > prevX && y > prevY) {
      x--;
      y--;
      edits.push({ type: 'equal', value: oldTokens[x] });
    }

    if (x > prevX) {
      x--;
      edits.push({ type: 'remove', value: oldTokens[x] });
    } else if (y > prevY) {
      y--;
      edits.push({ type: 'add', value: newTokens[y] });
    }
  }

  while (x > 0 && y > 0) {
    x--;
    y--;
    edits.push({ type: 'equal', value: oldTokens[x] });
  }

  return mergeResults(edits.reverse());
}

function mergeResults(results: DiffResult[]): DiffResult[] {
  if (results.length === 0) {
    return [];
  }

  const merged: DiffResult[] = [results[0]];

  for (let i = 1; i < results.length; i++) {
    const last = merged[merged.length - 1];
    if (last.type === results[i].type) {
      last.value += results[i].value;
    } else {
      merged.push({ ...results[i] });
    }
  }

  return merged;
}

function tokenizeChars(text: string): string[] {
  return Array.from(text);
}

function tokenizeWords(text: string): string[] {
  return text.match(/\S+|\s+/g) || [];
}

function tokenizeLines(text: string): string[] {
  if (text === '') {
    return [];
  }

  const result: string[] = [];
  let start = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '\n') {
      result.push(text.slice(start, i + 1));
      start = i + 1;
    }
  }

  if (start < text.length) {
    result.push(text.slice(start));
  }

  return result;
}

export function diffChars(oldText: string, newText: string): DiffResult[] {
  return myersDiff(tokenizeChars(oldText), tokenizeChars(newText));
}

export function diffWords(oldText: string, newText: string): DiffResult[] {
  return myersDiff(tokenizeWords(oldText), tokenizeWords(newText));
}

export function diffLines(oldText: string, newText: string): DiffResult[] {
  return myersDiff(tokenizeLines(oldText), tokenizeLines(newText));
}
