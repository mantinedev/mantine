import { getLegendPosition } from './get-legend-position';

describe('@mantine/charts/utils/get-legend-position', () => {
  it('returns default position if legendProps are not provided', () => {
    expect(getLegendPosition(undefined, 'top')).toBe('top');
    expect(getLegendPosition({}, 'bottom')).toBe('bottom');
  });

  it('returns position if it is top or bottom', () => {
    expect(getLegendPosition({ position: 'bottom' }, 'top')).toBe('bottom');
    expect(getLegendPosition({ position: 'top' }, 'bottom')).toBe('top');
  });

  it('prefers position over verticalAlign', () => {
    expect(getLegendPosition({ position: 'bottom', verticalAlign: 'top' }, 'top')).toBe('bottom');
  });

  it('returns middle for positions that do not stack the legend above or below the chart', () => {
    expect(getLegendPosition({ position: 'left' }, 'top')).toBe('middle');
    expect(getLegendPosition({ position: 'insideTopLeft' }, 'top')).toBe('middle');
    expect(getLegendPosition({ position: { x: 10, y: 10 } }, 'bottom')).toBe('middle');
  });

  it('falls back to verticalAlign if position is not set', () => {
    expect(getLegendPosition({ verticalAlign: 'bottom' }, 'top')).toBe('bottom');
    expect(getLegendPosition({ verticalAlign: 'middle' }, 'top')).toBe('middle');
  });
});
