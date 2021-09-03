import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../Text/Text';
import { Timeline } from './Timeline';

storiesOf('@mantine/core/Timeline', module).add('General usage', () => (
  <div style={{ padding: 40, maxWidth: 400 }}>
    <Timeline active={2}>
      <Timeline.Item title="Item title">
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aliquid obcaecati vel
          harum, suscipit iste non rem debitis officia aperiam, unde natus accusamus atque, iure
          adipisci! Doloribus ducimus suscipit laborum?
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Item title">
        <Text>Timeline item 2</Text>
      </Timeline.Item>
      <Timeline.Item title="Item title">
        <Text>Timeline item 3</Text>
      </Timeline.Item>
      <Timeline.Item title="Item title">
        <Text>Timeline item 4</Text>
      </Timeline.Item>
      <Timeline.Item title="Item title">
        <Text>Timeline item 5</Text>
      </Timeline.Item>
    </Timeline>
  </div>
));
