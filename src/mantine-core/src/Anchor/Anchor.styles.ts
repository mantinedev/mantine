import { createUseStyles } from 'react-jss';

export default createUseStyles({
  anchor: {
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
});
