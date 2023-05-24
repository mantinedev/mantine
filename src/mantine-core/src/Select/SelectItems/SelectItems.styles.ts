import { createStyles, getSize } from '@mantine/styles';

export default createStyles((theme, _params, { size }) => ({
  item: {
    ...theme.fn.fontStyles(),
    boxSizing: 'border-box',
    wordBreak: 'break-all',
    textAlign: 'left',
    width: '100%',
    padding: `calc(${getSize({ size, sizes: theme.spacing })} / 1.5) ${getSize({
      size,
      sizes: theme.spacing,
    })}`,
    cursor: 'pointer',
    fontSize: getSize({ size, sizes: theme.fontSizes }),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    borderRadius: theme.fn.radius(),

    '&[data-hovered]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
    },

    '&[data-selected]': {
      backgroundColor: theme.fn.variant({ variant: 'filled' }).background,
      color: theme.fn.variant({ variant: 'filled' }).color,
      ...theme.fn.hover({ backgroundColor: theme.fn.variant({ variant: 'filled' }).hover }),
    },

    '&[data-disabled]': {
      cursor: 'default',
      color: theme.colors.dark[2],
    },
  },

  nothingFound: {
    boxSizing: 'border-box',
    color: theme.colors.gray[6],
    paddingTop: `calc(${getSize({ size, sizes: theme.spacing })} / 2)`,
    paddingBottom: `calc(${getSize({ size, sizes: theme.spacing })} / 2)`,
    textAlign: 'center',
  },

  separator: {
    boxSizing: 'border-box',
    textAlign: 'left',
    width: '100%',
    padding: `calc(${getSize({ size, sizes: theme.spacing })} / 1.5) ${getSize({
      size,
      sizes: theme.spacing,
    })}`,
  },

  separatorLabel: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },
}));
