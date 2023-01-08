import { createStyles, rem } from '@mantine/styles';

export default createStyles((theme) => ({
  root: {
    lineHeight: theme.lineHeight,
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: `${rem(3)} calc(${rem(theme.spacing.xs)} / 2)`,
    borderRadius: theme.radius.sm,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    borderBottom: `${rem(3)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));
