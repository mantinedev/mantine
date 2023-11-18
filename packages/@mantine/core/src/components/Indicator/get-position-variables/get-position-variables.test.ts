import { rem } from '../../../core';
import { getPositionVariables } from './get-position-variables';

describe('@mantine/core/Indicator/get-position-variables', () => {
  it('returns correct variables for different positions', () => {
    expect(getPositionVariables('top-start', 16)).toStrictEqual({
      '--indicator-top': rem(16),
      '--indicator-bottom': undefined,
      '--indicator-left': rem(16),
      '--indicator-right': undefined,
      '--indicator-translate-x': '-50%',
      '--indicator-translate-y': '-50%',
    });

    expect(getPositionVariables('top-center', 16)).toStrictEqual({
      '--indicator-top': rem(16),
      '--indicator-bottom': undefined,
      '--indicator-left': '50%',
      '--indicator-right': undefined,
      '--indicator-translate-x': '-50%',
      '--indicator-translate-y': '-50%',
    });

    expect(getPositionVariables('top-end', 16)).toStrictEqual({
      '--indicator-top': rem(16),
      '--indicator-bottom': undefined,
      '--indicator-left': undefined,
      '--indicator-right': rem(16),
      '--indicator-translate-x': '50%',
      '--indicator-translate-y': '-50%',
    });

    expect(getPositionVariables('middle-start', 16)).toStrictEqual({
      '--indicator-top': '50%',
      '--indicator-bottom': undefined,
      '--indicator-left': rem(16),
      '--indicator-right': undefined,
      '--indicator-translate-x': '-50%',
      '--indicator-translate-y': '-50%',
    });

    expect(getPositionVariables('middle-center', 16)).toStrictEqual({
      '--indicator-top': '50%',
      '--indicator-bottom': undefined,
      '--indicator-left': '50%',
      '--indicator-right': undefined,
      '--indicator-translate-x': '-50%',
      '--indicator-translate-y': '-50%',
    });

    expect(getPositionVariables('middle-end', 16)).toStrictEqual({
      '--indicator-top': '50%',
      '--indicator-bottom': undefined,
      '--indicator-left': undefined,
      '--indicator-right': rem(16),
      '--indicator-translate-x': '50%',
      '--indicator-translate-y': '-50%',
    });

    expect(getPositionVariables('bottom-start', 16)).toStrictEqual({
      '--indicator-top': undefined,
      '--indicator-bottom': rem(16),
      '--indicator-left': rem(16),
      '--indicator-right': undefined,
      '--indicator-translate-x': '-50%',
      '--indicator-translate-y': '50%',
    });

    expect(getPositionVariables('bottom-center', 16)).toStrictEqual({
      '--indicator-top': undefined,
      '--indicator-bottom': rem(16),
      '--indicator-left': '50%',
      '--indicator-right': undefined,
      '--indicator-translate-x': '-50%',
      '--indicator-translate-y': '50%',
    });

    expect(getPositionVariables('bottom-end', 16)).toStrictEqual({
      '--indicator-top': undefined,
      '--indicator-bottom': rem(16),
      '--indicator-left': undefined,
      '--indicator-right': rem(16),
      '--indicator-translate-x': '50%',
      '--indicator-translate-y': '50%',
    });
  });
});
