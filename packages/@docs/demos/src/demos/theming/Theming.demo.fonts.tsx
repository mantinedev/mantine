import { Button, Code, Group, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Code, Title, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Outfit, sans-serif' },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Title order={3}>Outfit or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <>
      <Title order={3} ff="Outfit, sans-serif" ta="center">
        Outfit or sans-serif title
      </Title>
      <Group mt="md">
        <Button ff="Verdana, sans-serif">Verdana button</Button>
        <Code ff="Monaco, Courier, monospace">Monaco, Courier Code</Code>
      </Group>
    </>
  );
}

export const fonts: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
