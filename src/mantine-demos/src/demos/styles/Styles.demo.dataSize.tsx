import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Input, createTheme, MantineThemeProvider } from '@mantine/core';
import classes from './Styles.demo.dataSize.module.css';

const code = `
import { Input, createTheme, MantineProvider } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input placeholder="Size XXL" size="xxl" />
      <Input placeholder="Size XXS" size="xxs" mt="md" />
    </MantineProvider>
  );
}
`;

const cssCode = `
.wrapper {
  &[data-size='xxl'] {
    & .input {
      padding-left: rem(28px);
      padding-right: rem(28px);
      height: rem(68px);
      font-size: rem(28px);
    }
  }

  &[data-size='xxs'] {
    & .input {
      padding-left: rem(10px);
      padding-right: rem(10px);
      height: rem(28px);
      font-size: rem(10px);
    }
  }
}
`;

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Input placeholder="Size XXL" size="xxl" />
      <Input placeholder="Size XXS" size="xxs" mt="md" />
    </MantineThemeProvider>
  );
}

export const dataSize: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 360,
  centered: true,
  code: [
    { language: 'tsx', code, fileName: 'Demo.tsx' },
    { language: 'css', code: cssCode, fileName: 'Demo.module.css' },
  ],
};
