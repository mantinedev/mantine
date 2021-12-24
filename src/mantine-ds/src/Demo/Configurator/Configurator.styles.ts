import { createStyles, MantineTheme } from '@mantine/core';

const BREAKPOINT = 885;

export default createStyles((theme: MantineTheme) => ({
  configurator: {
    display: 'flex',
    maxWidth: '100%',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1]
    }`,
    overflow: 'hidden',
    borderTopLeftRadius: theme.radius.sm,
    borderTopRightRadius: theme.radius.sm,
    borderBottom: 0,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      flexDirection: 'column',
    },
  },

  noCode: {
    borderRadius: theme.radius.sm,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1]
    }`,
  },

  preview: {
    flex: 1,
    padding: theme.spacing.md,
    display: 'flex',
    flexDirection: 'column',
  },

  controls: {
    boxSizing: 'border-box',
    width: 250,
    padding: theme.spacing.md,
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1]
    }`,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      width: '100%',
      borderLeft: 0,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1]
      }`,
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
}));
