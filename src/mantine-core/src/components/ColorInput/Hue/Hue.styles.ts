import { createMemoStyles } from '../../../theme';

export default createMemoStyles({
  hue: {
    position: 'relative',
    height: 8,
    borderRadius: 8,
    boxSizing: 'border-box',
    backgroundImage:
      'linear-gradient(to right,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(180,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))',
  },
});
