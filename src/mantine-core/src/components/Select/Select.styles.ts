import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  input: {
    '&:not(:disabled)': {
      cursor: 'pointer',
    },
  },

  withPlaceholder: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },
}));
