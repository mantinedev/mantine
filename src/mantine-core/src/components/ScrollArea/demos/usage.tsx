import React from 'react';
import { ScrollArea } from '../ScrollArea';
import { Group } from '../../Group';
import { Content } from './_content';

const code = `
<ScrollArea style={{ width: 400, height: 250 }}>
  {/* content */}
</ScrollArea>
`;

function Demo() {
  return (
    <Group position="center">
      <ScrollArea style={{ width: 400, height: 250 }}>
        <Content />
      </ScrollArea>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
