import { Button, Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MantineProvider, createTheme, Group, Button } from '@mantine/core';

const theme = createTheme({
  colors: {
    'oklch-blue': [
      'oklch(96.27% 0.0217 238.66)',
      'oklch(92.66% 0.0429 240.01)',
      'oklch(86.02% 0.0827 241.66)',
      'oklch(78.2% 0.13 243.83)',
      'oklch(71.8% 0.1686 246.06)',
      'oklch(66.89% 0.1986 248.32)',
      'oklch(62.59% 0.2247 250.29)',
      'oklch(58.56% 0.2209 251.26)',
      'oklch(54.26% 0.2067 251.67)',
      'oklch(49.72% 0.1888 251.59)',
    ],
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button color="oklch-blue">Filled</Button>
        <Button color="oklch-blue" variant="outline">
          Outline
        </Button>
        <Button color="oklch-blue" variant="light">
          Light
        </Button>
      </Group>
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Button color="oklch-blue">Filled</Button>
      <Button color="oklch-blue" variant="outline">
        Outline
      </Button>
      <Button color="oklch-blue" variant="light">
        Light
      </Button>
    </Group>
  );
}

export const oklch: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
