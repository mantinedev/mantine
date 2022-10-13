import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Tabs, TabsProps } from '@mantine/core';

function Wrapper(props: TabsProps) {
  const panelProps = props.placement === 'left' ? { pl: 'xs' } : { pr: 'xs' };
  return (
    <Tabs defaultValue="gallery" orientation="vertical" {...props}>
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" {...panelProps}>
        Gallery tab content
      </Tabs.Panel>
      <Tabs.Panel value="messages" {...panelProps}>
        Messages tab content
      </Tabs.Panel>
      <Tabs.Panel value="settings" {...panelProps}>
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}

const codeTemplate = (props: string) => `
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="gallery" orientation="vertical"${props}>
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  );
}
`;

export const placementConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'placement',
      type: 'segmented',
      initialValue: 'left',
      defaultValue: 'left',
      data: [
        { label: 'left', value: 'left' },
        { label: 'right', value: 'right' },
      ],
    },
  ],
};
