import { createStyles, getFontStyles, getThemeColor, MantineColor } from '@mantine/styles';

interface BlockquoteStyles {
  color: MantineColor;
}

export default createStyles((theme, { color }: BlockquoteStyles) => ({
  root: {
    ...getFontStyles(theme),
    fontSize: theme.fontSizes.lg,
    lineHeight: theme.lineHeight,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    margin: 0,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    padding: [theme.spacing.md, theme.spacing.lg],
  },

  inner: {
    display: 'flex',
  },

  body: {
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  icon: {
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 6 : 7 }),
    marginRight: theme.spacing.lg,
    marginTop: 2,
    width: 22,
  },

  cite: {
    display: 'block',
    fontSize: theme.fontSizes.sm,
    marginTop: theme.spacing.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));
