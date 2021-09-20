import { createMemoStyles, MantineTheme, MantineSize, getSizeValue } from '../../../theme';

interface SelectItemsStyles {
  theme: MantineTheme;
  size: MantineSize;
}

export default createMemoStyles({
  item: ({ theme, size }: SelectItemsStyles) => ({
    boxSizing: 'border-box',
    textAlign: 'left',
    width: '100%',
    padding: [
      getSizeValue({ size, sizes: theme.spacing }) / 1.5,
      getSizeValue({ size, sizes: theme.spacing }),
    ],
    cursor: 'pointer',
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    borderRadius: theme.radius.sm,
  }),

  selected: ({ theme }: SelectItemsStyles) => ({
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors[theme.primaryColor][0],
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors[theme.primaryColor][9],
  }),

  hovered: ({ theme }: SelectItemsStyles) => ({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
  }),

  nothingFound: ({ theme, size }: SelectItemsStyles) => ({
    boxSizing: 'border-box',
    color: theme.colors.gray[6],
    paddingTop: getSizeValue({ size, sizes: theme.spacing }) / 2,
    paddingBottom: getSizeValue({ size, sizes: theme.spacing }) / 2,
    textAlign: 'center',
  }),

  disabled: ({ theme }: SelectItemsStyles) => ({
    color: theme.colors.dark[2],
  }),
});
