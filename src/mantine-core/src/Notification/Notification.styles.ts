import { createStyles, MantineColor, MantineNumberSize, rem } from '@mantine/styles';

export interface NotificationStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
  withTitle: boolean;
}

export default createStyles((theme, { color, radius, withTitle }: NotificationStylesParams) => {
  const _radius = theme.fn.radius(radius);
  const colors = theme.fn.variant({ variant: 'filled', color });

  return {
    closeButton: theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    }),

    icon: {
      boxSizing: 'border-box',
      marginRight: theme.spacing.md,
      width: rem(28),
      height: rem(28),
      borderRadius: rem(28),
      display: 'flex',
      flex: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
      color: theme.white,
    },

    root: {
      overflow: 'hidden',
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: rem(22),
      paddingRight: theme.spacing.xs,
      paddingTop: theme.spacing.xs,
      paddingBottom: theme.spacing.xs,
      borderRadius: _radius,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      boxShadow: theme.shadows.lg,

      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: rem(6),
        top: _radius,
        bottom: _radius,
        left: rem(4),
        borderRadius: _radius,
        backgroundColor: colors.background,
      },

      '&[data-with-icon]': {
        paddingLeft: theme.spacing.xs,

        '&::before': {
          display: 'none',
        },
      },

      '&[data-with-border]': {
        border: `${rem(1)} solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
      },
    },

    body: {
      flex: 1,
      overflow: 'hidden',
      marginRight: theme.spacing.xs,
    },

    loader: {
      marginRight: theme.spacing.md,
    },

    title: {
      lineHeight: 1.4,
      marginBottom: rem(2),
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[9],
    },

    description: {
      color: withTitle
        ? theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[6]
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.black,
      lineHeight: 1.4,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  };
});
