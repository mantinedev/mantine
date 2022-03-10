import { createStyles } from '@mantine/styles';

export interface ColorInputStylesParams {
  disallowInput: boolean;
}

export default createStyles((theme, { disallowInput }: ColorInputStylesParams) => ({
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
