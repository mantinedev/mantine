import { createMemoStyles } from '../../../theme';

export default createMemoStyles({
  hue: {
    position: 'relative',
    height: 14,
    boxSizing: 'border-box',
    marginLeft: 7,
    marginRight: 7,
  },

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
