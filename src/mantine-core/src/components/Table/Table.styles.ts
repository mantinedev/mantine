import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  table: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: 'Roboto, sans-serif',
    width: '100%',
    borderCollapse: 'collapse',

    '& > thead > tr > th': {
      textAlign: 'left',
      fontWeight: 'bold',
      color: OpenColor.gray[7],
      fontSize: 14,
      padding: [7, 10],
      borderBottom: `1px solid ${OpenColor.gray[3]}`,
    },

    '& > tbody > tr > td': {
      padding: [7, 10],
      borderBottom: `1px solid ${OpenColor.gray[3]}`,
      fontSize: 14,
    },

    '& > tbody > tr:last-of-type > td': {
      borderBottom: 'none',
    },
  },

  striped: {
    '& > tbody > tr:nth-of-type(odd)': {
      backgroundColor: OpenColor.gray[0],
    },
  },

  hover: {
    '& > tbody > tr:hover': {
      backgroundColor: OpenColor.gray[1],
    },
  },
});
