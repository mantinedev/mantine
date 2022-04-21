import { createStyles, MantineNumberSize, MantineSize, MantineColor } from '@mantine/styles';

export const sizes = {
  xs: 24,
  sm: 28,
  md: 32,
  lg: 36,
  xl: 40,
};

const iconSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
};

const padding = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
};

const checkedPadding = {
  xs: 7.5,
  sm: 10,
  md: 11.5,
  lg: 13,
  xl: 15,
};

export interface ChipStylesParams {
  radius: MantineNumberSize;
  size: MantineSize;
  color: MantineColor;
}

export default createStyles((theme, { radius, size, color }: ChipStylesParams, getRef) => ({
  root: {},

  label: {
    ref: getRef('label'),
    ...theme.fn.fontStyles(),
    boxSizing: 'border-box',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    display: 'inline-block',
    alignItems: 'center',
    userSelect: 'none',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
    }`,
    borderRadius: theme.fn.radius(radius),
    height: theme.fn.size({ size, sizes }),
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    lineHeight: `${theme.fn.size({ size, sizes }) - 2}px`,
    paddingLeft: theme.fn.size({ size, sizes: padding }),
    paddingRight: theme.fn.size({ size, sizes: padding }),
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background-color 100ms ease',
    WebkitTapHighlightColor: 'transparent',
  },

  outline: {
    ref: getRef('outline'),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    }),
  },

  filled: {
    ref: getRef('filled'),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    borderColor: 'transparent',

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  iconWrapper: {
    ref: getRef('iconWrapper'),
    color: theme.fn.variant({ variant: 'filled', color }).background,
    width:
      theme.fn.size({ size, sizes: iconSizes }) +
      theme.fn.size({ size, sizes: theme.spacing }) / 1.5,
    maxWidth:
      theme.fn.size({ size, sizes: iconSizes }) +
      theme.fn.size({ size, sizes: theme.spacing }) / 1.5,
    height: theme.fn.size({ size, sizes: iconSizes }),
    display: 'inline-block',
    verticalAlign: 'middle',
    overflow: 'hidden',
  },

  disabled: {
    backgroundColor: `${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    } !important`,
    borderColor: `${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    } !important`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    cursor: 'not-allowed',

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),

    [`& .${getRef('iconWrapper')}`]: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
  },

  checked: {
    paddingLeft: theme.fn.size({ size, sizes: checkedPadding }),
    paddingRight: theme.fn.size({ size, sizes: checkedPadding }),

    [`&.${getRef('outline')}`]: {
      border: `1px solid ${theme.fn.variant({ variant: 'filled', color }).background}`,
    },

    [`&.${getRef('filled')}`]: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color }).background,
      },
    },
  },

  checkIcon: {
    width: theme.fn.size({ size, sizes: iconSizes }),
    height: theme.fn.size({ size, sizes: iconSizes }) / 1.1,
    display: 'block',
  },

  input: {
    width: 0,
    height: 0,
    padding: 0,
    opacity: 0,
    margin: 0,

    // input is hidden by default, these styles add focus to label when user navigates with keyboard
    '&:focus': {
      outline: 'none',

      [`& + .${getRef('label')}`]: {
        outline: 'none',
        boxShadow:
          theme.focusRing === 'always' || theme.focusRing === 'auto'
            ? `0 0 0 2px ${
                theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
              }, 0 0 0 4px ${
                theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]
              }`
            : undefined,
      },

      '&:focus:not(:focus-visible)': {
        [`& + .${getRef('label')}`]: {
          boxShadow: theme.focusRing === 'auto' || theme.focusRing === 'never' ? 'none' : undefined,
        },
      },
    },
  },
}));
