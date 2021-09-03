import React from 'react';
import { Timeline } from '../Timeline';

const code = `
`;

function Demo() {
  return (
    <Timeline>
      <Timeline.Item>1</Timeline.Item>
      <Timeline.Item>2</Timeline.Item>
      <Timeline.Item>3</Timeline.Item>
    </Timeline>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
