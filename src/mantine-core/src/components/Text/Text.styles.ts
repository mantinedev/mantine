import {
  createMemoStyles,
  MantineTheme,
  MantineSize,
  getFocusStyles,
  getFontStyles,
} from '../../theme';

interface TextStyles {
  theme: MantineTheme;
  color: string;
  variant: 'text' | 'link';
  size: MantineSize;
}

function getTextColor({ theme, color, variant }: Partial<TextStyles>) {
  if (color === 'dimmed') {
    return theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6];
  }

  return color in theme.colors
    ? theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7]
    : variant === 'link'
    ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 7]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[0]
    : theme.black;
}

export default createMemoStyles({
  root: ({ theme, color, variant, size }: TextStyles) => ({
    ...getFontStyles(theme),
    ...getFocusStyles(theme),
    color: getTextColor({ color, theme, variant }),
    fontSize: theme.fontSizes[size],
    lineHeight: theme.lineHeight,
    textDecoration: 'none',
    WebkitTapHighlightColor: 'transparent',

    '&:hover': {
      textDecoration: variant === 'link' ? 'underline' : 'none',
    },
  }),
});
