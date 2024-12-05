import { IconMessageCircle, IconPhoto, IconSettings } from '@tabler/icons-react';
import { Tabs, TabsProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { TabsStylesApi } from '@docs/styles-api';

const code = `
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="gallery"{{props}}>
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle size={12} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" rightSection={<IconSettings size={12} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}
`;

function Demo(props: TabsProps) {
  return (
    <Tabs defaultValue="gallery" {...props}>
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle size={12} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" rightSection={<IconSettings size={12} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: TabsStylesApi,
  component: Demo,
  centered: true,
  maxWidth: '100%',
  code,
};
