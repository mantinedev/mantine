import { em, getBreakpointValue } from '@mantine/core';
import { createStyles } from '@mantine/emotion';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { em, getBreakpointValue } from '@mantine/core';
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme, _, u) => ({
  container: {
    height: 100,
    backgroundColor: theme.colors.blue[6],

    // Media query with value from theme
    [\`@media (max-width: \${em(getBreakpointValue(theme.breakpoints.xl, theme.breakpoints) - 1)})\`]: {
      backgroundColor: theme.colors.pink[6],
    },

    // Simplify media query writing with theme functions
    [u.smallerThan('lg')]: {
      backgroundColor: theme.colors.yellow[6],
    },

    // Static media query
    [\`@media (max-width: \${em(800)})\`]: {
      backgroundColor: theme.colors.orange[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container} />;
}
`;

const useStyles = createStyles((theme, _, u) => ({
  container: {
    height: 100,
    backgroundColor: theme.colors.blue[6],

    // Media query with value from theme
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.xl, theme.breakpoints) - 1)})`]:
      {
        backgroundColor: theme.colors.pink[6],
      },

    // Simplify media query writing with theme functions
    [u.smallerThan('lg')]: {
      backgroundColor: theme.colors.yellow[6],
    },

    // Static media query
    [`@media (max-width: ${em(800)})`]: {
      backgroundColor: theme.colors.orange[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container} />;
}

export const media: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
