import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },

  breadcrumb: {
    lineHeight: 1,
    whiteSpace: 'nowrap',
    WebkitTapHighlightColor: 'transparent',
  },

  separator: {
    marginLeft: theme.spacing.xs,
    marginRight: theme.spacing.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
