import { createUseStyles } from 'react-jss';

export default createUseStyles({
  wrapper: {
    position: 'relative',
  },

  label: {
    position: 'absolute',
    top: '50%',
    left: '0',
    right: '0',
    textAlign: 'center',
    transform: 'translateY(-50%)',
  },
});
