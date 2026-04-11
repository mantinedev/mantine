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

function Demo() {
  return <Diff previousValue={previousValue} currentValue={currentValue}{{props}} />;
}
`;

function Wrapper(props: any) {
  return <Diff previousValue={previousCode} currentValue={currentCode} {...props} />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      prop: 'mode',
      type: 'segmented',
      data: ['unified', 'split'],
      initialValue: 'unified',
      libraryValue: 'unified',
    },
    {
      prop: 'diffMethod',
      type: 'segmented',
      data: ['chars', 'words', 'lines'],
      initialValue: 'words',
      libraryValue: 'words',
    },
    {
      prop: 'withLineNumbers',
      type: 'boolean',
      initialValue: true,
      libraryValue: true,
    },
  ],
};
