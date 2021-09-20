import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  arrow: {
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },
}));
