import React from 'react';
import { Timeline } from '../Timeline';

const code = `
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <Timeline active={1}>
        <Timeline.Item bullet="$">1</Timeline.Item>
        <Timeline.Item>2</Timeline.Item>
        <Timeline.Item>3</Timeline.Item>
        <Timeline.Item>4</Timeline.Item>
        <Timeline.Item bullet="$">5</Timeline.Item>
      </Timeline>
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
