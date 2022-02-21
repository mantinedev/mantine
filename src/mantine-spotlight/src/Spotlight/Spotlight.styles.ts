import { createStyles } from '@mantine/core';

export interface SpotlightStylesParams {
  center: boolean;
  maxWidth: number;
}

export default createStyles((theme, { center, maxWidth }: SpotlightStylesParams) => ({
  root: {
    ...theme.fn.cover(),
    position: 'fixed',
  },

  spotlight: {
    position: 'relative',
    zIndex: 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    borderRadius: theme.radius.sm,
    width: '100%',
    maxWidth,
  },

  overlay: {
    ...theme.fn.cover(),
    position: 'fixed',
  },

  inner: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: center ? 'center' : 'flex-start',
    alignItems: 'center',
  },
}));
