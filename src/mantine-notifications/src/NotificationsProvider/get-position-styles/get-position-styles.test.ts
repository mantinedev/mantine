import getPositionStyles from './get-position-styles';

describe('@mantine/notifications/get-position-styles', () => {
  it('returns correct values for all positions', () => {
    expect(getPositionStyles(['top', 'left'], 20)).toStrictEqual({ top: 20, left: 20 });
    expect(getPositionStyles(['top', 'right'], 20)).toStrictEqual({ top: 20, right: 20 });
    expect(getPositionStyles(['top', 'center'], 20)).toStrictEqual({
      top: 20,
      left: '50%',
      transform: 'translateX(-50%)',
    });

    expect(getPositionStyles(['bottom', 'left'], 20)).toStrictEqual({ bottom: 20, left: 20 });
    expect(getPositionStyles(['bottom', 'right'], 20)).toStrictEqual({
      bottom: 20,
      right: 20,
    });
    expect(getPositionStyles(['bottom', 'center'], 20)).toStrictEqual({
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
    });
  });
});
