import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  avatar: {
    boxSizing: 'border-box',
    position: 'relative',
  },

  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },

  placeholder: {
    backgroundColor: OpenColor.gray[1],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  placeholderIcon: {
    width: '70%',
    height: '70%',
    color: OpenColor.gray[5],
  },
});
