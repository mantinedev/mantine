import {
  MantineTheme,
  MantineNumberSize,
  getFontStyles,
  getSizeValue,
  createMemoStyles,
  MantineSize,
} from '../../theme';

interface InputStyles {
  theme: MantineTheme;
  radius: MantineNumberSize;
  size: MantineSize;
}

export const sizes = {
  xs: 28,
  sm: 36,
  md: 40,
  lg: 46,
  xl: 56,
};

export default createMemoStyles({
  withIcon: {},

  root: ({ radius, theme }: InputStyles) => ({
    position: 'relative',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),

    '&, & *': { boxSizing: 'border-box' },
  }),

  default: ({ theme, radius, size }: InputStyles) => ({
    '& $input': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      minHeight: getSizeValue({ size, sizes }),
      paddingLeft: getSizeValue({ size, sizes: theme.spacing }),
      paddingRight: getSizeValue({ size, sizes: theme.spacing }),
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
      transition: 'border-color 100ms ease, box-shadow 100ms ease',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      '&:focus': {
        outline: 'none',
        borderColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 8 : 6],
      },
    },

    '&$invalid $input': {
      borderColor: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6],
    },

    '& $withIcon': {
      paddingLeft: 35,
    },

    '& $icon': {
      width: getSizeValue({ size, sizes }),
    },
  }),

  filled: ({ theme, radius, size }: InputStyles) => ({
    '& $input': {
      minHeight: getSizeValue({ size, sizes }),
      paddingLeft: getSizeValue({ size, sizes: theme.spacing }),
      paddingRight: getSizeValue({ size, sizes: theme.spacing }),
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
      border: '1px solid transparent',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      '&:focus': {
        outline: 'none',
        borderColor: `${
          theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 8 : 6]
        } !important`,
      },

      '&::placeholder': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      },
    },

    '& $input:disabled': {
      '&::placeholder': {
        color: theme.colors.gray[5],
      },
    },

    '&$invalid $input': {
      borderColor: theme.colorScheme === 'dark' ? theme.colors.red[4] : 'transparent',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.red[0],
    },

    '& $withIcon': {
      paddingLeft: 35,
    },

    '& $icon': {
      width: getSizeValue({ size, sizes }),
      color: theme.colors.gray[6],
    },
  }),

  unstyled: ({ theme }: InputStyles) => ({
    '& $input': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      backgroundColor: 'transparent',
      height: 28,
      border: 0,
      outline: 0,

      '&:disabled': {
        backgroundColor: 'transparent',
      },
    },

    '& $icon': {
      width: 28,
    },

    '& $withIcon': {
      paddingLeft: 34,
    },
  }),

  input: ({ theme, size }: InputStyles) => ({
    ...getFontStyles(theme),
    WebkitTapHighlightColor: 'transparent',
    lineHeight: theme.lineHeight,
    appearance: 'none',
    resize: 'none',
    boxSizing: 'border-box',
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    width: '100%',
    color: theme.black,
    display: 'block',
    textAlign: 'left',

    '&:disabled': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&::placeholder': {
      opacity: 1,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },

    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
      {
        appearance: 'none',
      },

    '&[type=number]': {
      MozAppearance: 'textfield',
    },
  }),

  icon: ({ theme }: InputStyles) => ({
    pointerEvents: 'none',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),

  invalid: ({ theme }: InputStyles) => ({
    '& $input': {
      color: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6],
      borderColor: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6],

      '&::placeholder': {
        color: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6],
      },
    },

    '& $icon': {
      color: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6],
    },
  }),

  rightSection: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
