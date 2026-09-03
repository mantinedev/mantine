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

  it('does not set transform when offset is 0', () => {
    const result = getDrawerInnerStyle({ position: 'bottom', dragging: false, dragOffset: 0 });
    expect(result.transform).toBeUndefined();
  });
});
