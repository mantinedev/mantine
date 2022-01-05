import React, { useState } from 'react';
import { Group } from '../../Group';
import { Code } from '../../Code';
import { Text } from '../../Text';
import { ScrollArea } from '../ScrollArea';
import { Content } from './_content';

const code = `
import { useState } from 'react';
import { Text, ScrollArea, Code } from '@mantine/core';

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <>
      <ScrollArea
        style={{ width: 300, height: 200 }}
        onScrollPositionChange={onScrollPositionChange}
      >
        <div style={{ width: 600 }}>
          <Content />
        </div>
      </ScrollArea>

      <Text>
        Scroll position: <Code>{\`{ x: \${scrollPosition.x}, y: \${scrollPosition.y} }\`}</Code>
      </Text>
    </>
  );
}
`;

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <Group position="center" direction="column">
      <ScrollArea
        style={{ width: 300, height: 200 }}
        onScrollPositionChange={onScrollPositionChange}
      >
        <div style={{ width: 600 }}>
          <Content />
        </div>
      </ScrollArea>
      <Text>
        Scroll position: <Code>{`{ x: ${scrollPosition.x}, y: ${scrollPosition.y} }`}</Code>
      </Text>
    </Group>
  );
}

export const scrollPosition: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
