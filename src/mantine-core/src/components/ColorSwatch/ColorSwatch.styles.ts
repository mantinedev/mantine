import { createStyles, MantineNumberSize } from '@mantine/styles';

interface ColorSwatchStyles {
  radius: MantineNumberSize;
  size: number;
}

export default createStyles((theme, { size, radius }: ColorSwatchStyles) => {
  const overlayColor = theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3];

  return {
    root: {
      ...theme.fn.focusStyles(),
      width: size,
      height: size,
      WebkitTapHighlightColor: 'transparent',
      border: 0,
      borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
      appearance: 'none',
      WebkitAppearance: 'none',
      padding: 0,
      position: 'relative',
      overflow: 'hidden',
    },

    overlay: {
      position: 'absolute',
      borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    children: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    shadowOverlay: {
      boxShadow: 'rgba(0, 0, 0, .1) 0px 0px 0px 1px inset, rgb(0, 0, 0, .15) 0px 0px 4px inset',
      zIndex: 1,
    },

    alphaOverlay: {
      backgroundImage: `linear-gradient(45deg, ${overlayColor} 25%, transparent 25%), linear-gradient(-45deg, ${overlayColor} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${overlayColor} 75%), linear-gradient(-45deg, ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      } 75%, ${overlayColor} 75%)`,
      backgroundSize: '8px 8px',
      backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
    },
  };
});
