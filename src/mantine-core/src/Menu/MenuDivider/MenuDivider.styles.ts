import { createStyles, rem } from '@mantine/styles';

export default createStyles((theme) => ({
  divider: {
    marginTop: rem(4),
    marginBottom: rem(4),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
}));
