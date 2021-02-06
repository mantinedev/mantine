import { createUseStyles } from 'react-jss';

export default createUseStyles({
  loadingOverlay: {
    pointerEvents: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
