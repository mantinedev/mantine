import { createStyles } from '@mantine/styles';

interface RenderListStyles {
  reversed: boolean;
}

export default createStyles((theme, { reversed }: RenderListStyles) => ({
  renderList: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  renderListItem: {
    display: 'block',
    width: 'calc(100% - 14px)',
    padding: 7,
    marginLeft: theme.spacing.sm - 7,
    marginRight: theme.spacing.sm - 7,
    borderRadius: theme.radius.sm,
  },

  renderListItemHovered: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  renderListItems: {
    paddingTop: theme.spacing.xs / 2,
    paddingBottom: theme.spacing.xs / 2,
  },

  renderListHeader: {
    display: 'flex',
    flexDirection: reversed ? 'row-reverse' : 'row',
  },

  renderListBody: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
    }`,
  },

  renderListTitle: {
    marginBottom: 5,
  },

  renderListSearch: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    display: 'block',
  },

  renderListControl: {
    borderTop: 0,
    borderRightWidth: reversed ? undefined : 0,
    borderLeftWidth: reversed ? 0 : undefined,

    '&:disabled': {
      backgroundColor: 'transparent',
      borderColor: theme.colors.gray[4],
    },
  },
}));
