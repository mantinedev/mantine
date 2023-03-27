import { createStyles, MantineNumberSize, rem } from '@mantine/styles';

export interface ColorSwatchStylesParams {
  radius: MantineNumberSize;
}

export default createStyles((theme, { radius }: ColorSwatchStylesParams, { size }) => {
  const overlayColor = theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3];

  return {
    root: {
      ...theme.fn.focusStyles(),
      width: rem(size),
      height: rem(size),
      WebkitTapHighlightColor: 'transparent',
      border: 0,
      borderRadius: theme.fn.radius(radius),
      appearance: 'none',
      WebkitAppearance: 'none',
      padding: 0,
      position: 'relative',
      overflow: 'hidden',
    },

    overlay: {
      ...theme.fn.cover(),
      position: 'absolute',
      borderRadius: theme.fn.radius(radius),
    },

    children: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    shadowOverlay: {
      boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${rem(1)} inset, rgb(0, 0, 0, .15) 0 0 ${rem(4)} inset`,
      zIndex: 1,
    },

    alphaOverlay: {
      backgroundImage: `linear-gradient(45deg, ${overlayColor} 25%, transparent 25%), linear-gradient(-45deg, ${overlayColor} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${overlayColor} 75%), linear-gradient(-45deg, ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      } 75%, ${overlayColor} 75%)`,
      backgroundSize: `${rem(8)} ${rem(8)}`,
      backgroundPosition: `0 0, 0 ${rem(4)}, ${rem(4)} -${rem(4)}, -${rem(4)} 0`,
    },
  };
});
