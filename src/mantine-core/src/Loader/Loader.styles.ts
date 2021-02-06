import { createUseStyles } from 'react-jss';

export default createUseStyles({
  '@keyframes spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(3600deg)' },
  },

  loader: {
    borderRadius: '50%',
    borderStyle: 'solid',
    animation: '$spin 15s infinite linear',
  },
});
