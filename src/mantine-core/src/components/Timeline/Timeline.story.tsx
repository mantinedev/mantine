import React from 'react';
import { storiesOf } from '@storybook/react';
import { CheckIcon } from '@modulz/radix-icons';
import { Text } from '../Text/Text';
import { Avatar } from '../Avatar/Avatar';
import { Timeline } from './Timeline';
import { DarkStory } from '../../../demos';

function BaseStory() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Timeline active={3} color="teal" align="left" lineWidth={2}>
        <Timeline.Item title="Item title" bullet={<CheckIcon style={{ width: 12, height: 12 }} />}>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aliquid obcaecati vel
            harum, suscipit iste non rem debitis officia aperiam, unde natus accusamus atque, iure
            adipisci! Doloribus ducimus suscipit laborum?
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="Item title"
          bullet={
            <Avatar
              size={18}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            >
              MJ
            </Avatar>
          }
        >
          <Text>Timeline item 2</Text>
        </Timeline.Item>
        <Timeline.Item title="Item title" lineVariant="dashed">
          <Text>Timeline item 3</Text>
        </Timeline.Item>
        <Timeline.Item
          title="Item title"
          lineVariant="dotted"
          bullet={<CheckIcon style={{ width: 12, height: 12 }} />}
        >
          <Text>Timeline item 4</Text>
        </Timeline.Item>
        <Timeline.Item title="Item title">
          <Text>Timeline item 5</Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

storiesOf('@mantine/core/Timeline', module)
  .add('General usage', () => <BaseStory />)
  .add('Dark theme', () => (
    <DarkStory>
      <BaseStory />
    </DarkStory>
  ));
