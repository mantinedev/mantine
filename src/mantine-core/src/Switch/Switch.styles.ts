import { createStyles, MantineNumberSize, MantineSize, MantineColor } from '@mantine/styles';

export interface SwitchStylesParams {
  color: MantineColor;
  size: MantineSize;
  radius: MantineNumberSize;
}

const switchHeight = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 30,
  xl: 36,
};

const switchWidth = {
  xs: 32,
  sm: 38,
  md: 46,
  lg: 56,
  xl: 72,
};

const handleSizes = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 22,
  xl: 28,
};

const labelFontSizes = {
  xs: 5,
  sm: 6,
  md: 7,
  lg: 9,
  xl: 11,
};

const trackLabelPaddings = {
  xs: 4,
  sm: 5,
  md: 6,
  lg: 8,
  xl: 10,
};

export default createStyles((theme, { size, radius, color }: SwitchStylesParams) => {
  const handleSize = theme.fn.size({ size, sizes: handleSizes });
  const borderRadius = theme.fn.size({ size: radius, sizes: theme.radius });
  const colors = theme.fn.variant({ variant: 'filled', color });
  const trackWidth = theme.fn.size({ size, sizes: switchWidth });
  const trackPadding = size === 'xs' ? 1 : 2;

  return {
    root: {
      display: 'flex',
      alignItems: 'center',
    },

    body: {
      display: 'flex',
    },

    input: {
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: '1px',
      overflow: 'hidden',
      width: '1px',
      whiteSpace: 'nowrap',
      padding: '0',
      WebkitClipPath: 'inset(50%)',
      clipPath: 'inset(50%)',
    },

    track: {
      ...theme.fn.focusStyles('input:focus + &'),
      cursor: theme.cursorType,
      overflow: 'hidden',
      WebkitTapHighlightColor: 'transparent',
      position: 'relative',
      borderRadius,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
      height: theme.fn.size({ size, sizes: switchHeight }),
      minWidth: trackWidth,
      margin: 0,
      transitionProperty: 'background-color, border-color',
      transitionTimingFunction: theme.transitionTimingFunction,
      transitionDuration: '150ms',
      boxSizing: 'border-box',
      appearance: 'none',
      display: 'flex',
      alignItems: 'center',
      fontSize: theme.fn.size({ size, sizes: labelFontSizes }),
      fontWeight: 600,

      // for disabling text selection on double click
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      MsUserSelect: 'none',

      zIndex: 0,
      lineHeight: 0,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
      transition: `color 150ms ${theme.transitionTimingFunction}`,

      'input:checked + &': {
        backgroundColor: colors.background,
        borderColor: colors.background,
        color: theme.white,
        transition: `color 150ms ${theme.transitionTimingFunction}`,
      },

      'input:disabled + &': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        cursor: 'not-allowed',
      },
    },

    thumb: {
      position: 'absolute',
      zIndex: 1,
      borderRadius,
      boxSizing: 'border-box',
      display: 'flex',
      backgroundColor: theme.white,
      height: handleSize,
      width: handleSize,
      border: `1px solid ${theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[3]}`,
      left: `${trackPadding}px`,
      transition: `left 150ms ${theme.transitionTimingFunction}`,

      '& > *': {
        margin: 'auto',
      },

      '@media (prefers-reduced-motion)': {
        transitionDuration: theme.respectReducedMotion ? '0ms' : '',
      },

      'input:checked + * > &': {
        left: `calc(100% - ${handleSize}px - ${trackPadding}px)`,
        borderColor: theme.white,
      },

      'input:disabled + * > &': {
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[0],
      },
    },

    label: {
      ...theme.fn.fontStyles(),
      WebkitTapHighlightColor: 'transparent',
      fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
      fontFamily: theme.fontFamily,
      paddingLeft: theme.spacing.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      cursor: theme.cursorType,
      '&[data-disabled]': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      },
    },

    trackLabel: {
      height: '100%',
      display: 'grid',
      placeContent: 'center',

      minWidth: trackWidth - handleSize,
      paddingInline: theme.fn.size({ size, sizes: trackLabelPaddings }),
      margin: `0 0 0 ${handleSize + trackPadding}px`,
      transition: `margin 150ms ${theme.transitionTimingFunction}`,

      'input:checked + * > &': {
        margin: `0 ${handleSize + trackPadding}px 0 0`,
      },
    },
  };
});
