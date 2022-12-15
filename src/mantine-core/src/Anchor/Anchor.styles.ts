import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    cursor: 'pointer',
    padding: 0,
    border: 0,
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
    ...theme.fn.hover({ textDecoration: 'underline' }),
  },
}));
