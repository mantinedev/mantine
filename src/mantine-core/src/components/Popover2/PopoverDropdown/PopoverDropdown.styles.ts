import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  root: {
    position: 'absolute',
    backgroundColor: theme.white,
    background: 'red',
  },

  arrow: {
    backgroundColor: 'inherit',
    border: 0,
    zIndex: 1,
  },
}));
