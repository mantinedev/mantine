import { createStyles, MantineNumberSize, MantineColor } from '@mantine/styles';

export interface MenuItemStylesParams {
  radius: MantineNumberSize;
  color: MantineColor;
}

export default createStyles((theme, { radius, color }: MenuItemStylesParams) => ({
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

  itemHovered: {
    backgroundColor: color
      ? theme.fn.variant({ variant: 'light', color }).background
      : theme.colorScheme === 'dark'
      ? theme.fn.rgba(theme.colors.dark[3], 0.35)
      : theme.colors.gray[0],
  },

  itemInner: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },

  itemBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },

  itemIcon: {
    marginRight: theme.spacing.xs,

    '& *': {
      display: 'block',
    },
  },

  itemLabel: {
    lineHeight: 1,
  },
}));
