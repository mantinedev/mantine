import { Button, Popover, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} opened position="bottom-start" withArrow{{props}}>
      <Popover.Target>
        <Button>Target element</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Arrow position can be changed for *-start and *-end positions</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Popover width={200} opened position="bottom-start" withArrow {...props}>
      <Popover.Target>
        <Button>Target element</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Arrow position can be changed for *-start and *-end positions</Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export const arrow: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: 'segmented',
      prop: 'arrowPosition',
      initialValue: 'center',
      libraryValue: 'center',
      data: ['center', 'side'],
    },
    {
      type: 'number',
      prop: 'arrowOffset',
      initialValue: 10,
      libraryValue: 10,
      min: 5,
      max: 50,
    },

    {
      type: 'number',
      prop: 'arrowSize',
      initialValue: 7,
      libraryValue: 7,
      min: 5,
      max: 12,
    },

    {
      type: 'number',
      prop: 'arrowRadius',
      initialValue: 0,
      libraryValue: 0,
      min: 0,
      max: 10,
    },
  ],
};
