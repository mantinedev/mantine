import { createMemoStyles, MantineTheme, getThemeColor, getFontStyles } from '../../theme';

interface AlertStyles {
  color: string;
  theme: MantineTheme;
}

const LINE_WIDTH = 4;

export default createMemoStyles({
  root: ({ color, theme }: AlertStyles) => ({
    position: 'relative',
    padding: [theme.spacing.xs, theme.spacing.md],
    paddingLeft: theme.spacing.md + theme.spacing.xs / 2 + LINE_WIDTH,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,

    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: theme.spacing.xs,
      bottom: theme.spacing.xs,
      left: theme.spacing.xs,
      width: LINE_WIDTH,
      borderRadius: LINE_WIDTH,
      backgroundColor: getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === 'dark' ? 4 : 6,
      }),
    },
  }),

  title: ({ color, theme }: AlertStyles) => ({
    boxSizing: 'border-box',
    color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
    margin: 0,
    marginBottom: theme.spacing.xs / 2,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
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
