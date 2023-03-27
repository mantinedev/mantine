import { createStyles, getStylesRef, rem } from '@mantine/styles';

export interface ScrollAreaStylesParams {
  scrollbarSize: number | string;
  offsetScrollbars: boolean;
  scrollbarHovered: boolean;
  hidden: boolean;
}

export default createStyles(
  (
    theme,
    { scrollbarSize, offsetScrollbars, scrollbarHovered, hidden }: ScrollAreaStylesParams
  ) => ({
    root: {
      overflow: 'hidden',
    },

    viewport: {
      width: '100%',
      height: '100%',
      paddingRight: offsetScrollbars ? rem(scrollbarSize) : undefined,
      paddingBottom: offsetScrollbars ? rem(scrollbarSize) : undefined,
    },

    scrollbar: {
      display: hidden ? 'none' : 'flex',
      userSelect: 'none',
      touchAction: 'none',
      boxSizing: 'border-box',
      padding: `calc(${rem(scrollbarSize)}  / 5)`,
      transition: 'background-color 150ms ease, opacity 150ms ease',

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        [`& .${getStylesRef('thumb')}`]: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.fn.rgba(theme.white, 0.5)
              : theme.fn.rgba(theme.black, 0.5),
        },
      },

      '&[data-orientation="vertical"]': {
        width: rem(scrollbarSize),
      },

      '&[data-orientation="horizontal"]': {
        flexDirection: 'column',
        height: rem(scrollbarSize),
      },

      '&[data-state="hidden"]': {
        display: 'none',
        opacity: 0,
      },
    },

    thumb: {
      ref: getStylesRef('thumb'),
      flex: 1,
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.white, 0.4)
          : theme.fn.rgba(theme.black, 0.4),
      borderRadius: rem(scrollbarSize),
      position: 'relative',
      transition: 'background-color 150ms ease',
      display: hidden ? 'none' : undefined,
      overflow: 'hidden',

      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        minWidth: rem(44),
        minHeight: rem(44),
      },
    },

    corner: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      transition: 'opacity 150ms ease',
      opacity: scrollbarHovered ? 1 : 0,
      display: hidden ? 'none' : undefined,
    },
  })
);
