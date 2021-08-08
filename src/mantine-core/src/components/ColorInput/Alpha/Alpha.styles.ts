import { createMemoStyles } from '../../../theme';

export default createMemoStyles({
  alpha: {
    position: 'relative',
    height: 14,
    boxSizing: 'border-box',
    marginLeft: 7,
    marginRight: 7,
  },

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
