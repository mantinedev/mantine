import { createStyles, MantineNumberSize, MantineTheme } from '@mantine/core';

const BREAKPOINT = 885;

interface ConfiguratorStylesParams {
  radius: MantineNumberSize;
  background: string;
}

export default createStyles(
  (theme: MantineTheme, { radius, background }: ConfiguratorStylesParams) => ({
    configurator: {
      display: 'flex',
      maxWidth: '100%',
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
      overflow: 'hidden',
      borderTopLeftRadius: theme.fn.radius(radius),
      borderTopRightRadius: theme.fn.radius(radius),
      borderBottom: 0,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        flexDirection: 'column',
      },
    },

    noCode: {
      borderRadius: theme.fn.radius(radius),
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
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
      backgroundColor:
        background || (theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white),
      borderLeft: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        width: '100%',
        borderLeft: 0,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
      },
    },

    prism: {
      marginTop: 0,
      borderBottomRightRadius: theme.fn.radius(radius),
      borderBottomLeftRadius: theme.fn.radius(radius),
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
    },

    code: {
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: theme.fn.radius(radius),
      borderBottomLeftRadius: theme.fn.radius(radius),
    },
  })
);
