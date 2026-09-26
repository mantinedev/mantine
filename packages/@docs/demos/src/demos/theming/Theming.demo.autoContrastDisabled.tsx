import { Button, Code, Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Code, Group } from '@mantine/core';

function Demo() {
  return (
    <>
      <Code>autoContrast: true (default)</Code>
      <Group mt="xs" mb="lg">
        <Button color="lime.4">Lime.4 button</Button>
        <Button color="blue.2">Blue.2 button</Button>
        <Button color="orange.3">Orange.3 button</Button>
      </Group>

      <Code>autoContrast: false</Code>
      <Group mt="xs">
        <Button color="lime.4" autoContrast={false}>
          Lime.4 button
        </Button>
        <Button color="blue.2" autoContrast={false}>
          Blue.2 button
        </Button>
        <Button color="orange.3" autoContrast={false}>
          Orange.3 button
        </Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Code>autoContrast: true (default)</Code>
      <Group mt="xs" mb="lg">
        <Button color="lime.4">Lime.4 button</Button>
        <Button color="blue.2">Blue.2 button</Button>
        <Button color="orange.3">Orange.3 button</Button>
      </Group>

      <Code>autoContrast: false</Code>
      <Group mt="xs">
        <Button color="lime.4" autoContrast={false}>
          Lime.4 button
        </Button>
        <Button color="blue.2" autoContrast={false}>
          Blue.2 button
        </Button>
        <Button color="orange.3" autoContrast={false}>
          Orange.3 button
        </Button>
      </Group>
    </>
  );
}

export const autoContrastDisabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
