export function resolveDistTag(version: string): 'latest' | 'next' {
  return version.includes('-') ? 'next' : 'latest';
}

function parseStableVersion(version: string): [number, number, number] | null {
  const core = version.split('-')[0].split('+')[0];
  const parts = core.split('.');

  if (parts.length !== 3) {
    return null;
  }

  const numbers = parts.map((part) => Number(part));

  if (numbers.some((value) => !Number.isInteger(value) || value < 0)) {
    return null;
  }

  return [numbers[0], numbers[1], numbers[2]];
}

export function wouldMoveLatestBackward(version: string, currentLatest: string | null): boolean {
  if (version.includes('-')) {
    return false;
  }

  if (!currentLatest) {
    return false;
  }

  const next = parseStableVersion(version);
  const current = parseStableVersion(currentLatest);

  if (next === null || current === null) {
    return false;
  }

  for (let index = 0; index < 3; index += 1) {
    if (next[index] !== current[index]) {
      return next[index] < current[index];
    }
  }

  return false;
}
