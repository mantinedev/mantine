import { createUseStyles } from 'react-jss';

export default createUseStyles({
  month: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: 'Roboto, sans-serif',
    borderCollapse: 'collapse',

    '& td': { padding: 0 },

    '& th': {
      padding: 0,
      fontWeight: 'normal',
      paddingBottom: 5,
      textAlign: 'center',
      cursor: 'default',
      userSelect: 'none',
    },
  },
});
