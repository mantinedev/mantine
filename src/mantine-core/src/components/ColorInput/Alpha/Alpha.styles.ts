import { createMemoStyles } from '../../../theme';

export default createMemoStyles({
  alpha: {
    position: 'relative',
    height: 12,
    borderRadius: 8,
    boxSizing: 'border-box',
  },

  alphaOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 12,
    borderRadius: 12,
  },

  alphaBackground: {
    backgroundImage:
      'linear-gradient(45deg, #eee 25%, transparent 25%), linear-gradient(-45deg, #eee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eee 75%), linear-gradient(-45deg, transparent 75%, #eee 75%)',
    backgroundSize: '8px 8px',
    backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
  },
});
