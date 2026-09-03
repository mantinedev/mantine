import { getCenteredStackOffset, getStackTransform } from './get-stack-transform';

describe('@mantine/core/get-stack-transform', () => {
  it('returns identity for the top item', () => {
    expect(getStackTransform({ depth: 0, dragProgress: 0 })).toEqual({
      transform: 'translateY(0px)',
    });
  });

  it('offsets stacked cards upward by 9px per depth without scaling', () => {
    expect(getStackTransform({ depth: 1 }).transform).toBe('translateY(-9px)');
    expect(getStackTransform({ depth: 2 }).transform).toBe('translateY(-18px)');
  });

  it('interpolates one step toward front based on dragProgress', () => {
    expect(getStackTransform({ depth: 1, dragProgress: 0.5 }).transform).toBe('translateY(-4.5px)');
    expect(getStackTransform({ depth: 1, dragProgress: 1 })).toEqual({
      transform: 'translateY(0px)',
    });
  });

  it('clamps effective depth at zero', () => {
    expect(getStackTransform({ depth: 0, dragProgress: 0.5 })).toEqual({
      transform: 'translateY(0px)',
    });
  });

  it('adds extra offset to the depth-based translate', () => {
    expect(getStackTransform({ depth: 1, offset: 7 }).transform).toBe('translateY(-16px)');
  });
});

describe('@mantine/core/get-centered-stack-offset', () => {
  it('returns half of the clamp step when the stacked item is at least as tall as the clamp', () => {
    expect(getCenteredStackOffset({ topHeight: 200, ownHeight: 200, depth: 1 })).toBe(7);
    expect(getCenteredStackOffset({ topHeight: 200, ownHeight: 500, depth: 2 })).toBe(14);
  });

  it('returns half of the height difference when the stacked item is shorter than the clamp', () => {
    expect(getCenteredStackOffset({ topHeight: 300, ownHeight: 100, depth: 1 })).toBe(100);
  });

  it('assumes the clamped height when the own height is unknown', () => {
    expect(getCenteredStackOffset({ topHeight: 200, ownHeight: null, depth: 1 })).toBe(7);
    expect(getCenteredStackOffset({ topHeight: 200, ownHeight: 0, depth: 1 })).toBe(7);
  });
});
