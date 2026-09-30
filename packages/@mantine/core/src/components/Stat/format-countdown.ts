const TIME_UNITS: [token: string, ms: number][] = [
  ['D', 1000 * 60 * 60 * 24],
  ['H', 1000 * 60 * 60],
  ['m', 1000 * 60],
  ['s', 1000],
  ['S', 1],
];

const ESCAPE_REGEX = /\[[^\]]*\]/g;

export function hasFractionToken(format: string): boolean {
  return format.replace(ESCAPE_REGEX, '').includes('S');
}

export function formatCountdown(milliseconds: number, format: string): string {
  let leftDuration = Number.isFinite(milliseconds) ? Math.max(0, milliseconds) : 0;

  const keepList = (format.match(ESCAPE_REGEX) || []).map((str) => str.slice(1, -1));
  const template = format.replace(ESCAPE_REGEX, '[]');

  if (!hasFractionToken(format)) {
    const smallestUnit = TIME_UNITS.filter(([token]) => template.includes(token)).pop();
    if (smallestUnit) {
      leftDuration = Math.ceil(leftDuration / smallestUnit[1]) * smallestUnit[1];
    }
  }

  const replaced = TIME_UNITS.reduce((current, [token, unit]) => {
    if (!current.includes(token)) {
      return current;
    }

    if (token === 'S') {
      const fraction = Math.floor(leftDuration) % 1000;
      return current.replace(/S+/g, (match) => {
        const width = Math.min(match.length, 3);
        const scaled = Math.floor(fraction / 10 ** (3 - width));
        return scaled.toString().padStart(match.length, '0');
      });
    }

    const value = Math.floor(leftDuration / unit);
    leftDuration -= value * unit;
    return current.replace(new RegExp(`${token}+`, 'g'), (match) =>
      value.toString().padStart(match.length, '0')
    );
  }, template);

  let index = 0;
  return replaced.replace(ESCAPE_REGEX, () => {
    const keep = keepList[index] ?? '';
    index += 1;
    return keep;
  });
}
