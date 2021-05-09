import { createUseStyles } from 'react-jss';

export default createUseStyles({
  grid: {
    display: 'flex',
    flexWrap: 'wrap',

    '&, & [data-mantine-col]': {
      boxSizing: 'border-box',
    },
  },
});
