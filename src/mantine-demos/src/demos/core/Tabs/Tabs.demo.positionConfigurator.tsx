import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Tabs, TabsProps } from '@mantine/core';

function Wrapper(props: TabsProps) {
  return (
    <Tabs defaultValue="first">
      <Tabs.List {...props}>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

const codeTemplate = (props: string) => `
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List${props}>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`;

export const positionConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'grow', type: 'boolean', defaultValue: false },
    {
      name: 'position',
      type: 'select',
      initialValue: 'left',
      defaultValue: 'left',
      data: [
        { label: 'left', value: 'left' },
        { label: 'right', value: 'right' },
        { label: 'center', value: 'center' },
        { label: 'apart', value: 'apart' },
      ],
    },
  ],
};
