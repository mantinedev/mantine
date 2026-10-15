interface GetLegendLayoutInput {
  lessWidth: number;
  moreWidth: number;
  colorsCount: number;
  cellSize: number;
  gap: number;
}

const TEXT_GAP = 6;

export function estimateTextWidth(text: string, fontSize: number): number {
  return text.length * fontSize * 0.6;
}

export function measureTextWidth(node: SVGTextElement | null): number | null {
  if (!node || typeof node.getComputedTextLength !== 'function') {
    return null;
  }

  const width = node.getComputedTextLength();
  return width > 0 ? Math.ceil(width) : null;
}

export function getLegendLayout({
  lessWidth,
  moreWidth,
  colorsCount,
  cellSize,
  gap,
}: GetLegendLayoutInput) {
  const rectsX = lessWidth + TEXT_GAP;
  const rectsWidth = colorsCount * cellSize + Math.max(0, colorsCount - 1) * gap;
  const moreLabelX = rectsX + rectsWidth + TEXT_GAP;
  return { width: moreLabelX + moreWidth, rectsX, moreLabelX };
}
