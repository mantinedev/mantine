import { createStyles, MantineColor, MantineTheme, rem, getSize } from '@mantine/styles';

export interface DividerStylesParams {
  color: MantineColor;
}

const sizes = {
  xs: rem(1),
  sm: rem(2),
  md: rem(3),
  lg: rem(4),
  xl: rem(5),
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

export default createStyles((theme, { color }: DividerStylesParams, { size, variant }) => ({
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
      height: rem(1),
      borderTop: `${getSize({ size, sizes })} ${variant} ${getColor(theme, color)}`,
      marginRight: theme.spacing.xs,
    },

    '&::after': {
      content: '""',
      flex: 1,
      borderTop: `${getSize({ size, sizes })} ${variant} ${getColor(theme, color)}`,
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
    borderTopWidth: rem(getSize({ size, sizes })),
    borderTopColor: getColor(theme, color),
    borderTopStyle: variant as any,
    margin: 0,
  },

  vertical: {
    border: 0,
    alignSelf: 'stretch',
    height: 'auto',
    borderLeftWidth: rem(getSize({ size, sizes })),
    borderLeftColor: getColor(theme, color),
    borderLeftStyle: variant as any,
  },
}));
