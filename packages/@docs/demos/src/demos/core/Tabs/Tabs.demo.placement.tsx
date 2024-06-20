import { Tabs, TabsProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

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

const code = `
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="gallery" orientation="vertical"{{props}}>
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

export const placement: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      prop: 'placement',
      type: 'segmented',
      initialValue: 'left',
      libraryValue: 'left',
      data: ['left', 'right'],
    },
  ],
};
