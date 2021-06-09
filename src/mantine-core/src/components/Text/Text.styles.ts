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

export default createMemoStyles({
  root: ({ theme, color, variant, size }: TextStyles) => ({
    ...getFontStyles(theme),
    ...getFocusStyles(theme),
    color:
      color in theme.colors
        ? theme.colors[color][theme.colorScheme === 'dark' ? 4 : 6]
        : variant === 'link'
        ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.black,
    fontSize: theme.fontSizes[size],
    lineHeight: theme.lineHeight,
    textDecoration: 'none',
    WebkitTapHighlightColor: 'transparent',

    '&:hover': {
      textDecoration: variant === 'link' ? 'underline' : 'none',
    },
  }),
});
