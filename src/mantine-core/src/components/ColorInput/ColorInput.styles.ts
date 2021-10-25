import { createStyles } from '@mantine/styles';

interface ColorInputStyles {
  disallowInput: boolean;
}

export default createStyles((theme, { disallowInput }: ColorInputStyles) => ({
  arrow: {
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },

  dropdownBody: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
  },

  input: {
    cursor: disallowInput ? 'pointer' : undefined,
  },
}));
