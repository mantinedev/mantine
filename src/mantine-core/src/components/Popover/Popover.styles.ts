import { createMemoStyles, MantineTheme, MantineNumberSize, getSizeValue } from '../../theme';

interface PopoverStyles {
  theme: MantineTheme;
  gutter: number;
  arrowSize: number;
  shadow: string;
  radius: MantineNumberSize;
  spacing: MantineNumberSize;
}

const horizontalPlacement = (arrowSize: number) => ({
  '&$center': {
    top: '50%',
    transform: 'translateY(-50%)',

    '& $arrow': {
      top: `calc(50% - ${arrowSize}px)`,
    },
  },

  '&$end': {
    bottom: 0,
    '& $arrow': {
      bottom: arrowSize * 2,
    },
  },

  '&$start': {
    top: 0,

    '& $arrow': {
      top: arrowSize * 2,
    },
  },
});

const verticalPlacement = (arrowSize: number) => ({
  '&$center': {
    left: '50%',
    transform: 'translateX(-50%)',

    '& $arrow': {
      left: `calc(50% - ${arrowSize}px)`,
    },
  },

  '&$end': {
    right: 0,
    '& $arrow': {
      right: arrowSize * 2,
    },
  },

  '&$start': {
    left: 0,

    '& $arrow': {
      left: arrowSize * 2,
    },
  },
});

export default createMemoStyles({
  center: {},
  start: {},
  end: {},

  root: {
    position: 'relative',
    display: 'inline-block',
  },

  wrapper: {
    background: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },

  popover: ({ theme, radius }: PopoverStyles) => ({
    position: 'absolute',
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    pointerEvents: 'all',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  }),

  arrow: ({ theme, arrowSize }: PopoverStyles) => ({
    width: arrowSize * 2,
    height: arrowSize * 2,
    position: 'absolute',
    transform: 'rotate(45deg)',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    zIndex: 1,
  }),

  body: ({ theme, radius, shadow }: PopoverStyles) => ({
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    boxShadow: shadow in theme.shadows ? theme.shadows[shadow] : shadow,
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  }),

  inner: ({ theme, spacing }: PopoverStyles) => ({
    padding: getSizeValue({ size: spacing, sizes: theme.spacing }),
  }),

  header: ({ theme, spacing }: PopoverStyles) => ({
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
    padding: [theme.spacing.xs / 1.5, getSizeValue({ size: spacing, sizes: theme.spacing })],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),

  target: {
    zIndex: 1,
  },

  close: {
    position: 'absolute',
    top: 7,
    zIndex: 2,
    right: 10,
  },

  left: ({ gutter, arrowSize }: PopoverStyles) => ({
    ...horizontalPlacement(arrowSize),
    right: `calc(100% + ${gutter}px)`,

    '& $arrow': {
      right: -arrowSize,
      borderLeft: 0,
      borderBottom: 0,
    },
  }),

  right: ({ gutter, arrowSize }: PopoverStyles) => ({
    ...horizontalPlacement(arrowSize),
    left: `calc(100% + ${gutter}px)`,

    '& $arrow': {
      left: -arrowSize,
      borderRight: 0,
      borderTop: 0,
    },
  }),

  top: ({ gutter, arrowSize }: PopoverStyles) => ({
    ...verticalPlacement(arrowSize),
    bottom: `calc(100% + ${gutter}px)`,

    '& $arrow': {
      bottom: -arrowSize,
      borderLeft: 0,
      borderTop: 0,
    },
  }),

  bottom: ({ gutter, arrowSize }: PopoverStyles) => ({
    ...verticalPlacement(arrowSize),
    top: `calc(100% + ${gutter}px)`,

    '& $arrow': {
      top: -arrowSize,
      borderRight: 0,
      borderBottom: 0,
    },
  }),
});
