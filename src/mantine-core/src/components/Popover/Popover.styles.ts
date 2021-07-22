import { createMemoStyles, MantineTheme, MantineNumberSize, getSizeValue } from '../../theme';

interface PopoverStyles {
  theme: MantineTheme;
  shadow: string;
  radius: MantineNumberSize;
  spacing: MantineNumberSize;
}

export default createMemoStyles({
  title: {},

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

  arrow: ({ theme }: PopoverStyles) => ({
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
});
