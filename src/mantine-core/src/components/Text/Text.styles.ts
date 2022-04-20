import { createStyles, MantineTheme, MantineSize, MantineColor, CSSObject } from '@mantine/styles';

export interface TextStylesParams {
  color: MantineColor;
  variant: 'text' | 'link' | 'gradient';
  size: MantineSize;
  lineClamp: number;
  inline: boolean;
  inherit: boolean;
  underline: boolean;
  gradientFrom: string;
  gradientTo: string;
  gradientDeg: number;
  transform: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  align: 'left' | 'center' | 'right' | 'justify';
  weight: React.CSSProperties['fontWeight'];
}

interface GetTextColor {
  theme: MantineTheme;
  color: MantineColor;
  variant: TextStylesParams['variant'];
}

function getTextColor({ theme, color, variant }: GetTextColor) {
  if (color === 'dimmed') {
    return theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6];
  }

  return color in theme.colors
    ? theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7]
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
      gradientDeg,
      gradientTo,
      gradientFrom,
      weight,
      transform,
      align,
    }: TextStylesParams
  ) => {
    const colors = theme.fn.variant({
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
