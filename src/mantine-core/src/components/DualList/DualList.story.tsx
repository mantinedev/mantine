import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../Text/Text';
import { DualList } from './DualList';
import { DarkStory } from '../../../demos';
import { DualListProps } from '.';

const Wrapper = (props: Partial<DualListProps>) => {
  const available = ['123', 'abc', '321'];
  const selected = ['def'];

  return <DualList {...props} available={available} selected={selected} />;
};

// TODO
const sizes = (['xs', 'sm', 'md', 'lg', 'xl', 'full', 800] as const).map((size) => (
  <div key={size}>
    <Text>{size}</Text>
    <Wrapper />
  </div>
));

storiesOf('@mantine/core/DualList', module)
  .add('General usage', () => <Wrapper />)
  .add('Sizes', () => <div style={{ padding: 20 }}>{sizes}</div>)
  .add('Dark theme', () => (
    <DarkStory>
      <Wrapper />
    </DarkStory>
  ));
