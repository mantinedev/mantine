import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  item: { position: 'relative' },

  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },

  control: {
    height: 32,
    flex: 1,
    textAlign: 'left',
    padding: 0,
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    cursor: 'pointer',
    paddingLeft: 10,

    '&:focus': {
      outline: 0,
      borderColor: OpenColor.blue[6],
    },
  },

  hovered: {
    backgroundColor: OpenColor.gray[0],
  },
});
