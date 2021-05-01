import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    loadingOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  { link: true }
);
