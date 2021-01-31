import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  actionIcon: {
    border: '1px solid transparent',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    height: 27,
    width: 27,
    borderRadius: 4,
    padding: 0,
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'color 100ms ease',
    color: OpenColor.gray[6],
    outline: 0,
  },

  muted: {
    '&:hover': { color: OpenColor.gray[7] },
    '&:focus': { color: OpenColor.gray[7], borderColor: OpenColor.blue[2] },
  },

  danger: {
    '&:hover': { backgroundColor: OpenColor.red[0], color: OpenColor.red[7] },
    '&:focus': { color: OpenColor.red[7], borderColor: OpenColor.red[2] },
  },

  warning: {
    '&:hover': { backgroundColor: OpenColor.yellow[0], color: OpenColor.yellow[7] },
    '&:focus': { color: OpenColor.yellow[7], borderColor: OpenColor.yellow[4] },
  },

  success: {
    '&:hover': { backgroundColor: OpenColor.teal[0], color: OpenColor.teal[7] },
    '&:focus': { color: OpenColor.teal[7], borderColor: OpenColor.teal[2] },
  },

  primary: {
    '&:hover': { backgroundColor: OpenColor.blue[0], color: OpenColor.blue[7] },
    '&:focus': { color: OpenColor.blue[7], borderColor: OpenColor.blue[2] },
  },
});
