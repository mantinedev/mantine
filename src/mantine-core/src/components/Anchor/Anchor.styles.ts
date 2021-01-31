import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  anchor: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: 'Roboto, sans-serif',
    color: OpenColor.blue[6],
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
});
