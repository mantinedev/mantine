import { createMemoStyles, MantineTheme } from '../../../theme';

interface AlphaStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  alphaThumb: {},

  alpha: ({ theme }: AlphaStyles) => ({
    position: 'relative',
    height: 14,
    boxSizing: 'border-box',
    marginLeft: 7,
    marginRight: 7,
    outline: 0,

    '&:focus $alphaThumb': {
      outline: 'none',
      boxShadow: `0 0 0 1px ${
        theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
      }, 0 0 0 3px ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]}`,
    },

    '&:focus:not(:focus-visible) $alphaThumb': {
      boxShadow: 'none',
    },
  }),

  alphaOverlay: {
    position: 'absolute',
    top: 0,
    left: -7,
    right: -7,
    bottom: 0,
    borderRadius: 12,
  },

  alphaBackground: {
    backgroundImage:
      'linear-gradient(45deg, #eee 25%, transparent 25%), linear-gradient(-45deg, #eee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eee 75%), linear-gradient(-45deg, #fff 75%, #eee 75%)',
    backgroundSize: '8px 8px',
    backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
  },
});
