import { createMemoStyles, MantineTheme, getThemeColor, hexToRgba } from '../../theme';

interface NotificationStyles {
  color: string;
  theme: MantineTheme;
  disallowClose: boolean;
}

export default createMemoStyles({
  withIcon: {
    paddingLeft: '10px !important',

    '&::before': {
      display: 'none !important',
    },
  },

  notification: ({ color, theme }: NotificationStyles) => ({
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 22,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,

    '&::before': {
      content: "''",
      display: 'block',
      position: 'absolute',
      width: 6,
      top: 4,
      bottom: 4,
      left: 4,
      borderRadius: 4,
      backgroundColor: getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === 'dark' ? 7 : 6,
      }),
    },

    '& $icon': {
      backgroundColor: hexToRgba(
        getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 7 : 6 }),
        theme.colorScheme === 'dark' ? 0.7 : 1
      ),
      color: theme.white,
    },
  }),

  body: ({ disallowClose }: NotificationStyles) => ({
    flex: 1,
    maxWidth: !disallowClose ? 'calc(100% - 40px)' : '100%', // space for close button and margin
    marginRight: 10,
  }),

  loader: ({ theme }: NotificationStyles) => ({
    marginRight: theme.spacing.md,
  }),

  icon: ({ theme }: NotificationStyles) => ({
    boxSizing: 'border-box',
    marginRight: theme.spacing.md,
    width: 28,
    height: 28,
    borderRadius: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
  }),

  title: ({ theme }: NotificationStyles) => ({
    lineHeight: 1.4,
    marginBottom: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[9],
  }),

  description: ({ theme }: NotificationStyles) => ({
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    lineHeight: 1.4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '&:only-child': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    },
  }),
});
