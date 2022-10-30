import { DEFAULT_THEME } from '@mantine/styles';
import { getSystemStyles } from './get-system-styles';

describe('@mantine/core/Box/get-system-styles', () => {
  it('transforms system props in styles', () => {
    expect(
      getSystemStyles(
        {
          m: 'xl',
          bg: { base: 'pink.1', xs: 'blue', md: '#CECECE' },
          c: {
            base: 'cyan',
            xs: 'orange.1',
          },
        },
        DEFAULT_THEME
      )
    ).toStrictEqual({
      margin: DEFAULT_THEME.spacing.xl,
      background: DEFAULT_THEME.colors.pink[1],
      color: DEFAULT_THEME.colors.cyan[6],

      [DEFAULT_THEME.fn.largerThan('xs')]: {
        background: DEFAULT_THEME.colors.blue[6],
        color: DEFAULT_THEME.colors.orange[1],
      },

      [DEFAULT_THEME.fn.largerThan('md')]: {
        background: '#CECECE',
      },
    });
  });

  it('correctly transforms margins', () => {
    expect(getSystemStyles({ m: 1, mt: 2, mb: 3, mr: 4, ml: 5 }, DEFAULT_THEME)).toStrictEqual({
      margin: 1,
      marginTop: 2,
      marginBottom: 3,
      marginRight: 4,
      marginLeft: 5,
    });

    expect(getSystemStyles({ mx: 6 }, DEFAULT_THEME)).toStrictEqual({
      marginLeft: 6,
      marginRight: 6,
    });

    expect(getSystemStyles({ my: 7 }, DEFAULT_THEME)).toStrictEqual({
      marginTop: 7,
      marginBottom: 7,
    });
  });

  it('correctly transforms paddings', () => {
    expect(getSystemStyles({ p: 1, pt: 2, pb: 3, pr: 4, pl: 5 }, DEFAULT_THEME)).toStrictEqual({
      padding: 1,
      paddingTop: 2,
      paddingBottom: 3,
      paddingRight: 4,
      paddingLeft: 5,
    });

    expect(getSystemStyles({ px: 6 }, DEFAULT_THEME)).toStrictEqual({
      paddingLeft: 6,
      paddingRight: 6,
    });

    expect(getSystemStyles({ py: 7 }, DEFAULT_THEME)).toStrictEqual({
      paddingTop: 7,
      paddingBottom: 7,
    });
  });

  it('correctly transforms color', () => {
    expect(getSystemStyles({ c: '#434343' }, DEFAULT_THEME)).toStrictEqual({
      color: '#434343',
    });
  });

  it('correctly transforms background', () => {
    expect(getSystemStyles({ bg: '#545454' }, DEFAULT_THEME)).toStrictEqual({
      background: '#545454',
    });
  });
});
