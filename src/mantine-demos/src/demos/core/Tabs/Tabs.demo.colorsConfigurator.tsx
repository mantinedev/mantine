import React from 'react';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';
import { Tabs, TabsProps } from '@mantine/core';

function Wrapper(props: TabsProps) {
  return (
    <Tabs {...props}>
      <Tabs.Tab label="Gallery" icon={<Photo size={14} />}>
        Gallery tab content
      </Tabs.Tab>
      <Tabs.Tab label="Messages" icon={<MessageCircle size={14} />}>
        Messages tab content
      </Tabs.Tab>
      <Tabs.Tab label="Settings" icon={<Settings size={14} />}>
        Settings tab content
      </Tabs.Tab>
    </Tabs>
  );
}

const codeTemplate = (props: string) => `
import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';

function Demo() {
  return (
    <Tabs${props}>
      <Tabs.Tab label="Gallery" icon={<Photo size={14} />}>Gallery tab content</Tabs.Tab>
      <Tabs.Tab label="Messages" icon={<MessageCircle size={14} />}>Messages tab content</Tabs.Tab>
      <Tabs.Tab label="Settings" icon={<Settings size={14} />}>Settings tab content</Tabs.Tab>
    </Tabs>
  );
}
`;

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
    { name: 'tabPadding', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
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
