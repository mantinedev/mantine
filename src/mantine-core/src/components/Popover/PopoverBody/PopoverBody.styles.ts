import {
  createMemoStyles,
  MantineTheme,
  MantineNumberSize,
  getSizeValue,
  MantineShadow,
} from '../../../theme';

interface PopoverBodyStyles {
  theme: MantineTheme;
  shadow: MantineShadow;
  radius: MantineNumberSize;
  spacing: MantineNumberSize;
}

export default createMemoStyles({
  title: {},
  wrapper: {},

  popover: ({ theme, radius }: PopoverBodyStyles) => ({
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    pointerEvents: 'all',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  }),

  body: ({ theme, radius, shadow }: PopoverBodyStyles) => ({
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    boxShadow: shadow in theme.shadows ? theme.shadows[shadow] : shadow,
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  }),

  inner: ({ theme, spacing }: PopoverBodyStyles) => ({
    padding: getSizeValue({ size: spacing, sizes: theme.spacing }),
  }),

  header: ({ theme, spacing }: PopoverBodyStyles) => ({
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
    padding: [theme.spacing.xs / 1.5, getSizeValue({ size: spacing, sizes: theme.spacing })],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),

  close: {
    position: 'absolute',
    top: 7,
    zIndex: 2,
    right: 10,
  },
});
