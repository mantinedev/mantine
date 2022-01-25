import { createStyles } from '@mantine/styles';

interface RenderListStyles {
  reversed: boolean;
  native: boolean;
}

const ITEM_PADDING = 7;

export default createStyles((theme, { reversed, native }: RenderListStyles) => ({
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
    borderRadius: theme.radius.sm,

    '&:first-of-type': {
      marginTop: theme.spacing.sm - ITEM_PADDING,
    },

    '&:last-of-type': {
      marginBottom: theme.spacing.sm - ITEM_PADDING,
    },
  },

  transferListItemHovered: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  transferListItems: {
    overflow: native ? 'auto' : 'hidden',
  },

  transferListHeader: {
    display: 'flex',
    flexDirection: reversed ? 'row-reverse' : 'row',
  },

  transferListBody: {
    flex: 1,
    borderRadius: theme.radius.sm,
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
    borderTopLeftRadius: reversed ? 0 : theme.radius.sm - 1,
    borderTopRightRadius: reversed ? theme.radius.sm - 1 : 0,
    display: 'block',
    borderBottomColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
  },

  transferListControl: {
    borderTop: 0,
    borderRightWidth: reversed ? undefined : 0,
    borderLeftWidth: reversed ? 0 : undefined,
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],

    '&:last-of-type': {
      borderTopLeftRadius: reversed ? theme.radius.sm - 1 : 0,
      borderTopRightRadius: reversed ? 0 : theme.radius.sm - 1,
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
