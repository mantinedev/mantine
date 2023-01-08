import { createStyles, rem } from '@mantine/styles';

export default createStyles((theme) => ({
  divider: {
    margin: `calc(${theme.spacing.xs} / 2) - ${rem(5)}`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
}));
