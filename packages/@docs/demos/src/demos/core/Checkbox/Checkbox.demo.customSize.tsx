import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MantineThemeProvider, Checkbox, createTheme } from '@mantine/core';
import classes from './Checkbox.demo.customSize.module.css';

const cssCode = `.root {
  --checkbox-size-xxl: rem(42px);
  --checkbox-size-xxs: rem(14px);

  &[data-size='xxl'] {
    .label {
      font-size: rem(22px);
      line-height: rem(40px);
    }
  }

  &[data-size='xxs'] {
    .label {
      font-size: rem(10px);
      line-height: rem(14px);
    }
  }
}
`;

const code = `
import { MantineProvider, Checkbox, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Checkbox: Checkbox.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Checkbox size="xxs" label="Extra small checkbox" />
      <Checkbox size="xxl" label="Extra large checkbox" mt="md" />
    </MantineProvider>
  );
}
`;

const theme = createTheme({
  components: {
    Checkbox: Checkbox.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Checkbox size="xxs" label="Extra small checkbox" />
      <Checkbox size="xxl" label="Extra large checkbox" mt="md" />
    </MantineThemeProvider>
  );
}

export const customSize: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'Demo.module.css', code: cssCode, language: 'css' },
  ],
};
