import { createStyles } from '@mantine/core';

interface NotificationsProviderStylesParams {
  zIndex: React.CSSProperties['zIndex'];
}

export default createStyles((theme, { zIndex }: NotificationsProviderStylesParams) => ({
  notifications: {
    width: `calc(100% - ${theme.spacing.md * 2}px)`,
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
