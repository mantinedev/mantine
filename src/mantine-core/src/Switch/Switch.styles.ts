import { createStyles, MantineNumberSize, MantineSize, MantineColor } from '@mantine/styles';

type Keys = 'root' | 'body' | 'input' | 'track' | 'thumb' | 'label' | 'onLabel' | 'offLabel';
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
  xs: 30,
  sm: 38,
  md: 46,
  lg: 56,
  xl: 68,
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

export default createStyles<Keys, SwitchStylesParams>((theme, { size, radius, color }) => {
  const handleSize = theme.fn.size({ size, sizes: handleSizes });
  const borderRadius = theme.fn.size({ size: radius, sizes: theme.radius });
  const colors = theme.fn.variant({ variant: 'filled', color });

  return {
    root: {
      display: 'flex',
      alignItems: 'center',
    },

    body: {
      display: 'flex',

      '&:disabled': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        cursor: 'not-allowed',

        '&::before': {
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[0],
        },
      },
    },

    input: {
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      width: '1px',
      whiteSpace: 'nowrap',
      padding: '0',
      WebkitClipPath: 'inset(50%)',
      clipPath: 'inset(50%)',
    },

    track: {
      ...theme.fn.focusStyles('input:focus + &'),
      cursor: 'default',
      overflow: 'hidden',
      WebkitTapHighlightColor: 'transparent',
      position: 'relative',
      borderRadius,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
      height: theme.fn.size({ size, sizes: switchHeight }),
      width: theme.fn.size({ size, sizes: switchWidth }),
      minWidth: theme.fn.size({ size, sizes: switchWidth }),
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
      zIndex: 1,
      borderRadius,
      boxSizing: 'border-box',
      display: 'flex',
      backgroundColor: theme.white,
      height: handleSize,
      width: handleSize,
      border: `1px solid ${theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[3]}`,
      transition: `transform 150ms ${theme.transitionTimingFunction}`,
      transform: `translateX(${size === 'xs' ? 1 : 2}px)`,

      '& > *': {
        margin: 'auto',
      },

      '@media (prefers-reduced-motion)': {
        transitionDuration: theme.respectReducedMotion ? '0ms' : false,
      },

      'input:checked + * > &': {
        transform: `translateX(${
          theme.fn.size({ size, sizes: switchWidth }) -
          theme.fn.size({ size, sizes: handleSizes }) -
          (size === 'xs' ? 3 : 4)
        }px)`,
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
    },

    onLabel: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '50%',
      display: 'grid',
      placeContent: 'center',

      'input:not(:checked) + * > &': {
        display: 'none',
      },
    },

    offLabel: {
      position: 'absolute',
      right: 0,
      top: 0,
      height: '100%',
      width: '50%',
      display: 'grid',
      placeContent: 'center',

      'input:checked + * > &': {
        display: 'none',
      },
    },
  };
});
