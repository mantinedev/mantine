import {
  createMemoStyles,
  MantineTheme,
  MantineSize,
  getFontStyles,
  getSizeValue,
  getThemeColor,
  getFocusStyles,
} from '../../theme';

export const sizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 26,
  xl: 36,
};

interface CheckboxStyles {
  theme: MantineTheme;
  size: MantineSize;
  color: string;
}

export default createMemoStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },

  inner: ({ size }: CheckboxStyles) => ({
    position: 'relative',
    width: getSizeValue({ size, sizes }),
    height: getSizeValue({ size, sizes }),
  }),

  label: ({ theme, size }: CheckboxStyles) => ({
    ...getFontStyles(theme),
    WebkitTapHighlightColor: 'transparent',
    paddingLeft: theme.spacing.sm,
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    lineHeight: `${getSizeValue({ size, sizes })}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  }),

  input: ({ size, theme, color }: CheckboxStyles) => ({
    ...getFocusStyles(theme),
    appearance: 'none',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0],
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
    }`,
    width: getSizeValue({ size, sizes }),
    height: getSizeValue({ size, sizes }),
    borderRadius: theme.radius.sm,
    padding: 0,
    outline: 0,
    display: 'block',
    margin: 0,

    '&:checked': {
      backgroundColor: getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === 'dark' ? 4 : 6,
      }),
      borderColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
      color: theme.white,

      '& + $icon': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
        display: 'block',
      },
    },

    '&:disabled': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[3],
      cursor: 'not-allowed',

      '& + $icon': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
      },
    },
  }),

  icon: {
    display: 'none',
    pointerEvents: 'none',
    width: '80%',
    height: '80%',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
  },
});
