import { createStyles, MantineColor, rem, getSize } from '@mantine/styles';

export interface BurgerStylesParams {
  color: MantineColor;
  transitionDuration: number;
}

const sizes = {
  xs: rem(12),
  sm: rem(18),
  md: rem(24),
  lg: rem(34),
  xl: rem(42),
};

export default createStyles(
  (theme, { color, transitionDuration }: BurgerStylesParams, { size }) => {
    const sizeValue = getSize({ size, sizes });
    const _color = color || (theme.colorScheme === 'dark' ? theme.white : theme.black);

    return {
      root: {
        borderRadius: theme.radius.sm,
        width: `calc(${sizeValue} + ${theme.spacing.xs})`,
        height: `calc(${sizeValue} + ${theme.spacing.xs})`,
        padding: `calc(${theme.spacing.xs} / 2)`,
        cursor: 'pointer',
      },

      burger: {
        position: 'relative',
        userSelect: 'none',
        boxSizing: 'border-box',

        '&, &::before, &::after': {
          display: 'block',
          width: sizeValue,
          height: `calc(${sizeValue} / 12)`,
          backgroundColor: _color,
          outline: `${rem(1)} solid transparent`,
          transitionProperty: 'background-color, transform',
          transitionDuration: `${transitionDuration}ms`,

          '@media (prefers-reduced-motion)': {
            transitionDuration: theme.respectReducedMotion ? '0ms' : undefined,
          },
        },

        '&::before, &::after': {
          position: 'absolute',
          content: '""',
          left: 0,
        },

        '&::before': {
          top: `calc((${sizeValue} / 3) * -1)`,
        },

        '&::after': {
          top: `calc(${sizeValue} / 3)`,
        },

        '&[data-opened]': {
          backgroundColor: 'transparent',

          '&::before': {
            transform: `translateY(calc(${sizeValue} / 3)) rotate(45deg)`,
          },

          '&::after': {
            transform: `translateY(calc(-${sizeValue} / 3)) rotate(-45deg)`,
          },
        },
      },
    };
  }
);
