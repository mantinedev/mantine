import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  divider: {
    margin: `calc(${theme.spacing.xs}px / 2) -5px`,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
}));
