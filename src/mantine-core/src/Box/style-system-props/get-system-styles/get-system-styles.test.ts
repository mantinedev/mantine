import { DEFAULT_THEME, rem } from '@mantine/styles';
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
      margin: rem(1),
      marginTop: rem(2),
      marginBottom: rem(3),
      marginRight: rem(4),
      marginLeft: rem(5),
    });

    expect(getSystemStyles({ mx: 6 }, DEFAULT_THEME)).toStrictEqual({
      marginLeft: rem(6),
      marginRight: rem(6),
    });

    expect(getSystemStyles({ my: 7 }, DEFAULT_THEME)).toStrictEqual({
      marginTop: rem(7),
      marginBottom: rem(7),
    });
  });

  it('correctly transforms paddings', () => {
    expect(getSystemStyles({ p: 1, pt: 2, pb: 3, pr: 4, pl: 5 }, DEFAULT_THEME)).toStrictEqual({
      padding: rem(1),
      paddingTop: rem(2),
      paddingBottom: rem(3),
      paddingRight: rem(4),
      paddingLeft: rem(5),
    });

    expect(getSystemStyles({ px: 6 }, DEFAULT_THEME)).toStrictEqual({
      paddingLeft: rem(6),
      paddingRight: rem(6),
    });

    expect(getSystemStyles({ py: 7 }, DEFAULT_THEME)).toStrictEqual({
      paddingTop: rem(7),
      paddingBottom: rem(7),
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

  it('correctly transforms width, max-width, height and max-height', () => {
    expect(getSystemStyles({ w: 200, h: 300, maw: 400, mah: 500 }, DEFAULT_THEME)).toStrictEqual({
      width: rem(200),
      height: rem(300),
      maxWidth: rem(400),
      maxHeight: rem(500),
    });
  });
});
