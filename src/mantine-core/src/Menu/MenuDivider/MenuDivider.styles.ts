import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  divider: {
    margin: `${theme.spacing.xs / 2}px -5px`,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
}));
