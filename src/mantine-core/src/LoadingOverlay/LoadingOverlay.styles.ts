import { createUseStyles } from 'react-jss';

export default createUseStyles({
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loader: {
    zIndex: 1000,
  },
});
