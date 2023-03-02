import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  label: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    fontWeight: 500,
    fontSize: theme.fontSizes.xs,
    padding: `calc(${theme.spacing.xs} / 2) ${theme.spacing.sm}`,
    cursor: 'default',
  },
}));
