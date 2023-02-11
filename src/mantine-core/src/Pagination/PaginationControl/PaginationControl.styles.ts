import { createStyles, rem, getSize, MantineColor, MantineNumberSize } from '@mantine/styles';

export const sizes = {
  xs: rem(22),
  sm: rem(26),
  md: rem(32),
  lg: rem(38),
  xl: rem(44),
};

interface PaginationControlStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
  withPadding: boolean;
}

export default createStyles(
  (theme, { color, radius, withPadding }: PaginationControlStylesParams, { size }) => {
    const colors = theme.fn.variant({ color, variant: 'filled' });

    return {
      control: {
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
        padding: withPadding ? `0 calc(${getSize({ size, sizes: theme.spacing })} / 2)` : undefined,
        fontSize: getSize({ size, sizes: theme.fontSizes }),
        borderRadius: theme.fn.radius(radius),
        lineHeight: 1,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,

        '&:not([data-disabled])': theme.fn.hover({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        }),

        '&:active:not([data-disabled])': theme.activeStyles,

        '&[data-disabled]': {
          opacity: 0.4,
          cursor: 'not-allowed',
        },

        '&[data-active]': {
          borderColor: 'transparent',
          color: colors.color,
          backgroundColor: colors.background,

          '&:not([data-disabled])': theme.fn.hover({
            backgroundColor: colors.hover,
          }),
        },
      },
    };
  }
);
