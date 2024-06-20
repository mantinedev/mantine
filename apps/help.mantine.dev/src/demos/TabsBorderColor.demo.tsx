import { Tabs } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './TabsBorderColor.demo.module.css';

const cssCode = `.root {
  @mixin light {
    --border-color: var(--mantine-color-gray-1);
  }

  @mixin dark {
    --border-color: var(--mantine-color-dark-5);
  }
}

.list::before {
  border-color: var(--border-color);
}

.tab:not([data-active]) {
  @mixin hover {
    border-color: var(--border-color);
  }
}`;

const code = `
import { Tabs } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Tabs defaultValue="gallery" classNames={classes}>
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`;

function Demo() {
  return (
    <Tabs defaultValue="gallery" classNames={classes}>
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

export const TabsBorderColor: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
    { fileName: 'Demo.tsx', code, language: 'tsx' },
  ],
};
