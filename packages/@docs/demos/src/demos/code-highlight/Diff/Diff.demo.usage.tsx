import { Diff } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const previousCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button color="blue">Click me</Button>;
}`;

const currentCode = `import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button color="teal">Click me</Button>
    </Group>
  );
}`;

const code = `
import { Diff } from '@mantine/code-highlight';

const previousCode = \`import { Button } from '@mantine/core';

function Demo() {
  return <Button color="blue">Click me</Button>;
}\`;

const currentCode = \`import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button color="teal">Click me</Button>
    </Group>
  );
}\`;

function Demo() {
  return <Diff previousValue={previousCode} currentValue={currentCode} />;
}
`;

function Demo() {
  return <Diff previousValue={previousCode} currentValue={currentCode} />;
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
