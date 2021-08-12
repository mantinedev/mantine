import { createMemoStyles, MantineTheme } from '../../theme';

interface ColorInputStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  arrow: ({ theme }: ColorInputStyles) => ({
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  }),

  dropdownBody: ({ theme }: ColorInputStyles) => ({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
  }),
});
