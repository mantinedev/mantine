import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  tagsList: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  description: {
    marginTop: 10,
    marginBottom: 7,
    padding: [0, 10],
  },

  searchInput: {
    marginLeft: 10,
    marginRight: 10,
  },

  createControl: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    textAlign: 'left',
    height: 32,
    color: OpenColor.gray[7],
    cursor: 'pointer',
  },

  createControlLabel: {
    marginRight: 10,
  },

  createControlHovered: {
    backgroundColor: OpenColor.gray[0],
  },
});
