import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MantineThemeProvider, Button } from '@mantine/core';
import classes from './Theming.demo.activeClassName.module.css';

const tsxCode = `
import { MantineProvider, Button } from '@mantine/core';
import classes from './active.module.css';

function Demo() {
  return (
    <MantineProvider theme={{ activeClassName: classes.active }}>
      <Button>Press me to see active styles</Button>
    </MantineProvider>
  );
}
`;

const cssCode = `
.active {
  transition: transform 50ms ease-in-out;

  &:active {
    transform: scale(0.97);
  }
}
`;

function Demo() {
  return (
    <MantineThemeProvider theme={{ activeClassName: classes.active }}>
      <Button>Press me to see active styles</Button>
    </MantineThemeProvider>
  );
}

export const activeClassName: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code: tsxCode },
    { fileName: 'active.module.css', language: 'css', code: cssCode },
  ],
};
