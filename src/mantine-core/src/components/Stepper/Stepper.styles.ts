import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  root: {
    alignItems: 'center',
  },

  separator: {
    flex: 1,
    height: 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2],
    marginLeft: theme.spacing.md,
    marginRight: theme.spacing.md,
  },
}));
