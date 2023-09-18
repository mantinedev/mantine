import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Popover, Text, Button } from '@mantine/core';

const code = `
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200}{{props}}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Disabled popover dropdown is always hidden</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Popover width={200} {...props}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Disabled popover dropdown is always hidden</Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export const disabled: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [{ type: 'boolean', prop: 'disabled', initialValue: false, libraryValue: false }],
};
