import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  withIcon: {},
  invalid: {},

  inputWrapper: {
    position: 'relative',
  },

  defaultVariant: {
    '& $input': {
      height: 36,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 4,
      border: `1px solid ${OpenColor.gray[4]}`,
      transition: 'border-color 100ms ease, box-shadow 100ms ease',

      '&:focus': {
        outline: 'none',
        borderColor: OpenColor.blue[6],
        boxShadow: `0 0 4px ${OpenColor.gray[3]}`,
      },
    },

    '& $invalid': {
      borderColor: OpenColor.red[6],
    },

    '& $withIcon': {
      paddingLeft: 35,
    },

    '& $icon': {
      height: 36,
      width: 36,
    },
  },

  unstyledVariant: {
    '& $input': {
      height: 28,
      border: 0,
      outline: 0,
    },

    '& $icon': {
      height: 28,
      width: 28,
    },

    '& $withIcon': {
      paddingLeft: 34,
    },
  },

  input: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
    width: '100%',

    '&::placeholder': {
      color: OpenColor.gray[5],
    },
  },

  icon: {
    pointerEvents: 'none',
    position: 'absolute',
    color: OpenColor.gray[5],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
