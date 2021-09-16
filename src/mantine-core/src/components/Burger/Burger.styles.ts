import {
  createMemoStyles,
  MantineTheme,
  MantineNumberSize,
  getSizeValue,
  getFocusStyles,
  MantineColor,
} from '../../theme';

interface BurgerStyles {
  size: MantineNumberSize;
  theme: MantineTheme;
  color: MantineColor;
  reduceMotion: boolean;
}

export const sizes = {
  xs: 12,
  sm: 18,
  md: 24,
  lg: 34,
  xl: 42,
};

export default createMemoStyles({
  opened: {},

  root: ({ size, theme }: BurgerStyles) => ({
    ...getFocusStyles(theme),
    WebkitTapHighlightColor: 'transparent',
    borderRadius: theme.radius.sm,
    width: getSizeValue({ size, sizes }) + theme.spacing.xs,
    height: getSizeValue({ size, sizes }) + theme.spacing.xs,
    padding: theme.spacing.xs / 2,
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
  }),

  burger: ({ size, color, reduceMotion }: BurgerStyles) => {
    const sizeValue = getSizeValue({ size, sizes });

    return {
      position: 'relative',
      userSelect: 'none',
      boxSizing: 'border-box',

      '&, &:before, &:after': {
        display: 'block',
        width: sizeValue,
        height: Math.ceil(sizeValue / 12),
        backgroundColor: color,
        outline: '1px solid transparent',
        transitionProperty: 'background-color, transform',
        transitionDuration: reduceMotion ? '0ms' : '300ms',
      },

      '&:before, &:after': {
        position: 'absolute',
        content: '""',
        left: 0,
      },

      '&:before': {
        top: (sizeValue / 3) * -1,
      },

      '&:after': {
        top: sizeValue / 3,
      },

      '&$opened': {
        backgroundColor: 'transparent !important',
        '&:before': {
          transform: `translateY(${sizeValue / 3}px) rotate(45deg)`,
        },

        '&:after': {
          transform: `translateY(-${sizeValue / 3}px) rotate(-45deg)`,
        },
      },
    };
  },
});
