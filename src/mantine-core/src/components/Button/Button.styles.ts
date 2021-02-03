import OpenColor from 'open-color';
import { OpenColorTheme, Size } from '@mantine/types';
import { createUseStyles } from 'react-jss';

interface ButtonThemeProps {
  color?: OpenColorTheme;
  size: Size;
}

const sizes = {
  xs: {
    fontSize: 10,
    height: 24,
    padding: [0, 10],
  },

  sm: {
    fontSize: 11,
    height: 26,
    padding: [0, 12],
  },

  md: {
    fontSize: 13,
    height: 28,
    padding: [0, 14],
  },

  lg: {
    fontSize: 14,
    height: 32,
    padding: [0, 16],
  },

  xl: {
    fontSize: 16,
    height: 36,
    padding: [0, 18],
  },
};

export default createUseStyles({
  button: (props: ButtonThemeProps) => {
    const colorStyles = Array.isArray(OpenColor[props.color])
      ? {
          backgroundColor: OpenColor[props.color][5],
          textShadow: `1px 1px 0 ${OpenColor[props.color][7]}`,
          color: OpenColor.white,

          '&:focus': {
            boxShadow: `0 0 1px 3px ${OpenColor[props.color][2]}`,
          },
        }
      : {
          backgroundColor: OpenColor.white,
          color: OpenColor.gray[7],
          borderColor: OpenColor.gray[4],

          '&:focus': {
            borderColor: OpenColor.blue[6],
            boxShadow: `0 0 4px ${OpenColor.gray[3]}`,
          },
        };

    return {
      ...colorStyles,
      ...sizes[props.size],

      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: 'Roboto, sans-serif',
      boxSizing: 'border-box',
      border: '1px solid transparent',
      outline: 0,
      borderRadius: 4,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: 0.5,
      cursor: 'pointer',
      userSelect: 'none',
      appearance: 'none',

      '&:active': {
        transform: 'translateY(1px)',
      },

      '&:disabled': {
        backgroundColor: OpenColor.gray[4],
        color: OpenColor.gray[6],
        textShadow: 'none',
        pointerEvents: 'none',
      },
    };
  },
});
