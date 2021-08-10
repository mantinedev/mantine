import { createMemoStyles, MantineTheme } from '../../../theme';

interface HueStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  hueThumb: {},

  hue: ({ theme }: HueStyles) => ({
    position: 'relative',
    height: 14,
    boxSizing: 'border-box',
    marginLeft: 7,
    marginRight: 7,
    outline: 0,

    '&:focus $hueThumb': {
      outline: 'none',
      boxShadow: `0 0 0 1px ${
        theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
      }, 0 0 0 3px ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]}`,
    },

    '&:focus:not(:focus-visible) $hueThumb': {
      boxShadow: 'none',
    },
  }),

  hueOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: -7,
    right: -7,
    borderRadius: 10,
    backgroundImage:
      'linear-gradient(to right,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(170,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))',
  },
});
