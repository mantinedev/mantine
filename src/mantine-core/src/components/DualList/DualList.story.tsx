import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../Text/Text';
import { DualList } from './DualList';
import { DarkStory } from '../../../demos';
import { DualListProps } from '.';

const Wrapper = (props: Partial<DualListProps>) => {
  const available = Array.from({ length: 9 }, (_, i) => `Item ${i}`);
  const selected = Array.from({ length: 9 }, (_, i) => `Item 0${i}`);

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
  .add('Empty lists', () => (
    <div>
      <Wrapper available={[]} selected={[]} />

      <Wrapper
        available={['123', '456', 'abc']}
        selected={[]}
        rightEmptyPlaceholder="Custom empty text..."
      />

      <Wrapper available={[]} selected={['123', '456', 'abc']} />
    </div>
  ))
  .add('Large lists', () => (
    <div>
      <Wrapper
        available={Array.from({ length: 100 }, (_, i) => `${i}`)}
        selected={['a'.repeat(100), 'b'.repeat(100), 'c'.repeat(100)]}
      />
    </div>
  ))
  .add('Dark theme', () => (
    <DarkStory>
      <Wrapper />
    </DarkStory>
  ));
