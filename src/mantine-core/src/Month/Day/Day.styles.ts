import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  disableOutsideEvents: {},

  day: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    lineHeight: '30px',
    padding: 0,
    borderRadius: 4,
    border: '1px solid transparent',
    cursor: 'pointer',
    fontSize: 13,
    userSelect: 'none',

    '&:hover': {
      backgroundColor: OpenColor.gray[0],
    },
    '&:focus': {
      outline: '0',
      borderColor: OpenColor.blue[6],
    },
  },

  weekend: {
    color: OpenColor.red[7],
  },

  outside: {
    color: OpenColor.gray[4],

    '&$disableOutsideEvents': {
      pointerEvents: 'none',
    },
  },

  selected: {
    backgroundColor: OpenColor.blue[0],
    color: OpenColor.blue[6],
  },
});
