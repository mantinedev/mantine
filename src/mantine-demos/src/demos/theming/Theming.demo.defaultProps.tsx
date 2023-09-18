import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MantineThemeProvider, Button, Group, createTheme } from '@mantine/core';

const code = `
import { MantineProvider, Button, Group, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'cyan',
        variant: 'outline',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button>Default button</Button>
        <Button color="red" variant="filled">
          Button with props
        </Button>
      </Group>
    </MantineProvider>
  );
}
`;

const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'cyan',
        variant: 'outline',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Group>
        <Button>Default button</Button>
        <Button color="red" variant="filled">
          Button with props
        </Button>
      </Group>
    </MantineThemeProvider>
  );
}

export const defaultProps: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
