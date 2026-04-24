export type PillReorderPosition = 'before' | 'after';

export function movePill<T>(
  value: T[],
  from: number,
  to: number,
  position: PillReorderPosition
): T[] {
  if (from === to) {
    return value;
  }

  if (position === 'before' && to === from + 1) {
    return value;
  }

  if (position === 'after' && to === from - 1) {
    return value;
  }

  const result = value.slice();
  const [item] = result.splice(from, 1);

  let targetIndex = from < to ? to - 1 : to;
  if (position === 'after') {
    targetIndex += 1;
  }

  result.splice(targetIndex, 0, item);
  return result;
}
