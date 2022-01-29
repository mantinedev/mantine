import { createStyles, MantineNumberSize, MantineShadow } from '@mantine/styles';

interface PopoverBodyStyles {
  shadow: MantineShadow;
  radius: MantineNumberSize;
  spacing: MantineNumberSize;
  width?: number | string;
}

export default createStyles((theme, { radius, shadow, spacing, width }: PopoverBodyStyles) => ({
  title: {},

  wrapper: {
    ...theme.fn.focusStyles(),
  },

  popover: {
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    pointerEvents: 'all',
    borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
    width,
  },

  body: {
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    boxShadow: shadow in theme.shadows ? theme.shadows[shadow] : shadow,
    borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
  },

  inner: {
    padding: theme.fn.size({ size: spacing, sizes: theme.spacing }),
  },

  header: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
    padding: `${theme.spacing.xs / 1.5}px ${theme.fn.size({
      size: spacing,
      sizes: theme.spacing,
    })}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  close: {
    position: 'absolute',
    top: 7,
    zIndex: 2,
    right: 10,
  },
}));
