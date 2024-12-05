import { IconMessageCircle, IconPhoto, IconSettings } from '@tabler/icons-react';
import { Tabs } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './Tabs.demo.customize.module.css';

const code = `
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Tabs variant="unstyled" defaultValue="settings" classNames={classes}>
      <Tabs.List grow>
        <Tabs.Tab
          value="settings"
          leftSection={<IconSettings size={16} />}
        >
          Settings
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={<IconMessageCircle size={16} />}
        >
          Messages
        </Tabs.Tab>
        <Tabs.Tab
          value="gallery"
          leftSection={<IconPhoto size={16} />}
        >
          Gallery
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`;
const cssCode = `
.tab {
  position: relative;
  border: 1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
  background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-6));

  &:first-of-type {
    border-radius: 4px 0 0 4px;

    @mixin rtl {
      border-radius: 0 4px 4px 0;
    }
  }

  &:last-of-type {
    border-radius: 0 4px 4px 0;

    @mixin rtl {
      border-radius: 4px 0 0 4px;
    }
  }

  & + & {
    border-left-width: 0;

    @mixin rtl {
      border-right-width: 0;
      border-left-width: 1px;
    }
  }

  @mixin hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-5));
  }

  &[data-active] {
    z-index: 1;
    background-color: var(--mantine-color-blue-filled);
    border-color: var(--mantine-color-blue-filled);
    color: var(--mantine-color-white);

    @mixin hover {
      background-color: var(--mantine-color-blue-filled-hover);
    }
  }
}
`;

function Demo() {
  return (
    <Tabs variant="unstyled" defaultValue="settings" classNames={classes}>
      <Tabs.List grow>
        <Tabs.Tab value="settings" leftSection={<IconSettings size={16} />}>
          Settings
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle size={16} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={16} />}>
          Gallery
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

export const customize: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
    { fileName: 'Demo.tsx', code, language: 'tsx' },
  ],
};
