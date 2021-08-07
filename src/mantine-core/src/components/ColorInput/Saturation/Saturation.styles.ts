import { createMemoStyles } from '../../../theme';

export default createMemoStyles({
  saturation: {
    position: 'relative',
    height: 120,
    borderRadius: 1,
    margin: 7,
  },

  saturationOverlay: {
    position: 'absolute',
    borderRadius: 1,
    top: -7,
    left: -7,
    right: -7,
    bottom: -7,
  },
});
