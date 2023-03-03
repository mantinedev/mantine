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
    textDecoration: 'none',
    boxSizing: 'border-box',
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    cursor: 'pointer',
    borderRadius: theme.fn.radius(radius),
    color: color
      ? theme.fn.variant({ variant: 'filled', primaryFallback: false, color }).background
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[0]
      : theme.black,
    display: 'flex',
    alignItems: 'center',

    '&:disabled': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      pointerEvents: 'none',
      userSelect: 'none',
    },

    '&[data-hovered]': {
      backgroundColor: color
        ? theme.fn.variant({ variant: 'light', color }).background
        : theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors.dark[3], 0.35)
        : theme.colors.gray[1],
    },
  },

  itemLabel: {
    flex: 1,
  },

  itemIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.xs,
  },

  itemRightSection: {},
}));
