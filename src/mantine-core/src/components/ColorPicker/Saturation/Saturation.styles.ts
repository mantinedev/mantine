import { createMemoStyles, MantineTheme } from '../../../theme';

interface SaturationStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  saturationThumb: {},

  saturation: ({ theme }: SaturationStyles) => ({
    position: 'relative',
    height: 120,
    borderRadius: theme.radius.sm,
    margin: 7,
    WebkitTapHighlightColor: 'transparent',

    '&:focus $saturationThumb': {
      outline: 'none',
      boxShadow: `0 0 0 1px ${
        theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
      }, 0 0 0 3px ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]}`,
    },

    '&:focus:not(:focus-visible) $saturationThumb': {
      boxShadow: 'none',
    },
  }),

  saturationOverlay: ({ theme }: SaturationStyles) => ({
    position: 'absolute',
    borderRadius: theme.radius.sm,
    top: -7,
    left: -7,
    right: -7,
    bottom: -7,
  }),
});
