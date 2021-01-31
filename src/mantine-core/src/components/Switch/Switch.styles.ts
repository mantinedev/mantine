import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  switch: {
    backgroundColor: OpenColor.gray[2],
    border: `1px solid ${OpenColor.gray[3]}`,
    height: 18,
    width: 36,
    borderRadius: 36,
    padding: '0 2px',
    cursor: 'pointer',
    transition: 'background-color 150ms ease, border-color 100ms ease',
    outline: 0,
    boxSizing: 'border-box',

    '&::before': {
      content: "''",
      display: 'block',
      backgroundColor: OpenColor.white,
      height: 12,
      width: 12,
      borderRadius: 12,
      border: `1px solid ${OpenColor.gray[3]}`,
      transition: 'transform 150ms ease',
    },

    '&:focus': {
      boxShadow: `0 0 0 2px ${OpenColor.blue[2]}`,
    },

    '&:disabled::before': {
      backgroundColor: OpenColor.gray[2],
    },
  },

  checked: {
    backgroundColor: OpenColor.blue[6],
    borderColor: OpenColor.blue[5],

    '&::before': {
      transform: 'translateX(17px)',
      borderColor: OpenColor.blue[6],
    },
  },

  label: {
    fontFamily: 'Roboto, sans-serif',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    marginLeft: 10,
    fontSize: 14,
  },
});
