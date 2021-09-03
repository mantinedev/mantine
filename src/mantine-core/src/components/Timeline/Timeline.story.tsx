import React from 'react';
import { storiesOf } from '@storybook/react';
import { Timeline } from './Timeline';

storiesOf('@mantine/core/Timeline', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Timeline>
      <Timeline.Item>1</Timeline.Item>
      <Timeline.Item>2</Timeline.Item>
      <Timeline.Item>3</Timeline.Item>
    </Timeline>
  </div>
));
