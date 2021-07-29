import { createMemoStyles, getSizeValue, MantineTheme, MantineSize } from '../../../theme';

interface SelectDropdownStyles {
  theme: MantineTheme;
  size: MantineSize;
}

export default createMemoStyles({
  dropdown: ({ theme, size }: SelectDropdownStyles) => ({
    position: 'absolute',
    zIndex: 1,
    top: theme.spacing.xs / 2,
    left: 0,
    right: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    paddingTop: getSizeValue({ size, sizes: theme.spacing }) / 2,
    paddingBottom: getSizeValue({ size, sizes: theme.spacing }) / 2,
    overflowY: 'auto',
  }),
});
