import { Button, Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, Button } from '@mantine/core';

function Demo() {
  return (
    <Group{{props}}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Group>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Group {...props}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      type: 'select',
      prop: 'justify',
      data: ['flex-start', 'center', 'space-between', 'flex-end'],
      initialValue: 'flex-start',
      libraryValue: 'flex-start',
    },
    { type: 'size', prop: 'gap', initialValue: 'md', libraryValue: 'md' },
    { type: 'boolean', prop: 'grow', initialValue: false, libraryValue: false },
  ],
};
