import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  tagPicker: {
    position: 'relative',
  },

  dropdown: {
    width: 280,
    position: 'absolute',
    top: 0,
    left: 0,
  },

  control: {
    border: '1px solid transparent',
    padding: [0, 0],
    borderRadius: 24,
    cursor: 'pointer',

    '&:focus': {
      outline: 0,
      borderColor: OpenColor.blue[6],
    },
  },
});
