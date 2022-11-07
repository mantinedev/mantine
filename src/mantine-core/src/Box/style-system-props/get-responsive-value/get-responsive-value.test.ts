import { DEFAULT_THEME } from '@mantine/styles';
import { getResponsiveValue } from './get-responsive-value';
import { valueGetters } from '../value-getters/value-getters';

const defaultProps = {
  theme: DEFAULT_THEME,
  getValue: valueGetters.spacing,
};

describe('@mantine/core/Box/get-responsive-value', () => {
  it('returns correct styles when value is not responsive', () => {
    expect(getResponsiveValue({ ...defaultProps, value: 'lg', property: 'margin' })).toStrictEqual({
      margin: DEFAULT_THEME.spacing.lg,
    });

    expect(
      getResponsiveValue({
        ...defaultProps,
        value: 'lg',
        property: ['marginLeft', 'marginRight', 'marginTop'],
      })
    ).toStrictEqual({
      marginLeft: DEFAULT_THEME.spacing.lg,
      marginRight: DEFAULT_THEME.spacing.lg,
      marginTop: DEFAULT_THEME.spacing.lg,
    });
  });

  it('returns correct styles when value is responsive', () => {
    expect(
      getResponsiveValue({
        ...defaultProps,
        value: { base: 12, xs: 34, lg: 45 },
        property: 'margin',
      })
    ).toStrictEqual({
      margin: 12,

      [DEFAULT_THEME.fn.largerThan('xs')]: {
        margin: 34,
      },

      [DEFAULT_THEME.fn.largerThan('lg')]: {
        margin: 45,
      },
    });

    expect(
      getResponsiveValue({
        ...defaultProps,
        value: { base: 12, xs: 34, lg: 45 },
        property: ['marginLeft', 'marginRight'],
      })
    ).toStrictEqual({
      marginLeft: 12,
      marginRight: 12,

      [DEFAULT_THEME.fn.largerThan('xs')]: {
        marginLeft: 34,
        marginRight: 34,
      },

      [DEFAULT_THEME.fn.largerThan('lg')]: {
        marginLeft: 45,
        marginRight: 45,
      },
    });
  });
});
