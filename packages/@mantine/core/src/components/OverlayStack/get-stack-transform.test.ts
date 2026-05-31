import { getStackTransform } from './get-stack-transform';

describe('@mantine/core/get-stack-transform', () => {
  it('returns identity (matching the modal transform format) for the top item', () => {
    expect(getStackTransform({ kind: 'modal', depth: 0, dragProgress: 0 })).toEqual({
      transform: 'translateY(0px)',
      opacity: 1,
    });
  });

  it('returns identity (matching the drawer transform format) for the top drawer', () => {
    expect(
      getStackTransform({ kind: 'drawer', position: 'bottom', depth: 0, dragProgress: 0 })
    ).toEqual({
      transform: 'scale(1) translateY(0px)',
      opacity: 1,
    });
  });

  it('offsets upward without scaling for modal without dimming', () => {
    const r = getStackTransform({ kind: 'modal', depth: 1, dragProgress: 0 });
    expect(r.transform).toBe('translateY(-9px)');
    expect(r.transform).not.toContain('scale');
    expect(r.opacity).toBe(1);
  });

  it('offsets deeper modal cards further up without scaling', () => {
    const r = getStackTransform({ kind: 'modal', depth: 2, dragProgress: 0 });
    expect(r.transform).toBe('translateY(-18px)');
    expect(r.transform).not.toContain('scale');
    expect(r.opacity).toBe(1);
  });

  it('drawer bottom recedes toward the bottom edge without dimming', () => {
    const r = getStackTransform({ kind: 'drawer', position: 'bottom', depth: 1, dragProgress: 0 });
    expect(r.transform).toContain('translateY');
    expect(r.opacity).toBe(1);
  });

  it('drawer left recedes toward the left edge without dimming', () => {
    const r = getStackTransform({ kind: 'drawer', position: 'left', depth: 1, dragProgress: 0 });
    expect(r.transform).toContain('translateX');
    expect(r.opacity).toBe(1);
  });

  it('interpolates one step toward front based on dragProgress', () => {
    const half = getStackTransform({ kind: 'modal', depth: 1, dragProgress: 0.5 });
    const full = getStackTransform({ kind: 'modal', depth: 1, dragProgress: 1 });
    expect(half.transform).toBe('translateY(-4.5px)');
    expect(full).toEqual({ transform: 'translateY(0px)', opacity: 1 });
  });

  it('clamps effective depth at zero', () => {
    expect(getStackTransform({ kind: 'modal', depth: 0, dragProgress: 0.5 })).toEqual({
      transform: 'translateY(0px)',
      opacity: 1,
    });
  });

  it('drawer top recedes toward the top edge with negative offset', () => {
    const r = getStackTransform({ kind: 'drawer', position: 'top', depth: 1, dragProgress: 0 });
    expect(r.transform).toContain('translateY(-16px)');
  });

  it('drawer right recedes toward the right edge with positive offset', () => {
    const r = getStackTransform({ kind: 'drawer', position: 'right', depth: 1, dragProgress: 0 });
    expect(r.transform).toContain('translateX(16px)');
  });
});
