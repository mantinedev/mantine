import {
  createStyles,
  MantineTheme,
  MantineSize,
  getFocusStyles,
  getFontStyles,
  getSharedColorScheme,
  MantineColor,
} from '@mantine/tss';

interface TextStyles {
  color: MantineColor;
  variant: 'text' | 'link' | 'gradient';
  size: MantineSize;
  lineClamp: number;
  inline: boolean;
  inherit: boolean;
  gradientFrom: string;
  gradientTo: string;
  gradientDeg: number;
}

interface GetTextColor {
  theme: MantineTheme;
  color: MantineColor;
  variant: TextStyles['variant'];
}

function getTextColor({ theme, color, variant }: GetTextColor) {
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

export default createStyles(
  (
    theme,
    {
      color,
      variant,
      size,
      lineClamp,
      inline,
      inherit,
      gradientDeg,
      gradientTo,
      gradientFrom,
    }: TextStyles
  ) => {
    const colors = getSharedColorScheme({
      theme,
      variant: 'gradient',
      gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg },
    });

    return {
      root: {
        ...getFontStyles(theme),
        ...getFocusStyles(theme),
        ...getLineClamp(lineClamp),
        color: getTextColor({ color, theme, variant }),
        fontFamily: inherit ? 'inherit' : theme.fontFamily,
        fontSize: inherit ? 'inherit' : theme.fontSizes[size],
        lineHeight: inherit ? 'inherit' : inline ? 1 : theme.lineHeight,
        textDecoration: 'none',
        WebkitTapHighlightColor: 'transparent',

        '&:hover': {
          textDecoration: variant === 'link' ? 'underline' : 'none',
        },
      },

      gradient: {
        backgroundImage: colors.background,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    };
  }
);
