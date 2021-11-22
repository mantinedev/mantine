import { getFallbackPlacement } from './get-fallback-placement';

describe('@mantine/core/Popper/getFallbackPlacement', () => {
  it('returns correct position for end and start placement', () => {
    expect(getFallbackPlacement('left-start')).toEqual([
      'left-start',
      'left-end',
      'right-start',
      'right-end',
    ]);

    expect(getFallbackPlacement('left-end')).toEqual([
      'left-end',
      'left-start',
      'right-end',
      'right-start',
    ]);

    expect(getFallbackPlacement('right-end')).toEqual([
      'right-end',
      'right-start',
      'left-end',
      'left-start',
    ]);

    expect(getFallbackPlacement('bottom-end')).toEqual([
      'bottom-end',
      'bottom-start',
      'top-end',
      'top-start',
    ]);

    expect(getFallbackPlacement('bottom-start')).toEqual([
      'bottom-start',
      'bottom-end',
      'top-start',
      'top-end',
    ]);

    expect(getFallbackPlacement('top-start')).toEqual([
      'top-start',
      'top-end',
      'bottom-start',
      'bottom-end',
    ]);
  });

  it('returns correct position for center placement', () => {
    expect(getFallbackPlacement('right')).toEqual(['right', 'left']);
    expect(getFallbackPlacement('top')).toEqual(['top', 'bottom']);
  });
});
