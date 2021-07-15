import React from 'react';
import { ImageIcon, ChatBubbleIcon, MixerVerticalIcon } from '@modulz/radix-icons';
import { Tabs, Tab, TabsProps } from '../Tabs';

function Wrapper(props: TabsProps) {
  return (
    <Tabs {...props}>
      <Tab label="Gallery" icon={<ImageIcon />}>
        Gallery tab content
      </Tab>
      <Tab label="Messages" icon={<ChatBubbleIcon />}>
        Messages tab content
      </Tab>
      <Tab label="Settings" icon={<MixerVerticalIcon />}>
        Settings tab content
      </Tab>
    </Tabs>
  );
}

const codeTemplate = (props: string) => `<Tabs${props}>
  <Tab label="Gallery" icon={<ImageIcon />}>Gallery tab content</Tab>
  <Tab label="Messages" icon={<ChatBubbleIcon />}>Messages tab content</Tab>
  <Tab label="Settings" icon={<MixerVerticalIcon />}>Settings tab content</Tab>
</Tabs>`;

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
