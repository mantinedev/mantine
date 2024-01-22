import React from 'react';
import { IconMessageCircle, IconPhoto, IconSettings } from '@tabler/icons-react';
import { rem, Tabs, TabsProps, useDirection } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: TabsProps) {
  const { dir } = useDirection();
  const panelProps =
    props.orientation === 'vertical' ? { [dir === 'rtl' ? 'pr' : 'pl']: 'xs' } : { pt: 'xs' };
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs defaultValue="gallery" {...props}>
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
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

const code = `
import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

function Demo() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs{{props}} defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}`;

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: '100%',
  controls: [
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: 'blue' },
    {
      prop: 'variant',
      type: 'segmented',
      initialValue: 'default',
      libraryValue: 'default',
      data: [
        { value: 'default', label: 'Default' },
        { value: 'outline', label: 'Outline' },
        { value: 'pills', label: 'Pills' },
      ],
    },
    { prop: 'radius', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
    {
      prop: 'orientation',
      type: 'segmented',
      initialValue: 'horizontal',
      libraryValue: 'horizontal',
      data: [
        { value: 'horizontal', label: 'Horizontal' },
        { value: 'vertical', label: 'Vertical' },
      ],
    },
  ],
};
