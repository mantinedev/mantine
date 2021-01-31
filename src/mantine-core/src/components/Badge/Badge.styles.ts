import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  badge: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: 'Roboto, sans-serif',
    display: 'inline-block',
    textTransform: 'uppercase',
    fontSize: 11,
    borderRadius: 100,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },

  'variant-badge': {
    lineHeight: '23px',
    height: 22,
    paddingLeft: 10,
    paddingRight: 10,
  },

  'variant-outline': {
    backgroundColor: OpenColor.white,
    lineHeight: '23px',
    height: 22,
    paddingLeft: 10,
    paddingRight: 10,
    border: '1px solid transparent',
  },

  'variant-pill': {
    color: OpenColor.white,
    paddingLeft: 8,
    paddingRight: 8,
    height: 19,
    lineHeight: '19px',
  },
});
