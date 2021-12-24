import {
  createStyles,
  MantineTheme,
  MantineSize,
  getSharedColorScheme,
  MantineColor,
  CSSObject,
} from '@mantine/styles';

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
  transform: 'capitalize' | 'uppercase' | 'lowercase';
  align: 'left' | 'center' | 'right' | 'justify';
  weight: React.CSSProperties['fontWeight'];
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

function getLineClamp(lineClamp: number): CSSObject {
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
      weight,
      transform,
      align,
    }: TextStyles
  ) => {
    const colors = getSharedColorScheme({
      theme,
      variant: 'gradient',
      gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg },
    });

    return {
      root: {
        ...theme.fn.fontStyles(),
        ...theme.fn.focusStyles(),
        ...getLineClamp(lineClamp),
        color: getTextColor({ color, theme, variant }),
        fontFamily: inherit ? 'inherit' : theme.fontFamily,
        fontSize: inherit ? 'inherit' : theme.fontSizes[size],
        lineHeight: inherit ? 'inherit' : inline ? 1 : theme.lineHeight,
        textDecoration: 'none',
        WebkitTapHighlightColor: 'transparent',
        fontWeight: inherit ? 'inherit' : weight,
        textTransform: transform,
        textAlign: align,

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
