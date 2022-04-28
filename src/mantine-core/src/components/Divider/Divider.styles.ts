import { createStyles, MantineNumberSize, MantineColor } from '@mantine/styles';

export interface DividerStylesParams {
  size: MantineNumberSize;
  variant: 'solid' | 'dashed' | 'dotted';
  color: MantineColor;
}

export const sizes = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5,
};

export default createStyles((theme, { size, variant, color }: DividerStylesParams) => ({
  root: {},

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

    '&::before': {
      content: '""',
      flex: 1,
      height: 1,
      borderTop: `${theme.fn.size({ size, sizes })}px ${variant} ${theme.fn.themeColor(
        color,
        theme.colorScheme === 'dark' ? 3 : 4
      )}`,
      marginRight: theme.spacing.xs,
    },

    '&::after': {
      content: '""',
      flex: 1,
      borderTop: `${theme.fn.size({ size, sizes })}px ${variant} ${theme.fn.themeColor(
        color,
        theme.colorScheme === 'dark' ? 3 : 4
      )}`,
      marginLeft: theme.spacing.xs,
    },
  },

  labelDefaultStyles: {
    color:
      color === 'dark'
        ? theme.colors.dark[1]
        : theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 5 : theme.fn.primaryShade()),
  },

  horizontal: {
    border: 0,
    borderTopWidth: theme.fn.size({ size, sizes }),
    borderTopColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 3 : 4),
    borderTopStyle: variant,
    margin: 0,
  },

  vertical: {
    border: 0,
    alignSelf: 'stretch',
    height: '100%',
    borderLeftWidth: theme.fn.size({ size, sizes }),
    borderLeftColor: theme.fn.themeColor(color, 4),
    borderLeftStyle: variant,
  },
}));
