import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  inputWrapper: {
    position: 'relative',
  },

  input: {
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
    border: `1px solid ${OpenColor.gray[4]}`,
    transition: 'border-color 100ms ease, box-shadow 100ms ease',

    '&::placeholder': {
      color: OpenColor.gray[5],
    },

    '&:focus': {
      outline: 'none',
      borderColor: OpenColor.blue[6],
      boxShadow: `0 0 4px ${OpenColor.gray[3]}`,
    },
  },

  invalid: {
    borderColor: OpenColor.red[6],
  },

  withIcon: {
    paddingLeft: 35,
  },

  icon: {
    pointerEvents: 'none',
    position: 'absolute',
    color: OpenColor.gray[5],
    height: 36,
    width: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
