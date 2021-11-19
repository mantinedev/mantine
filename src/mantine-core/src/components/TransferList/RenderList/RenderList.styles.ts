import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
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

  renderListBody: {
    flex: 1,
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
    width: 'calc(100% + 2px)',
    marginLeft: -1,
    marginRight: -1,
    marginTop: -1,
    borderTopRightRadius: theme.radius.sm,
    borderTopLeftRadius: theme.radius.sm,
  },
}));
