import { estimateTextWidth, getLegendLayout, measureTextWidth } from './get-legend-layout';

describe('getLegendLayout', () => {
  it('places swatches and labels with gaps between them', () => {
    expect(
      getLegendLayout({ lessWidth: 30, moreWidth: 40, colorsCount: 4, cellSize: 20, gap: 1 })
    ).toStrictEqual({ rectsX: 36, moreLabelX: 36 + 83 + 6, width: 36 + 83 + 6 + 40 });
  });

  it('handles a single color', () => {
    expect(
      getLegendLayout({ lessWidth: 0, moreWidth: 0, colorsCount: 1, cellSize: 20, gap: 5 })
    ).toStrictEqual({ rectsX: 6, moreLabelX: 32, width: 32 });
  });
});

describe('estimateTextWidth', () => {
  it('estimates width from characters count and font size', () => {
    expect(estimateTextWidth('Less', 10)).toBe(24);
    expect(estimateTextWidth('', 10)).toBe(0);
  });
});

describe('measureTextWidth', () => {
  it('returns null when the node cannot be measured', () => {
    expect(measureTextWidth(null)).toBeNull();
    expect(measureTextWidth({} as SVGTextElement)).toBeNull();
    expect(measureTextWidth({ getComputedTextLength: () => 0 } as any)).toBeNull();
  });

  it('rounds measured width up', () => {
    expect(measureTextWidth({ getComputedTextLength: () => 41.2 } as any)).toBe(42);
  });
});
