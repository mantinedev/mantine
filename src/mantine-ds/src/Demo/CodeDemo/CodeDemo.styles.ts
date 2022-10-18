import { createStyles, MantineNumberSize, MantineTheme } from '@mantine/core';

interface CodeDemoStylesParams {
  radius: MantineNumberSize;
}

export default createStyles((theme: MantineTheme, { radius }: CodeDemoStylesParams) => ({
  root: {
    borderRadius: theme.fn.radius(radius),
  },

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
    borderBottomRightRadius: theme.fn.radius(radius),
    borderBottomLeftRadius: theme.fn.radius(radius),
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
    marginTop: `calc(${theme.spacing.xs}px - 1px)`,
    alignItems: 'flex-end',
  },

  withToggle: {
    paddingRight: 50,
    minHeight: 80,
  },
}));
