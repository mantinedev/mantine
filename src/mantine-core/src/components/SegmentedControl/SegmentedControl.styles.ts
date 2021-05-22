import {
  createMemoStyles,
  MantineTheme,
  MantineNumberSize,
  MantineSize,
  getFontStyles,
  getSizeValue,
  getThemeColor,
  getFocusStyles,
  hexToRgba,
} from '../../theme';

export const WRAPPER_PADDING = 4;

interface SegmentedControlStyles {
  theme: MantineTheme;
  fullWidth: boolean;
  color: string;
  radius: MantineNumberSize;
  reduceMotion: boolean;
  transitionDuration: number;
  transitionTimingFunction: string;
  size: MantineSize;
}

const sizes = {
  xs: [3, 6],
  sm: [5, 10],
  md: [7, 14],
  lg: [9, 16],
  xl: [12, 20],
};

export default createMemoStyles({
  input: ({ theme }: SegmentedControlStyles) => ({
    height: 0,
    width: 0,
    position: 'absolute',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    opacity: 0,

    // input is hidden by default, these styles add focus to label when user navigates with keyboard
    '&:focus': {
      outline: 'none',

      '& + $label': {
        outline: 'none',
        boxShadow: `0 0 0 2px ${
          theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
        }, 0 0 0 4px ${theme.colors[theme.primaryColor][5]}`,
      },

      '&:focus:not(:focus-visible)': {
        '& + $label': {
          boxShadow: 'none',
        },
      },
    },
  }),

  wrapper: ({ theme, fullWidth, radius }: SegmentedControlStyles) => ({
    position: 'relative',
    display: fullWidth ? 'flex' : 'inline-flex',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    overflow: 'hidden',
    padding: WRAPPER_PADDING,
  }),

  controlActive: {
    borderLeftColor: 'transparent !important',

    '& + $control': {
      borderLeftColor: 'transparent !important',
    },
  },

  control: ({
    theme,
    reduceMotion,
    transitionDuration,
    transitionTimingFunction,
  }: SegmentedControlStyles) => ({
    position: 'relative',
    boxSizing: 'border-box',
    flex: 1,
    zIndex: 2,
    transition: `border-left-color ${reduceMotion ? 0 : transitionDuration}ms ${
      transitionTimingFunction || theme.transitionTimingFunction
    }`,

    '&:not(:first-of-type)': {
      borderLeft: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  }),

  label: ({
    theme,
    radius,
    reduceMotion,
    transitionDuration,
    transitionTimingFunction,
    size,
  }: SegmentedControlStyles) => ({
    ...getFocusStyles(theme),
    ...getFontStyles(theme),
    WebkitTapHighlightColor: 'transparent',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    fontWeight: 500,
    fontSize: size in theme.fontSizes ? theme.fontSizes[size] : theme.fontSizes.sm,
    cursor: 'pointer',
    display: 'block',
    textAlign: 'center',
    padding: sizes[size in sizes ? size : 'sm'],
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    transition: `color ${reduceMotion ? 0 : transitionDuration}ms ${
      transitionTimingFunction || theme.transitionTimingFunction
    }`,

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    },
  }),

  labelActive: ({ theme, color }: SegmentedControlStyles) => ({
    '&, &:hover': {
      color: color in theme.colors || theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  }),

  active: ({
    theme,
    color,
    radius,
    reduceMotion,
    transitionDuration,
    transitionTimingFunction,
  }: SegmentedControlStyles) => ({
    boxSizing: 'border-box',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    position: 'absolute',
    top: 4,
    bottom: 4,
    zIndex: 1,
    boxShadow: color || theme.colorScheme === 'dark' ? 'none' : theme.shadows.xs,
    transition: `transform ${reduceMotion ? 0 : transitionDuration}ms ${
      theme.transitionTimingFunction
    }, width ${reduceMotion ? 0 : transitionDuration / 2}ms ${
      transitionTimingFunction || theme.transitionTimingFunction
    }`,
    backgroundColor:
      color in theme.colors
        ? hexToRgba(
            getThemeColor({ theme, color, shade: 6 }),
            theme.colorScheme === 'dark' ? 0.55 : 1
          )
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.white,
  }),
});
