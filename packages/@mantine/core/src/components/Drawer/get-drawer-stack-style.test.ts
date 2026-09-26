import { getDrawerStackStyle } from './get-drawer-stack-style';

describe('@mantine/core/get-drawer-stack-style', () => {
  it('returns identity for the top drawer', () => {
    expect(getDrawerStackStyle({ position: 'left', depth: 0, topSize: 440, ownSize: 440 })).toEqual(
      { translate: '0px 0px', scale: 1, transformOrigin: 'right center' }
    );
  });

  it('shifts a left drawer inward by 9px per depth and scales it toward its right edge', () => {
    expect(getDrawerStackStyle({ position: 'left', depth: 1, topSize: 440, ownSize: 440 })).toEqual(
      { translate: '9px 0px', scale: 0.9682, transformOrigin: 'right center' }
    );
    expect(getDrawerStackStyle({ position: 'left', depth: 2, topSize: 440, ownSize: 440 })).toEqual(
      { translate: '18px 0px', scale: 0.9364, transformOrigin: 'right center' }
    );
  });

  it('uses the edge facing away from the screen edge as transform origin for every position', () => {
    expect(
      getDrawerStackStyle({ position: 'right', depth: 1, topSize: 440, ownSize: 440 })
    ).toEqual({ translate: '-9px 0px', scale: 0.9682, transformOrigin: 'left center' });
    expect(
      getDrawerStackStyle({ position: 'bottom', depth: 1, topSize: 300, ownSize: 300 })
    ).toEqual({ translate: '0px -9px', scale: 0.9533, transformOrigin: 'center top' });
    expect(getDrawerStackStyle({ position: 'top', depth: 1, topSize: 300, ownSize: 300 })).toEqual({
      translate: '0px 9px',
      scale: 0.9533,
      transformOrigin: 'center bottom',
    });
  });

  it('interpolates toward the front based on dragProgress', () => {
    expect(
      getDrawerStackStyle({
        position: 'left',
        depth: 1,
        dragProgress: 0.5,
        topSize: 440,
        ownSize: 440,
      })
    ).toEqual({ translate: '4.5px 0px', scale: 0.9841, transformOrigin: 'right center' });
    expect(
      getDrawerStackStyle({
        position: 'left',
        depth: 1,
        dragProgress: 1,
        topSize: 440,
        ownSize: 440,
      })
    ).toEqual({ translate: '0px 0px', scale: 1, transformOrigin: 'right center' });
  });

  it('shifts a wider stacked drawer toward the screen edge without scaling it to fit', () => {
    const style = getDrawerStackStyle({ position: 'left', depth: 1, topSize: 440, ownSize: 780 });
    expect(style.scale).toBe(0.9821);
    expect(style.translate).toBe('-331px 0px');
  });

  it('moves a narrower stacked drawer so that it peeks past the top drawer', () => {
    const style = getDrawerStackStyle({ position: 'left', depth: 1, topSize: 780, ownSize: 440 });
    expect(style.scale).toBe(0.9682);
    expect(style.translate).toBe('349px 0px');
  });

  it('only shifts when sizes are unknown', () => {
    expect(
      getDrawerStackStyle({ position: 'left', depth: 1, topSize: null, ownSize: null })
    ).toEqual({ translate: '9px 0px', scale: 1, transformOrigin: 'right center' });
    expect(
      getDrawerStackStyle({ position: 'left', depth: 1, topSize: null, ownSize: 440 })
    ).toEqual({ translate: '9px 0px', scale: 0.9682, transformOrigin: 'right center' });
  });
});
