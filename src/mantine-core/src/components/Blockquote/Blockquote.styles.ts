import { createMemoStyles, MantineTheme, getFontStyles, getThemeColor } from '../../theme';

interface BlockquoteStyles {
  theme: MantineTheme;
  color: string;
}

export default createMemoStyles({
  root: ({ theme, color }: BlockquoteStyles) => ({
    ...getFontStyles(theme),
    fontSize: theme.fontSizes.lg,
    lineHeight: theme.lineHeight,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    margin: 0,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `3px solid ${getThemeColor({
      theme,
      color,
      shade: theme.colorScheme === 'dark' ? 4 : 6,
    })}`,
    padding: [theme.spacing.md, theme.spacing.lg],
  }),

  inner: {
    display: 'flex',
  },

  body: {
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  icon: ({ theme, color }: BlockquoteStyles) => ({
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
    marginRight: theme.spacing.md,
    marginTop: 2,
    width: 22,
  }),

  cite: ({ theme }: BlockquoteStyles) => ({
    display: 'block',
    fontSize: theme.fontSizes.sm,
    marginTop: theme.spacing.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
});
