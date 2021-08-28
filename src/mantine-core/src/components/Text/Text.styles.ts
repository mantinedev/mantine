import {
  createMemoStyles,
  MantineTheme,
  MantineSize,
  getFocusStyles,
  getFontStyles,
  getSharedColorScheme,
} from '../../theme';

interface TextStyles {
  theme: MantineTheme;
  color: string;
  variant: 'text' | 'link' | 'gradient';
  size: MantineSize;
  lineClamp: number;
  inline: boolean;
  gradientFrom: string;
  gradientTo: string;
  gradientDeg: number;
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

function getLineClamp(lineClamp: number): React.CSSProperties {
  if (typeof lineClamp === 'number') {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: lineClamp,
      WebkitBoxOrient: 'vertical',
    };
  }

  return null;
}

export default createMemoStyles({
  root: ({ theme, color, variant, size, lineClamp, inline }: TextStyles) => ({
    ...getFontStyles(theme),
    ...getFocusStyles(theme),
    ...getLineClamp(lineClamp),
    color: getTextColor({ color, theme, variant }),
    fontSize: theme.fontSizes[size],
    lineHeight: inline ? 1 : theme.lineHeight,
    textDecoration: 'none',
    WebkitTapHighlightColor: 'transparent',

    '&:hover': {
      textDecoration: variant === 'link' ? 'underline' : 'none',
    },
  }),

  gradient: ({ theme, gradientDeg, gradientTo, gradientFrom }: TextStyles) => {
    const colors = getSharedColorScheme({
      theme,
      variant: 'gradient',
      gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg },
    });

    return {
      backgroundImage: colors.background,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    };
  },
});
