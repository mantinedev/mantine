import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  root: {
    lineHeight: theme.lineHeight,
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: `3px ${theme.spacing.xs / 2}px`,
    borderRadius: theme.radius.sm,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[3]
    }`,
    borderBottom: `3px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[3]
    }`,
  },
}));
