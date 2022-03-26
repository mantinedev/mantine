import { createStyles, MantineNumberSize } from '@mantine/core';

export interface SpotlightStylesParams {
  centered: boolean;
  maxWidth: number;
  topOffset: number;
  radius: MantineNumberSize;
}

export default createStyles(
  (theme, { centered, maxWidth, topOffset, radius }: SpotlightStylesParams) => ({
    root: {
      ...theme.fn.cover(),
      position: 'fixed',
    },

    spotlight: {
      position: 'relative',
      zIndex: 2,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      borderRadius: theme.fn.radius(radius),
      width: '100%',
      maxWidth,
      overflow: 'hidden',
      marginLeft: 'calc(var(--removed-scroll-width, 0px) * -1)',
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
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    },
  })
);
