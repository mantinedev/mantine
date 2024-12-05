import { createStyles, keyframes } from '@mantine/emotion';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { createStyles, keyframes } from '@mantine/emotion';

// Export animation to reuse it in other components
export const bounce = keyframes({
  'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
  '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
  '70%': { transform: 'translate3d(0, -15px, 0)' },
  '90%': { transform: 'translate3d(0, -4px, 0)' },
});

const useStyles = createStyles((theme) => ({
  container: {
    textAlign: 'center',
    padding: theme.spacing.xl,
    animation: \`\${bounce} 3s ease-in-out infinite\`,
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container}>Keyframes demo</div>;
}
`;

const bounce = keyframes({
  'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
  '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
  '70%': { transform: 'translate3d(0, -15px, 0)' },
  '90%': { transform: 'translate3d(0, -4px, 0)' },
});

const useStyles = createStyles((theme, _, u) => ({
  container: {
    textAlign: 'center',
    padding: theme.spacing.xl,
    animation: `${bounce} 3s ease-in-out infinite`,

    [u.light]: { color: theme.black },

    [u.dark]: { color: theme.white },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container}>Keyframes demo</div>;
}

export const _keyframes: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
