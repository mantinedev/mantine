import { createStyles, MantineSize } from '@mantine/core';

interface CascaderMenuStylesProps {
  size: MantineSize;
}

export const useStyles = createStyles((theme, { size }: CascaderMenuStylesProps) => ({
  item: {
    boxSizing: 'border-box',
    textAlign: 'left',
    padding: `${theme.fn.size({ size, sizes: theme.spacing }) / 1.5}px ${theme.fn.size({
      size,
      sizes: theme.spacing,
    })}px`,
    cursor: 'pointer',
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    borderRadius: theme.radius.sm,
    inlineSize: 'max-content',
  },

  selected: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors[theme.primaryColor][0],
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors[theme.primaryColor][9],
  },

  hovered: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
  },

  disabled: {
    cursor: 'default',
    color: theme.colors.dark[2],
  },
}));
