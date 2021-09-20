import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  arrow: {
    borderColor: `${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    } !important`,
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },

  dropdownBody: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
  },
}));
