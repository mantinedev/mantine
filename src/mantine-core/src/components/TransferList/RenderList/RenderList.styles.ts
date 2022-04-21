import { createStyles, MantineNumberSize } from '@mantine/styles';

interface RenderListStyles {
  reversed: boolean;
  native: boolean;
  radius: MantineNumberSize;
}

const ITEM_PADDING = 7;

export default createStyles((theme, { reversed, native, radius }: RenderListStyles) => ({
  transferList: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  transferListItem: {
    display: 'block',
    width: `calc(100% - ${ITEM_PADDING * 2}px)`,
    padding: ITEM_PADDING,
    marginLeft: theme.spacing.sm - ITEM_PADDING,
    marginRight: theme.spacing.sm - ITEM_PADDING,
    borderRadius: theme.fn.radius(radius),

    '&:first-of-type': {
      marginTop: theme.spacing.sm - ITEM_PADDING,
    },

    '&:last-of-type': {
      marginBottom: theme.spacing.sm - ITEM_PADDING,
    },
  },

  transferListItemHovered: theme.fn.hover({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  }),

  transferListItems: {
    overflow: native ? 'auto' : 'hidden',
  },

  transferListHeader: {
    display: 'flex',
    flexDirection: reversed ? 'row-reverse' : 'row',
  },

  transferListBody: {
    flex: 1,
    borderRadius: theme.fn.radius(radius),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
    }`,
  },

  transferListTitle: {
    marginBottom: 5,
  },

  transferListSearch: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopLeftRadius: reversed ? 0 : `calc(${theme.fn.radius(radius)}px - 1px)`,
    borderTopRightRadius: reversed ? `calc(${theme.fn.radius(radius)}px - 1px)` : 0,
    display: 'block',
    borderBottomColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
  },

  transferListControl: {
    borderTop: 0,
    borderRightWidth: reversed ? undefined : 0,
    borderLeftWidth: reversed ? 0 : undefined,
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],

    '&:last-of-type': {
      borderTopLeftRadius: reversed ? `calc(${theme.fn.radius(radius)}px - 1px)` : 0,
      borderTopRightRadius: reversed ? 0 : `calc(${theme.fn.radius(radius)}px - 1px)`,
    },

    '&:disabled': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'transparent',
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
    },
  },

  separator: {
    boxSizing: 'border-box',
    textAlign: 'left',
    width: '100%',
    padding: '7px 12px',
  },

  separatorLabel: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },
}));
