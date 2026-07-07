const TIME_UNITS: [token: string, ms: number][] = [
  ['Y', 1000 * 60 * 60 * 24 * 365],
  ['M', 1000 * 60 * 60 * 24 * 30],
  ['D', 1000 * 60 * 60 * 24],
  ['H', 1000 * 60 * 60],
  ['m', 1000 * 60],
  ['s', 1000],
  ['S', 1],
];

const ESCAPE_REGEX = /\[[^\]]*\]/g;

/** Formats a duration in milliseconds with dayjs-style tokens (`D`, `H`, `m`, `s`, `S`, ...). Literals can be escaped with square brackets, e.g. `D[d] HH:mm:ss`. */
export function formatCountdown(milliseconds: number, format: string): string {
  let leftDuration = Number.isFinite(milliseconds) ? Math.max(0, milliseconds) : 0;

  const keepList = (format.match(ESCAPE_REGEX) || []).map((str) => str.slice(1, -1));
  const template = format.replace(ESCAPE_REGEX, '[]');

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
