import { createStyles, MantineColor, MantineNumberSize } from '@mantine/styles';

interface NotificationStyles {
  color: MantineColor;
  radius: MantineNumberSize;
  disallowClose: boolean;
}

export default createStyles(
  (theme, { color, radius, disallowClose }: NotificationStyles, getRef) => {
    const icon = getRef('icon');
    const _radius = theme.fn.size({ size: radius, sizes: theme.radius });
    const topBottom = Math.min(Math.max(_radius / 1.2, 4), 30);

    return {
      closeButton: {},

      icon: {
        ref: icon,
        boxSizing: 'border-box',
        marginRight: theme.spacing.md,
        width: 28,
        height: 28,
        borderRadius: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.white,
      },

      withIcon: {
        paddingLeft: theme.spacing.xs,

        '&::before': {
          display: 'none',
        },
      },

      root: {
        boxSizing: 'border-box',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 22,
        paddingRight: 5,
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.xs,
        borderRadius: _radius,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        boxShadow: theme.shadows.lg,
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
        }`,

        '&::before': {
          content: "''",
          display: 'block',
          position: 'absolute',
          width: 6,
          top: topBottom,
          bottom: topBottom,
          left: 4,
          borderRadius: _radius,
          backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 6 : 7),
        },

        [`& .${icon}`]: {
          backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 6 : 7),
          color: theme.white,
        },
      },

      body: {
        flex: 1,
        maxWidth: !disallowClose ? 'calc(100% - 40px)' : '100%', // space for close button and margin
        marginRight: 10,
      },

      loader: {
        marginRight: theme.spacing.md,
      },

      title: {
        lineHeight: 1.4,
        marginBottom: 2,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[9],
      },

      description: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        lineHeight: 1.4,
        overflow: 'hidden',
        textOverflow: 'ellipsis',

        '&:only-child': {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        },
      },
    };
  }
);
