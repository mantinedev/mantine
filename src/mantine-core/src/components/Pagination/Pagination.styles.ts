import { createStyles, MantineNumberSize, MantineColor } from '@mantine/styles';

export interface PaginationStylesParams {
  size: MantineNumberSize;
  radius: MantineNumberSize;
  color: MantineColor;
}

const sizes = {
  xs: 22,
  sm: 26,
  md: 32,
  lg: 38,
  xl: 44,
};

export default createStyles((theme, { size, radius, color }: PaginationStylesParams, getRef) => {
  const colors = theme.fn.variant({ color, variant: 'filled' });

  return {
    item: {
      ...theme.fn.focusStyles(),
      cursor: 'pointer',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 500,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3]
      }`,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      height: theme.fn.size({ size, sizes }),
      minWidth: theme.fn.size({ size, sizes }),
      padding: `0 ${theme.fn.size({ size, sizes: theme.spacing }) / 2}px`,
      fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
      borderRadius: theme.fn.radius(radius),
      lineHeight: 1,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,

      [`&:active:not(:disabled):not(.${getRef('dots')})`]: {
        transform: 'translateY(1px)',
      },

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      },
    },

    active: {
      borderColor: 'transparent',
      color: colors.color,
      backgroundColor: colors.background,
    },

    dots: {
      ref: getRef('dots'),
      cursor: 'default',
      borderColor: 'transparent',
      backgroundColor: 'transparent',
    },
  };
});
