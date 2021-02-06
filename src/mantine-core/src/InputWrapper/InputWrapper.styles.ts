import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  inputWrapper: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: 'Roboto, sans-serif',
  },

  label: {
    display: 'block',
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 500,
    color: OpenColor.gray[6],
  },

  error: {
    marginTop: 4,
  },

  required: {
    color: OpenColor.red[7],
  },
});
