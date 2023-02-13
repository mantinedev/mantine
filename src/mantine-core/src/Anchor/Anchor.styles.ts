import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    cursor: 'pointer',
    padding: 0,
    border: 0,
    ...theme.fn.hover({ textDecoration: 'underline' }),
  },
}));
