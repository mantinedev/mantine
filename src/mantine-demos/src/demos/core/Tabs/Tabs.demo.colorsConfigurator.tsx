import React from 'react';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';
import { Tabs, TabsProps } from '@mantine/core';

function Wrapper(props: TabsProps) {
  const panelProps = props.orientation === 'vertical' ? { pl: 'xs' } : { pt: 'xs' };
  return (
    <Tabs defaultValue="gallery" {...props}>
      <Tabs.List>
        <Tabs.Tab value="gallery" icon={<Photo size={14} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" icon={<MessageCircle size={14} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" icon={<Settings size={14} />}>
          Settings
        </Tabs.Tab>
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

const codeTemplate = (props: string) => {
  const panelProps = props.includes('vertical') ? 'pl="xs"' : 'pt="xs"';
  return `
import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';

function Demo() {
  return (
    <Tabs${props} defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" icon={<Photo size={14} />}>Gallery</Tabs.Tab>
        <Tabs.Tab value="messages" icon={<MessageCircle size={14} />}>Messages</Tabs.Tab>
        <Tabs.Tab value="settings" icon={<Settings size={14} />}>Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" ${panelProps}>
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages" ${panelProps}>
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" ${panelProps}>
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}
  `;
};

export const colorsConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    {
      name: 'variant',
      type: 'segmented',
      initialValue: 'default',
      defaultValue: 'default',
      data: [
        { value: 'default', label: 'Default' },
        { value: 'outline', label: 'Outline' },
        { value: 'pills', label: 'Pills' },
      ],
    },
    {
      name: 'orientation',
      type: 'segmented',
      initialValue: 'horizontal',
      defaultValue: 'horizontal',
      data: [
        { value: 'horizontal', label: 'Horizontal' },
        { value: 'vertical', label: 'Vertical' },
      ],
    },
  ],
};
