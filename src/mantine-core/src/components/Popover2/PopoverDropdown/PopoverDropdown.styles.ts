import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  root: {
    position: 'absolute',
    backgroundColor: theme.white,
    background: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]}`,
    padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
  },

  arrow: {
    backgroundColor: 'inherit',
    border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]}`,
    zIndex: 1,
  },
}));
