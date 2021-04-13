import React from 'react';
import { Tabs, Tab } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Tabs, Tab } from '@mantine/core';

function TabsDemo() {
  return (
    <Tabs color="teal">
      <Tab label="Teal tab">Teal tab content</Tab>
      <Tab label="Still teal">Teal tab #2</Tab>
      <Tab label="Pink tab" color="pink">
        Pink tab content
      </Tab>
    </Tabs>
  );
}`;

export function TabsColorDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Tabs color="teal">
        <Tab label="Teal tab">Teal tab content</Tab>
        <Tab label="Still teal">Teal tab #2</Tab>
        <Tab label="Pink tab" color="pink">
          Pink tab content
        </Tab>
      </Tabs>
    </CodeDemo>
  );
}
