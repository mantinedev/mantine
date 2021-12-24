import { createStyles, MantineTheme } from '@mantine/core';

export default createStyles((theme: MantineTheme) => ({
  demo: {
    maxWidth: '100%',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1]
    }`,
    position: 'relative',

    '&:not(:only-child)': {
      borderBottom: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },

  prism: {
    borderBottomRightRadius: theme.radius.sm,
    borderBottomLeftRadius: theme.radius.sm,
    marginTop: 0,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1]
    }`,
  },

  code: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },

  controls: {
    position: 'absolute',
    bottom: theme.spacing.xs - 1,
    right: theme.spacing.xs - 1,
  },

  withToggle: {
    paddingRight: 50,
    minHeight: 80,
  },
}));
