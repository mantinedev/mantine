import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  spoiler: {
    overflowY: 'hidden',
    position: 'relative',
  },

  shown: {
    overflowY: 'visible',

    '& $more': {
      bottom: -24,
      backgroundImage: 'none !important',
    },
  },

  more: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    height: 24,
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    userSelect: 'none',
    padding: 0,
    margin: 0,
    lineHeight: 1,
    border: 0,
    outline: 0,
    position: 'absolute',
    bottom: 0,
    color: OpenColor.blue[6],

    '&:hover, &:focus': {
      textDecoration: 'underline',
    },
  },
});
