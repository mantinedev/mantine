import { createStyles, MantineNumberSize, MantineColor } from '@mantine/styles';

export interface BurgerStylesParams {
  size: MantineNumberSize;
  color: MantineColor;
}

export const sizes = {
  xs: 12,
  sm: 18,
  md: 24,
  lg: 34,
  xl: 42,
};

export default createStyles((theme, { size, color }: BurgerStylesParams, getRef) => {
  const sizeValue = theme.fn.size({ size, sizes });

  return {
    opened: {
      ref: getRef('opened'),
    },

    root: {
      borderRadius: theme.radius.sm,
      width: sizeValue + theme.spacing.xs,
      height: sizeValue + theme.spacing.xs,
      padding: theme.spacing.xs / 2,
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
        transitionDuration: '300ms',

        '@media (prefers-reduced-motion)': {
          transitionDuration: '0ms',
        },
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

      [`&.${getRef('opened')}`]: {
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
