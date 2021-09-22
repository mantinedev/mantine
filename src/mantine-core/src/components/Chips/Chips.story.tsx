import React from 'react';
import { storiesOf } from '@storybook/react';
import { Group } from '../Group/Group';
import { Chip } from './Chip/Chip';
import { Chips, ChipsProps } from './Chips';
import { DarkStory } from '../../../demos';

function BaseDemo(props?: Partial<ChipsProps>) {
  return (
    <div style={{ padding: 40 }}>
      <Chips {...props}>
        <Chip value="1">First</Chip>
        <Chip value="2" disabled>
          Second
        </Chip>
        <Chip value="3">Third</Chip>
      </Chips>
      <Chips variant="filled">
        <Chip value="1">First</Chip>
        <Chip value="2" disabled>
          Second
        </Chip>
        <Chip value="3">Third</Chip>
      </Chips>
    </div>
  );
}

storiesOf('@mantine/core/Chips', module)
  .add('Chips', () => <BaseDemo />)
  .add('Chip sizes', () => (
    <Group style={{ padding: 40 }} direction="column">
      <Chip value="1" size="xs">
        xs chip
      </Chip>
      <Chip value="1" size="sm">
        sm chip
      </Chip>
      <Chip value="1" size="md">
        md chip
      </Chip>
      <Chip value="1" size="lg">
        lg chip
      </Chip>
      <Chip value="1" size="xl">
        xl chip
      </Chip>
    </Group>
  ))
  .add('Dark theme', () => (
    <DarkStory>
      <BaseDemo />
    </DarkStory>
  ));
