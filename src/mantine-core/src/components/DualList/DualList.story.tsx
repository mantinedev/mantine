import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../Text/Text';
import { DualList } from './DualList';
import { DarkStory } from '../../../demos';
import { DualListProps } from '.';

const Wrapper = (props: Partial<DualListProps>) => {
  const available = ['123', 'abc', '321', 'abc', '321', 'abc', '321'];
  const selected = ['def', 'ghi', 'jkl'];

  return <DualList available={available} selected={selected} {...props} />;
};

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
  <div key={size}>
    <Text>{size}</Text>
    <Wrapper size={size} />
  </div>
));

storiesOf('@mantine/core/DualList', module)
  .add('General usage', () => <Wrapper />)
  .add('Sizes', () => <div style={{ padding: 10 }}>{sizes}</div>)
  .add('Dark theme', () => (
    <DarkStory>
      <Wrapper />
    </DarkStory>
  ));
