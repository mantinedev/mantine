import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  text: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: 'Roboto, sans-serif',
  },

  bold: { fontWeight: 700 },
  semibold: { fontWeight: 500 },
  primary: { color: OpenColor.blue[6] },
  success: { color: OpenColor.teal[6] },
  warning: { color: OpenColor.yellow[8] },
  danger: { color: OpenColor.red[7] },
  muted: { color: OpenColor.gray[5] },
  xs: { fontSize: 12 },
  sm: { fontSize: 14 },
  md: { fontSize: 16 },
  lg: { fontSize: 18 },
  xl: { fontSize: 20 },
});
