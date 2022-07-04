import { createStyles, CSSObject } from '@mantine/styles';

const sizes = {
  xs: 320,
  sm: 380,
  md: 440,
  lg: 620,
  xl: 780,
};

export interface ModalStylesParams {
  overflow: 'outside' | 'inside';
  size: string | number;
  centered: boolean;
  zIndex: React.CSSProperties['zIndex'];
  fullScreen: boolean;
}

function getFullScreenStyles(fullScreen: boolean): CSSObject {
  if (!fullScreen) {
    return {};
  }

  return {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
}

export default createStyles(
  (theme, { overflow, size, centered, zIndex, fullScreen }: ModalStylesParams) => ({
    close: {},

    overlay: {
      display: fullScreen ? 'none' : undefined,
    },

    root: {
      position: 'fixed',
      zIndex,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    inner: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: 'auto',
      padding: fullScreen ? 0 : `${theme.spacing.xl * 2}px ${theme.spacing.md}px`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: centered ? 'center' : 'flex-start',
    },

    title: {
      marginRight: theme.spacing.md,
      textOverflow: 'ellipsis',
      display: 'block',
      wordBreak: 'break-word',
    },

    modal: {
      position: 'relative',
      width: fullScreen ? undefined : theme.fn.size({ sizes, size }),
      borderRadius: fullScreen ? 0 : undefined,
      outline: 0,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      marginTop: centered ? 'auto' : undefined,
      marginBottom: centered ? 'auto' : undefined,
      zIndex: 1,
      marginLeft: 'calc(var(--removed-scroll-width, 0px) * -1)',
      ...getFullScreenStyles(fullScreen),
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.md,
      marginRight: -9,
    },

    body: {
      maxHeight: overflow === 'inside' ? 'calc(100vh - 185px)' : null,
      overflowY: overflow === 'inside' ? 'auto' : null,
      wordBreak: 'break-word',
    },
  })
);
