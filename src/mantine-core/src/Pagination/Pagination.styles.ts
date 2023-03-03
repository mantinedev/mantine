import { createStyles, MantineNumberSize, MantineColor, rem, getSize } from '@mantine/styles';

export interface PaginationStylesParams {
  radius: MantineNumberSize;
  color: MantineColor;
}

const sizes = {
  xs: rem(22),
  sm: rem(26),
  md: rem(32),
  lg: rem(38),
  xl: rem(44),
};

export default createStyles((theme, { radius, color }: PaginationStylesParams, { size }) => {
  const colors = theme.fn.variant({ color, variant: 'filled' });

  return {
    root: {},

    item: {
      ...theme.fn.fontStyles(),
      ...theme.fn.focusStyles(),
      cursor: 'pointer',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      height: getSize({ size, sizes }),
      minWidth: getSize({ size, sizes }),
      padding: `0 calc(${getSize({ size, sizes: theme.spacing })}) / 2`,
      fontSize: getSize({ size, sizes: theme.fontSizes }),
      borderRadius: theme.fn.radius(radius),
      lineHeight: 1,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,

      '&:active:not(:disabled):not([data-dots])': theme.activeStyles,

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      },

      '&[data-dots]': {
        cursor: 'default',
        borderColor: 'transparent',
        backgroundColor: 'transparent',
      },

      '&[data-active]': {
        borderColor: 'transparent',
        color: colors.color,
        backgroundColor: colors.background,
      },
    },
  };
});
