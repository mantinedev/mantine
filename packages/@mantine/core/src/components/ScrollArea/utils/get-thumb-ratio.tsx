export function getThumbRatio(viewportSize: number, contentSize: number) {
  const ratio = viewportSize / contentSize;
  return Number.isNaN(ratio) ? 0 : ratio;
}
