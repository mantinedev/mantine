import {
  createStyles,
  MantineTheme,
  CSSObject,
  MantineColor,
  MantineGradient,
  getSize,
} from '@mantine/styles';

export interface TextStylesParams {
  color: 'dimmed' | MantineColor;
  lineClamp: number;
  truncate: 'end' | 'start' | boolean;
  inline: boolean;
  inherit: boolean;
  underline: boolean;
  strikethrough: boolean;
  italic: boolean;
  gradient: MantineGradient;
  transform: React.CSSProperties['textTransform'];
  align: React.CSSProperties['textAlign'];
  weight: React.CSSProperties['fontWeight'];
}

interface GetTextColor {
  theme: MantineTheme;
  color: 'dimmed' | MantineColor;
}
interface GetTruncate {
  truncate: 'end' | 'start' | boolean;
  theme: MantineTheme;
}

function getTextDecoration({
  underline,
  strikethrough,
}: {
  underline: boolean;
  strikethrough: boolean;
}) {
  const styles = [];
  if (underline) {
    styles.push('underline');
  }

  if (strikethrough) {
    styles.push('line-through');
  }

  return styles.length > 0 ? styles.join(' ') : 'none';
}

function getTextColor({ theme, color }: GetTextColor) {
  if (color === 'dimmed') {
    return theme.fn.dimmed();
  }

  return typeof color === 'string' && (color in theme.colors || color.split('.')[0] in theme.colors)
    ? theme.fn.variant({ variant: 'filled', color }).background
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

function getTruncate({ theme, truncate }: GetTruncate): CSSObject {
  if (truncate === 'start') {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      direction: theme.dir === 'ltr' ? 'rtl' : 'ltr',
      textAlign: theme.dir === 'ltr' ? 'right' : 'left',
    };
  }
  if (truncate) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    };
  }

  return null;
}

export default createStyles(
  (
    theme,
    {
      color,
      lineClamp,
      truncate,
      inline,
      inherit,
      underline,
      gradient,
      weight,
      transform,
      align,
      strikethrough,
      italic,
    }: TextStylesParams,
    { size }
  ) => {
    const colors = theme.fn.variant({ variant: 'gradient', gradient });

    return {
      root: {
        ...theme.fn.fontStyles(),
        ...theme.fn.focusStyles(),
        ...getLineClamp(lineClamp),
        ...getTruncate({ theme, truncate }),
        color: getTextColor({ color, theme }),
        fontFamily: inherit ? 'inherit' : theme.fontFamily,
        fontSize:
          inherit || size === undefined ? 'inherit' : getSize({ size, sizes: theme.fontSizes }),
        lineHeight: inherit ? 'inherit' : inline ? 1 : theme.lineHeight,
        textDecoration: getTextDecoration({ underline, strikethrough }),
        WebkitTapHighlightColor: 'transparent',
        fontWeight: inherit ? 'inherit' : weight,
        textTransform: transform,
        textAlign: align,
        fontStyle: italic ? 'italic' : undefined,
      },

      gradient: {
        backgroundImage: colors.background,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    };
  }
);
