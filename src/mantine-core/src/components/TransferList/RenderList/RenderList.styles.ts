import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  renderList: {},
  renderListItem: {
    display: 'block',
    width: '100%',
    padding: 5,
    borderRadius: theme.radius.sm,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));
