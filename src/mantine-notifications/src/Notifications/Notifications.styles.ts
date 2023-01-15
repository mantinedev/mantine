import { createStyles } from '@mantine/core';

interface NotificationsStylesParams {
  zIndex: React.CSSProperties['zIndex'];
}

export default createStyles((theme, { zIndex }: NotificationsStylesParams) => ({
  notifications: {
    width: `calc(100% - ${theme.spacing.md} * 2)`,
    boxSizing: 'border-box',
    position: 'fixed',
    zIndex,
  },

  notification: {
    '&:not(:first-of-type)': {
      marginTop: theme.spacing.sm,
    },
  },
}));
