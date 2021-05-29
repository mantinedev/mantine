import { createUseStyles } from 'react-jss';

export default createUseStyles({
  wrapper: {
    position: 'relative',
  },

  label: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});
