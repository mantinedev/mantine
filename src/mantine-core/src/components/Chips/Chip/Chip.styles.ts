import {
  createStyles,
  MantineNumberSize,
  MantineSize,
  getSharedColorScheme,
  MantineColor,
} from '@mantine/styles';

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

interface ChipStyles {
  radius: MantineNumberSize;
  size: MantineSize;
  color: MantineColor;
}

export default createStyles((theme, { radius, size, color }: ChipStyles, getRef) => {
  const label = {
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
    borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
    height: theme.fn.size({ size, sizes }),
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    lineHeight: `${theme.fn.size({ size, sizes }) - 2}px`,
    paddingLeft: theme.fn.size({ size, sizes: padding }),
    paddingRight: theme.fn.size({ size, sizes: padding }),
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background-color 100ms ease',
    WebkitTapHighlightColor: 'transparent',
  } as const;

  const outline = {
    ref: getRef('outline'),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  } as const;

  const filled = {
    ref: getRef('filled'),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    borderColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  } as const;

  const iconWrapper = {
    ref: getRef('iconWrapper'),
    color: theme.fn.themeColor(color, 6),
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
  } as const;

  return {
    root: {},

    label,
    filled,
    iconWrapper,
    outline,

    disabled: {
      backgroundColor: `${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      } !important`,
      borderColor: `${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      } !important`,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      cursor: 'not-allowed',

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      },

      [`& .${iconWrapper.ref}`]: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      },
    },

    checked: {
      paddingLeft: theme.fn.size({ size, sizes: checkedPadding }),
      paddingRight: theme.fn.size({ size, sizes: checkedPadding }),

      [`&.${outline.ref}`]: {
        border: `1px solid ${theme.fn.themeColor(color, 6)}`,
      },

      [`&.${filled.ref}`]: {
        '&, &:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? getSharedColorScheme({ color, theme, variant: 'light' }).background
              : theme.fn.themeColor(color, 1),
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

        [`& + .${label.ref}`]: {
          outline: 'none',
          boxShadow: `0 0 0 2px ${
            theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
          }, 0 0 0 4px ${theme.colors[theme.primaryColor][5]}`,
        },

        '&:focus:not(:focus-visible)': {
          [`& + .${label.ref}`]: {
            boxShadow: 'none',
          },
        },
      },
    },
  };
});
