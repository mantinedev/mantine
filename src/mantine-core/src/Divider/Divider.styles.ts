import { createStyles, MantineNumberSize, MantineColor, MantineTheme } from '@mantine/styles';

export interface DividerStylesParams {
  size: MantineNumberSize;
  variant: 'solid' | 'dashed' | 'dotted';
  color: MantineColor;
}

const sizes = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5,
};

function getColor(theme: MantineTheme, color: MantineColor) {
  const themeColor = theme.fn.variant({ variant: 'outline', color }).border;

  return typeof color === 'string' && (color in theme.colors || color.split('.')[0] in theme.colors)
    ? themeColor
    : color === undefined
    ? theme.colorScheme === 'dark'
      ? theme.colors.dark[4]
      : theme.colors.gray[4]
    : color;
}

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
      borderTop: `${theme.fn.size({ size, sizes })}px ${variant} ${getColor(theme, color)}`,
      marginRight: theme.spacing.xs,
    },

    '&::after': {
      content: '""',
      flex: 1,
      borderTop: `${theme.fn.size({ size, sizes })}px ${variant} ${getColor(theme, color)}`,
      marginLeft: theme.spacing.xs,
    },
  },

  labelDefaultStyles: {
    color:
      color === 'dark'
        ? theme.colors.dark[1]
        : theme.fn.themeColor(
            color,
            theme.colorScheme === 'dark' ? 5 : theme.fn.primaryShade(),
            false
          ),
  },

  horizontal: {
    border: 0,
    borderTopWidth: theme.fn.size({ size, sizes }),
    borderTopColor: getColor(theme, color),
    borderTopStyle: variant,
    margin: 0,
  },

  vertical: {
    border: 0,
    alignSelf: 'stretch',
    height: 'auto',
    borderLeftWidth: theme.fn.size({ size, sizes }),
    borderLeftColor: getColor(theme, color),
    borderLeftStyle: variant,
  },
}));
