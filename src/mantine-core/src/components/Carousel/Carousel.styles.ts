import { createStyles, MantineNumberSize } from '@mantine/styles';

export const sizes = {
  xs: 100,
  sm: 250,
  md: 300,
  lg: 450,
  xl: 600,
};

export interface CarouselStylesParams {
  scrollOverflow: boolean;
  axis: 'x' | 'y';
  height: MantineNumberSize;
  padding: MantineNumberSize;
  draggable: boolean;
}

export default createStyles(
  (theme, { scrollOverflow, axis, height, padding, draggable }: CarouselStylesParams) => ({
    root: {
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    },
    viewport: {
      overflow: scrollOverflow ? 'visible' : 'hidden',
      width: '100%',
      cursor: draggable ? 'grab' : 'default',
    },
    container: {
      display: axis === 'x' ? 'flex' : 'block',
      userSelect: 'none',
      height: theme.fn.size({ size: height, sizes }),
      marginLeft: -theme.fn.size({ size: padding, sizes: theme.spacing }),
      '-webkit-touch-callout': 'none',
      '-khtml-user-select': 'none',
      '-webkit-tap-highlight-color': 'transparent',
    },
    controlButton: {
      outline: 0,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      touchAction: 'manipulation',
      position: 'absolute',
      zIndex: 1,
      top: '50%',
      transform: 'translateY(-50%)',
      border: 0,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      '&:disabled': {
        cursor: 'default',
        opacity: 0.5,
      },
      color: '#339AF0',
    },
    prevButton: {
      left: 2 * theme.fn.size({ size: padding, sizes: theme.spacing }),
    },
    nextButton: {
      right: 2 * theme.fn.size({ size: padding, sizes: theme.spacing }),
    },
    indicatorsContainer: {
      position: 'absolute',
      right: 0,
      bottom: theme.fn.size({ size: padding, sizes: theme.spacing }) + 5,
      left: 0,
      zIndex: 2,
      display: 'flex',
      justifyContent: 'center',
      padding: 0,
    },
    indicatorButton: {
      cursor: 'pointer',
      position: 'relative',
      padding: 0,
      outline: 0,
      border: 0,
      width: 30,
      height: 30,
      marginRight: 7.5,
      marginLeft: 7.5,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderRadius: 4,
      '&::after': {
        backgroundColor: theme.white,
        width: '100%',
        height: 4,
        borderRadius: 2,
        content: '""',
      },
    },
    indicatorButtonActive: {
      '&::after': {
        backgroundColor: '#339AF0',
        opacity: 1,
      },
    },
  })
);
