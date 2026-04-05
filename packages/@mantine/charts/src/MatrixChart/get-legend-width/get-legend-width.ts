interface GetLegendWidthInput {
  legendLabels: [string, string];
  fontSize: number;
  colorsCount: number;
  cellSize: number;
  gap: number;
}

export function getLegendWidth({
  legendLabels,
  fontSize,
  colorsCount,
  cellSize,
  gap,
}: GetLegendWidthInput): number {
  const textGap = 6;
  const charWidth = fontSize * 0.6;
  const lessWidth = legendLabels[0].length * charWidth;
  const allColorsCount = 1 + colorsCount;
  const rectsWidth = allColorsCount * cellSize + (allColorsCount - 1) * gap;
  const moreWidth = legendLabels[1].length * charWidth;
  return lessWidth + textGap + rectsWidth + textGap + moreWidth;
}
