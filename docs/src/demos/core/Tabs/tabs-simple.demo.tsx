import React from 'react';
import { Tabs, Tab } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Tabs, Tab } from '@mantine/core';

function TabsDemo() {
  return (
    <Tabs>
      <Tab label="First">First tab content</Tab>
      <Tab label="Second">Second tab content</Tab>
      <Tab label="Third">Third tab content</Tab>
    </Tabs>
  );
}`;

export function TabsSimpleDemo() {
  return (
    <CodeDemo code={code} language="tsx" title="General usage" demoLink="/core/Tabs.demos.tsx">
      <Tabs>
        <Tab label="First">First tab content</Tab>
        <Tab label="Second">Second tab content</Tab>
        <Tab label="Third">Third tab content</Tab>
      </Tabs>
    </CodeDemo>
  );
}
