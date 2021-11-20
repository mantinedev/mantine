import { createStyles } from '@mantine/styles';

interface ScrollAreaStyles {
  scrollbarSize: number;
}

export default createStyles((theme, { scrollbarSize }: ScrollAreaStyles) => ({
  corner: {},

  root: {
    overflow: 'hidden',
  },

  viewport: {
    width: '100%',
    height: '100%',
  },

  scrollbar: {
    display: 'flex',
    userSelect: 'none',
    touchAction: 'none',
    boxSizing: 'border-box',
    padding: scrollbarSize / 5,
    transition: 'background-color 150ms ease, opacity 150ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    '&[data-orientation="vertical"]': {
      width: scrollbarSize,
    },

    '&[data-orientation="horizontal"]': {
      flexDirection: 'column',
      height: scrollbarSize,
    },

    '&[data-state="hidden"]': {
      opacity: 0,
    },
  },

  thumb: {
    flex: 1,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba('#ffffff', 0.4)
        : theme.fn.rgba(theme.black, 0.4),
    borderRadius: scrollbarSize,
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      minWidth: 44,
      minHeight: 44,
    },
  },
}));
