import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  card: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },
}));
