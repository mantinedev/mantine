export function range(start: number, end: number) {
  const length = Math.abs(end - start) + 1;
  const reversed = start > end;

  if (!reversed) {
    return Array.from({ length }, (_, index) => index + start);
  }

  return Array.from({ length }, (_, index) => start - index);
}
