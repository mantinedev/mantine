import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  label: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: 'Roboto, sans-serif',
    marginLeft: 10,
    fontSize: 14,
  },

  checkbox: {
    appearance: 'none',
    backgroundColor: OpenColor.gray[0],
    border: `1px solid ${OpenColor.gray[4]}`,
    width: 18,
    height: 18,
    borderRadius: 4,
    padding: 0,
    outline: 0,
    cursor: 'pointer',

    '&:focus': {
      boxShadow: `0 0 0 2px ${OpenColor.blue[2]}`,
    },

    '&:disabled': {
      backgroundColor: OpenColor.gray[2],
      cursor: 'not-allowed',
    },
  },

  checked: {
    backgroundColor: OpenColor.blue[5],
    color: OpenColor.white,
    borderColor: OpenColor.blue[5],
  },
});
