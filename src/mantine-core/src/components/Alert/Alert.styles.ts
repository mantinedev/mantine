import { createMemoStyles, MantineTheme, getThemeColor, getFontStyles } from '../../theme';

interface AlertStyles {
  color: string;
  theme: MantineTheme;
}

export default createMemoStyles({
  root: ({ color, theme }: AlertStyles) => ({
    position: 'relative',
    padding: [theme.spacing.sm, theme.spacing.md],
    borderRadius: theme.radius.sm,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : getThemeColor({ theme, color, shade: 0 }),
  }),

  title: ({ color, theme }: AlertStyles) => ({
    boxSizing: 'border-box',
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 5 : 7 }),
    margin: 0,
    marginBottom: 7,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: 1,
  }),

  icon: ({ theme }: AlertStyles) => ({
    marginRight: theme.spacing.xs / 2,
    lineHeight: 1,
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',

    '& svg': {
      display: 'block',
    },
  }),

  body: ({ theme }: AlertStyles) => ({
    ...getFontStyles(theme),
    lineHeight: theme.lineHeight,
    borderBottomLeftRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:only-child': {
      borderTopRightRadius: theme.radius.sm,
      borderTopLeftRadius: theme.radius.sm,
    },
  }),
});
