import {
  createMemoStyles,
  MantineTheme,
  MantineNumberSize,
  MantineSize,
  getSizeValue,
  getFontStyles,
  getThemeColor,
} from '../../../theme';

export const sizes = {
  xs: 24,
  sm: 28,
  md: 32,
  lg: 36,
  xl: 40,
};

interface ChipStyles {
  theme: MantineTheme;
  radius: MantineNumberSize;
  size: MantineSize;
  color: string;
}

export default createMemoStyles({
  root: ({ theme, radius, size }: ChipStyles) => ({
    ...getFontStyles(theme),
    display: 'inline-block',
    alignItems: 'center',
    userSelect: 'none',
    backgroundColor: theme.white,
    border: `1px solid ${theme.colors.gray[4]}`,
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    height: getSizeValue({ size, sizes }),
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    lineHeight: `${getSizeValue({ size, sizes })}px`,
    paddingLeft: 22,
    paddingRight: 22,
    cursor: 'pointer',
    whiteSpace: 'nowrap',

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  }),

  checkIcon: ({ theme, color, size }: ChipStyles) => ({
    color: getThemeColor({ theme, color, shade: 6 }),
    marginRight: getSizeValue({ size, sizes: theme.spacing }) / 2,
    width: 14,
    height: 14,
    display: 'inline-block',
    verticalAlign: 'middle',
  }),

  input: {
    display: 'none',
  },
});
