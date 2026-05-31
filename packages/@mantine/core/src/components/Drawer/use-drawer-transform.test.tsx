import { getDrawerInnerStyle } from './use-drawer-transform';

describe('@mantine/core/getDrawerInnerStyle', () => {
  it('applies translateY and disables transition while dragging (bottom)', () => {
    const result = getDrawerInnerStyle({
      position: 'bottom',
      dragging: true,
      dragOffset: 50,
    });

    expect(result.transform).toContain('translateY(50px)');
    expect(result.transition).toBe('none');
  });

  it('does not set transition none when not dragging', () => {
    const result = getDrawerInnerStyle({
      position: 'bottom',
      dragging: false,
      dragOffset: 0,
    });

    expect(result.transition).toBeUndefined();
  });

  it('applies negative translateY for top position', () => {
    const result = getDrawerInnerStyle({
      position: 'top',
      dragging: true,
      dragOffset: 40,
    });

    expect(result.transform).toContain('translateY(-40px)');
  });

  it('applies negative translateX for left position', () => {
    const result = getDrawerInnerStyle({
      position: 'left',
      dragging: true,
      dragOffset: 30,
    });

    expect(result.transform).toContain('translateX(-30px)');
  });

  it('applies positive translateX for right position', () => {
    const result = getDrawerInnerStyle({
      position: 'right',
      dragging: true,
      dragOffset: 30,
    });

    expect(result.transform).toContain('translateX(30px)');
  });

  it('composes drag translate with base transform', () => {
    const result = getDrawerInnerStyle({
      position: 'bottom',
      dragging: true,
      dragOffset: 20,
      baseTransform: 'scale(0.95) translateY(16px)',
    });

    expect(result.transform).toContain('scale(0.95) translateY(16px)');
    expect(result.transform).toContain('translateY(20px)');
  });

  it('passes through base opacity', () => {
    const result = getDrawerInnerStyle({
      position: 'bottom',
      dragging: false,
      dragOffset: 0,
      baseOpacity: 0.8,
    });

    expect(result.opacity).toBe(0.8);
  });

  it('returns base transform without drag translate when offset is 0', () => {
    const result = getDrawerInnerStyle({
      position: 'bottom',
      dragging: false,
      dragOffset: 0,
      baseTransform: 'scale(0.9)',
    });

    expect(result.transform).toBe('scale(0.9)');
  });
});
