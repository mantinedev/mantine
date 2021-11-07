import { createStyles, MantineNumberSize, getSizeValue, MantineColor } from '@mantine/styles';

interface DividerStyles {
  size: MantineNumberSize;
  variant: string;
  color: MantineColor;
}

export const sizes = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5,
};

export default createStyles((theme, { size, variant, color }: DividerStyles) => ({
  withLabel: {
    borderTop: '0 !important',
  },

  left: {
    '&::before': {
      display: 'none',
    },
  },

  right: {
    '&::after': {
      display: 'none',
    },
  },

  label: {
    display: 'flex',
    alignItems: 'center',
    color: color === 'dark' ? theme.colors.dark[1] : theme.fn.themeColor(color, 6),

    '&::before': {
      content: '""',
      flex: 1,
      height: 1,
      borderTop: `1px ${variant} ${theme.fn.themeColor(
        color,
        theme.colorScheme === 'dark' ? 3 : 4
      )}`,
      marginRight: theme.spacing.xs,
    },

    '&::after': {
      content: '""',
      flex: 1,
      borderTop: `1px ${variant} ${theme.fn.themeColor(
        color,
        theme.colorScheme === 'dark' ? 3 : 4
      )}`,
      marginLeft: theme.spacing.xs,
    },
  },

  horizontal: {
    border: 0,
    borderTopWidth: getSizeValue({ size, sizes }),
    borderTopColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 3 : 4),
    borderTopStyle: variant as any,
    margin: 0,
  },

  vertical: {
    border: 0,
    alignSelf: 'stretch',
    borderLeftWidth: getSizeValue({ size, sizes }),
    borderLeftColor: theme.fn.themeColor(color, 4),
    borderLeftStyle: variant as any,
  },
}));
