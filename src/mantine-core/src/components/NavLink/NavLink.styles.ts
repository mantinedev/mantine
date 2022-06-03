import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: `${theme.spacing.xs / 2}px ${theme.spacing.sm}px`,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  icon: {
    marginRight: theme.spacing.sm,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightSection: {
    marginLeft: theme.spacing.sm,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  body: {
    flex: 1,
  },

  label: {},

  description: {
    display: 'block',
  },
}));
