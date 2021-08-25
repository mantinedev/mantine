import { createMemoStyles, MantineTheme } from '../../../theme';

interface SelectDropdownStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  dropdown: ({ theme }: SelectDropdownStyles) => ({
    boxSizing: 'border-box',
    position: 'absolute',
    zIndex: 1,
    top: theme.spacing.xs / 2,
    left: 0,
    right: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    padding: 4,
    overflowY: 'auto',
  }),
});
