import getPositionStyles from './get-position-styles';

describe('@mantine/notifications/get-position-styles', () => {
  it('returns correct values for all positions', () => {
    expect(getPositionStyles(['top', 'left'], 400, 20)).toEqual({ top: 20, left: 20 });
    expect(getPositionStyles(['top', 'right'], 400, 20)).toEqual({ top: 20, right: 20 });
    expect(getPositionStyles(['top', 'center'], 400, 20)).toEqual({
      top: 20,
      left: 'calc(50% - 200px)',
    });

    expect(getPositionStyles(['bottom', 'left'], 400, 20)).toEqual({ bottom: 20, left: 20 });
    expect(getPositionStyles(['bottom', 'right'], 400, 20)).toEqual({ bottom: 20, right: 20 });
    expect(getPositionStyles(['bottom', 'center'], 400, 20)).toEqual({
      bottom: 20,
      left: 'calc(50% - 200px)',
    });
  });
});
