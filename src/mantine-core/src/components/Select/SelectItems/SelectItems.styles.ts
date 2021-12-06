import { createStyles, MantineSize } from '@mantine/styles';

interface SelectItemsStyles {
  size: MantineSize;
}

export default createStyles((theme, { size }: SelectItemsStyles) => ({
  item: {
    boxSizing: 'border-box',
    textAlign: 'left',
    width: '100%',
    padding: `${theme.fn.size({ size, sizes: theme.spacing }) / 1.5}px ${theme.fn.size({
      size,
      sizes: theme.spacing,
    })}px`,
    cursor: 'pointer',
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    borderRadius: theme.radius.sm,
  },

  selected: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors[theme.primaryColor][0],
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors[theme.primaryColor][9],
  },

  hovered: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
  },

  nothingFound: {
    boxSizing: 'border-box',
    color: theme.colors.gray[6],
    paddingTop: theme.fn.size({ size, sizes: theme.spacing }) / 2,
    paddingBottom: theme.fn.size({ size, sizes: theme.spacing }) / 2,
    textAlign: 'center',
  },

  disabled: {
    cursor: 'default',
    color: theme.colors.dark[2],
  },

  separator: {
    boxSizing: 'border-box',
    textAlign: 'left',
    width: '100%',
    padding: `${theme.fn.size({ size, sizes: theme.spacing }) / 1.5}px ${theme.fn.size({
      size,
      sizes: theme.spacing,
    })}px`,
  },

  separatorLabel: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },
}));
