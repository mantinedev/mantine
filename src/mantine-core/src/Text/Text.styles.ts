import {
  createStyles,
  MantineTheme,
  CSSObject,
  MantineColor,
  MantineGradient,
  MantineNumberSize,
} from '@mantine/styles';

export interface TextStylesParams {
  color: 'dimmed' | MantineColor;
  variant: 'text' | 'link' | 'gradient';
  size: MantineNumberSize;
  lineClamp: number;
  inline: boolean;
  inherit: boolean;
  underline: boolean;
  gradient: MantineGradient;
  transform: React.CSSProperties['textTransform'];
  align: React.CSSProperties['textAlign'];
  weight: React.CSSProperties['fontWeight'];
}

interface GetTextColor {
  theme: MantineTheme;
  color: 'dimmed' | MantineColor;
  variant: TextStylesParams['variant'];
}

function getTextColor({ theme, color, variant }: GetTextColor) {
  if (color === 'dimmed') {
    return theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6];
  }

  return color in theme.colors
    ? theme.fn.variant({ variant: 'filled', color }).background
    : variant === 'link'
    ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7]
    : color || 'inherit';
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
      underline,
      gradient,
      weight,
      transform,
      align,
    }: TextStylesParams
  ) => {
    const colors = theme.fn.variant({ variant: 'gradient', gradient });

    return {
      root: {
        ...theme.fn.fontStyles(),
        ...theme.fn.focusStyles(),
        ...getLineClamp(lineClamp),
        color: getTextColor({ color, theme, variant }),
        fontFamily: inherit ? 'inherit' : theme.fontFamily,
        fontSize:
          inherit || size === undefined
            ? 'inherit'
            : theme.fn.size({ size, sizes: theme.fontSizes }),
        lineHeight: inherit ? 'inherit' : inline ? 1 : theme.lineHeight,
        textDecoration: underline ? 'underline' : 'none',
        WebkitTapHighlightColor: 'transparent',
        fontWeight: inherit ? 'inherit' : weight,
        textTransform: transform,
        textAlign: align,

        ...theme.fn.hover(
          variant === 'link' && underline === undefined
            ? {
                textDecoration: 'underline',
              }
            : undefined
        ),
      },

      gradient: {
        backgroundImage: colors.background,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    };
  }
);
