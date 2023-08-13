import { createStyles, MantineColor, rem, getSize } from '@mantine/styles';

export interface StarSymbolStylesParams {
  type: 'empty' | 'full';
  color: MantineColor;
}

const sizes = {
  xs: rem(14),
  sm: rem(18),
  md: rem(20),
  lg: rem(28),
  xl: rem(32),
};

export default createStyles((theme, { type, color }: StarSymbolStylesParams, { size }) => {
  const emptyColor = theme.colorScheme === 'light' ? theme.colors.gray[3] : theme.colors.gray[8];
  const fullColor = theme.fn.variant({
    variant: 'filled',
    color,
    primaryFallback: false,
  }).background;

  return {
    icon: {
      stroke: type === 'empty' ? emptyColor : fullColor,
      fill: type === 'empty' ? emptyColor : fullColor,
      width: getSize({ size, sizes }),
      height: getSize({ size, sizes }),
    },
  };
});
