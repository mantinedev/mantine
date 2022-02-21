import { createStyles } from '@mantine/core';

export interface SpotlightStylesParams {
  centered: boolean;
  maxWidth: number;
  topOffset: number;
}

export default createStyles((theme, { centered, maxWidth, topOffset }: SpotlightStylesParams) => ({
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
    paddingTop: centered ? theme.spacing.md : topOffset,
    justifyContent: centered ? 'center' : 'flex-start',
    alignItems: 'center',
  },

  searchInput: {
    border: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,

    '&, &:focus': {
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
    },
  },

  actions: {
    padding: 5,
  },
}));
