import {
  Button,
  DEFAULT_THEME,
  MantineThemeProvider,
  parseThemeColor,
  Stack,
  useMantineTheme,
} from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = (props: Record<string, any>) => `
import { Button, createTheme, MantineProvider, Stack } from '@mantine/core';

const theme = createTheme({
  autoContrast: true,
  luminanceThreshold: ${props.luminanceThreshold},
});

function Wrapper(props: any) {
  const buttons = Array(10)
    .fill(0)
    .map((_, index) => (
      <Button
        key={index}
        color=${
          parseThemeColor({ theme: DEFAULT_THEME, color: props.color }).isThemeColor
            ? `{\`${props.color}.\${index}\`}`
            : `"${props.color}"`
        }
      >
        Button
      </Button>
    ));

  return (
    <MantineProvider theme={theme}>
      <Stack>{buttons}</Stack>
    </MantineProvider>
  );
}
`;

function Wrapper(props: any) {
  const theme = useMantineTheme();

  const buttons = Array(10)
    .fill(0)
    .map((_, index) => (
      <Button
        key={index}
        color={
          parseThemeColor({ theme, color: props.color }).isThemeColor
            ? `${props.color}.${index}`
            : props.color
        }
      >
        Button
      </Button>
    ));

  return (
    <MantineThemeProvider
      inherit
      theme={{
        autoContrast: true,
        luminanceThreshold: props.luminanceThreshold,
      }}
    >
      <Stack>{buttons}</Stack>
    </MantineThemeProvider>
  );
}

export const luminanceThreshold: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { type: 'color', prop: 'color', initialValue: 'blue', libraryValue: null },
    {
      type: 'number',
      prop: 'luminanceThreshold',
      initialValue: 0.3,
      min: 0,
      max: 1,
      step: 0.01,
      libraryValue: '__',
    },
  ],
};
