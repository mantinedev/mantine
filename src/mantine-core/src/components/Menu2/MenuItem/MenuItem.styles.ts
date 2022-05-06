import { createStyles, MantineColor, MantineNumberSize } from '@mantine/styles';

interface MenuItemStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
}

export default createStyles((theme, { color, radius }: MenuItemStylesParams) => ({
  item: {
    ...theme.fn.fontStyles(),
    WebkitTapHighlightColor: 'transparent',
    fontSize: theme.fontSizes.sm,
    border: 0,
    backgroundColor: 'transparent',
    outline: 0,
    width: '100%',
    textAlign: 'left',
    display: 'inline-block',
    textDecoration: 'none',
    boxSizing: 'border-box',
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    cursor: 'pointer',
    borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
    color: color
      ? theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 5 : 7)
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[0]
      : theme.black,

    '&:disabled': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      pointerEvents: 'none',
    },
  },
}));
