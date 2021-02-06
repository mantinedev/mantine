import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  wrapper: {
    position: 'relative',
  },

  select: {
    appearance: 'none',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
    width: '100%',
    height: 36,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 4,
    border: `1px solid ${OpenColor.gray[5]}`,
    transition: 'border-color 100ms ease, box-shadow 100ms ease',
    cursor: 'pointer',

    '&::placeholder': {
      color: OpenColor.gray[5],
    },

    '&:focus': {
      outline: 'none',
      borderColor: OpenColor.blue[5],
      boxShadow: `0 0 4px ${OpenColor.gray[3]}`,
    },

    '&:disabled': {
      backgroundColor: OpenColor.gray[1],
      cursor: 'not-allowed',
    },
  },

  invalid: {
    borderColor: OpenColor.red[7],
  },

  placeholder: {
    color: OpenColor.gray[5],
  },

  icon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
});
