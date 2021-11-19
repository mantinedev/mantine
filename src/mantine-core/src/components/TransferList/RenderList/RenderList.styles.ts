import { createStyles } from '@mantine/styles';

interface RenderListStyles {
  reversed: boolean;
  height: number;
}

export default createStyles((theme, { reversed, height }: RenderListStyles) => ({
  transferList: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  transferListItem: {
    display: 'block',
    width: 'calc(100% - 14px)',
    padding: 7,
    marginLeft: theme.spacing.sm - 7,
    marginRight: theme.spacing.sm - 7,
    borderRadius: theme.radius.sm,
  },

  transferListItemHovered: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  transferListItems: {
    paddingTop: theme.spacing.xs / 2,
    paddingBottom: theme.spacing.xs / 2,
    overflow: 'auto',
    height,
    maxHeight: height,
  },

  transferListHeader: {
    display: 'flex',
    flexDirection: reversed ? 'row-reverse' : 'row',
  },

  transferListBody: {
    flex: 1,
    overflow: 'hidden',
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
    display: 'block',
    borderBottomColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
  },

  transferListControl: {
    borderTop: 0,
    borderRightWidth: reversed ? undefined : 0,
    borderLeftWidth: reversed ? 0 : undefined,
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],

    '&:disabled': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'transparent',
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
    },
  },
}));
