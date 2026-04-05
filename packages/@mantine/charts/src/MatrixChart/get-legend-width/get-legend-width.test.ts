import { getLegendWidth } from './get-legend-width';

describe('getLegendWidth', () => {
  it('calculates width based on labels, colors, and cell size', () => {
    const width = getLegendWidth({
      legendLabels: ['Less', 'More'],
      fontSize: 12,
      colorsCount: 4,
      cellSize: 20,
      gap: 1,
    });
    expect(width).toBeGreaterThan(0);
  });

  it('increases with longer labels', () => {
    const short = getLegendWidth({
      legendLabels: ['A', 'B'],
      fontSize: 12,
      colorsCount: 4,
      cellSize: 20,
      gap: 1,
    });
    const long = getLegendWidth({
      legendLabels: ['Very Low', 'Very High'],
      fontSize: 12,
      colorsCount: 4,
      cellSize: 20,
      gap: 1,
    });
    expect(long).toBeGreaterThan(short);
  });

  it('increases with more colors', () => {
    const fewer = getLegendWidth({
      legendLabels: ['Less', 'More'],
      fontSize: 12,
      colorsCount: 2,
      cellSize: 20,
      gap: 1,
    });
    const more = getLegendWidth({
      legendLabels: ['Less', 'More'],
      fontSize: 12,
      colorsCount: 6,
      cellSize: 20,
      gap: 1,
    });
    expect(more).toBeGreaterThan(fewer);
  });

  it('increases with larger cell size', () => {
    const small = getLegendWidth({
      legendLabels: ['Less', 'More'],
      fontSize: 12,
      colorsCount: 4,
      cellSize: 10,
      gap: 1,
    });
    const large = getLegendWidth({
      legendLabels: ['Less', 'More'],
      fontSize: 12,
      colorsCount: 4,
      cellSize: 30,
      gap: 1,
    });
    expect(large).toBeGreaterThan(small);
  });
});
