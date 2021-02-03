import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  tagEdit: {
    paddingTop: 10,
    paddingBottom: 10,
    position: 'absolute',
    top: 0,
    width: 240,
    left: 240,
    zIndex: 5,
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  input: {
    flex: 1,
    marginRight: 10,
  },

  deleteControl: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: 'Roboto, sans-serif',
    border: 0,
    width: '100%',
    backgroundColor: 'transparent',
    textAlign: 'left',
    height: 32,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    cursor: 'pointer',
    marginTop: 10,
    outline: 0,

    '&:hover, &:focus': {
      backgroundColor: OpenColor.red[0],
      color: OpenColor.red[7],
    },
  },

  deleteIcon: {
    marginRight: 10,
  },

  colorsList: {
    marginTop: 5,
    borderTop: `1px solid ${OpenColor.gray[2]}`,
    paddingTop: 10,
  },

  colorControl: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: 'Roboto, sans-serif',
    textTransform: 'capitalize',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 0,
    paddingLeft: 10,
    paddingRight: 10,
    height: 28,
    cursor: 'pointer',
    outline: 0,
    '&:hover, &:focus': {
      backgroundColor: OpenColor.gray[0],
    },
  },

  colorLabel: {
    marginLeft: 10,
  },

  colorControlBody: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
});
