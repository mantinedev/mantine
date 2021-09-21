import {
  createStyles,
  MantineNumberSize,
  getSizeValue,
  getFocusStyles,
  MantineColor,
} from '@mantine/styles';

interface BurgerStyles {
  size: MantineNumberSize;
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

export default createStyles((theme, { size, color, reduceMotion }: BurgerStyles, getRef) => {
  const sizeValue = getSizeValue({ size, sizes });
  const opened = { ref: getRef('opened') } as const;

  return {
    opened,

    root: {
      ...getFocusStyles(theme),
      WebkitTapHighlightColor: 'transparent',
      borderRadius: theme.radius.sm,
      width: sizeValue + theme.spacing.xs,
      height: sizeValue + theme.spacing.xs,
      padding: theme.spacing.xs / 2,
      backgroundColor: 'transparent',
      border: 0,
      cursor: 'pointer',
    },

    burger: {
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

      [`&.${opened.ref}`]: {
        backgroundColor: 'transparent',

        '&:before': {
          transform: `translateY(${sizeValue / 3}px) rotate(45deg)`,
        },

        '&:after': {
          transform: `translateY(-${sizeValue / 3}px) rotate(-45deg)`,
        },
      },
    },
  };
});
