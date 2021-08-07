import { createMemoStyles } from '../../../theme';

export default createMemoStyles({
  hue: {
    position: 'relative',
    height: 10,
    boxSizing: 'border-box',
    marginLeft: 4,
    marginRight: 4,
  },

  hueOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: -4,
    right: -4,
    borderRadius: 1,
    backgroundImage:
      'linear-gradient(to right,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(180,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))',
  },
});
