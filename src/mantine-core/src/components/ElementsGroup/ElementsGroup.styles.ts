import { createUseStyles } from 'react-jss';

export default createUseStyles({
  elementsGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: -5,

    '& [data-composable]': {
      margin: 5,
    },
  },

  noWrap: {
    flexWrap: 'nowrap',
  },

  left: {
    justifyContent: 'flex-start',
  },

  center: {
    justifyContent: 'center',
  },

  right: {
    justifyContent: 'flex-end',
  },
});
