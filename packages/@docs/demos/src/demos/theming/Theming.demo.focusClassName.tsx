import { Button, MantineThemeProvider } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './Theming.demo.focusClassName.module.css';

const tsxCode = `
import { MantineProvider, Button } from '@mantine/core';
import classes from './focus.module.css';

function Demo() {
  return (
    <MantineProvider theme={{ focusClassName: classes.focus }}>
      <Button>Click button to see custom focus ring</Button>
    </MantineProvider>
  );
}
`;

const cssCode = `
/* Use \`&:focus\` when you want focus ring to be visible when control is clicked */
.focus {
  &:focus {
    outline: 2px solid var(--mantine-color-red-filled);
    outline-offset: 3px;
  }
}

/* Use \`&:focus-visible\` when you want focus ring to be visible
   only when user navigates with keyboard, for example by pressing Tab key */
.focus-auto {
  &:focus-visible {
    outline: 2px solid var(--mantine-color-red-filled);
    outline-offset: 2px;
  }
}
`;

function Demo() {
  return (
    <MantineThemeProvider inherit theme={{ focusClassName: classes.focus }}>
      <Button>Click button to see custom focus ring</Button>
    </MantineThemeProvider>
  );
}

export const focusClassName: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code: tsxCode },
    { fileName: 'focus.module.css', language: 'scss', code: cssCode },
  ],
};
