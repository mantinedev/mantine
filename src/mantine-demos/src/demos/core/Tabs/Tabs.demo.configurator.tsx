import React from 'react';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Tabs, TabsProps } from '@mantine/core';

function Wrapper(props: TabsProps) {
  const panelProps = props.orientation === 'vertical' ? { pl: 'xs' } : { pt: 'xs' };
  return (
    <Tabs defaultValue="gallery" {...props}>
      <Tabs.List>
        <Tabs.Tab value="gallery" icon={<IconPhoto size="0.8rem" />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>
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
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

function Demo() {
  return (
    <Tabs${props} defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" icon={<IconPhoto size="0.8rem" />}>Gallery</Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}>Messages</Tabs.Tab>
        <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>Settings</Tabs.Tab>
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

export const configurator: MantineDemo = {
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
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
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
