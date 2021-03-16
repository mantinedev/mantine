import React from 'react';
import { Tabs, Tab } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Tabs, Tab } from '@mantine/core';

function TabsDemo() {
  return (
    <Tabs>
      <Tab label="First" title="Reveal hidden truth on long mouse over">
        First tab content
      </Tab>
      <Tab label="Not allowed" disabled>
        https://youtu.be/dQw4w9WgXcQ
      </Tab>
      <Tab label="Delete this?" color="red" style={{ fontWeight: 500 }}>
        Yes, delete this
      </Tab>
    </Tabs>
  );
}`;

export function TabsTabPropsDemo() {
  return (
    <CodeDemo
      code={code}
      language="tsx"
      title="Tab props example"
      demoLink="/core/Tabs/tabs-tab-props.demo.tsx"
    >
      <Tabs>
        <Tab label="First" title="Reveal hidden truth on long mouse over">
          First tab content
        </Tab>
        <Tab label="Not allowed" disabled>
          https://youtu.be/dQw4w9WgXcQ
        </Tab>
        <Tab label="Delete this?" color="red" style={{ fontWeight: 500 }}>
          Yes, delete this
        </Tab>
      </Tabs>
    </CodeDemo>
  );
}
