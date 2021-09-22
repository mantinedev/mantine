import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button/Button';
import { Group } from '../Group/Group';
import { Text } from '../Text/Text';
import { Drawer } from './Drawer';
import { DarkStory } from '../../../demos';

function Wrapper(
  props: Omit<React.ComponentPropsWithoutRef<typeof Drawer>, 'opened' | 'onClose' | 'position'>
) {
  const [opened, setOpened] = useState(false);
  const [position, setPosition] = useState<'top' | 'left' | 'right' | 'bottom'>('top');
  const open = (p: typeof position) => {
    setPosition(p);
    setOpened(true);
  };

  return (
    <div style={{ padding: 40 }}>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position={position}
        title="hello"
        {...props}
      />
      <Group>
        <Button onClick={() => open('top')}>top</Button>
        <Button onClick={() => open('bottom')}>bottom</Button>
        <Button onClick={() => open('left')}>left</Button>
        <Button onClick={() => open('right')}>right</Button>
      </Group>
    </div>
  );
}

const sizes = (['xs', 'sm', 'md', 'lg', 'xl', 'full', 800] as const).map((size) => (
  <div key={size}>
    <Text>{size}</Text>
    <Wrapper size={size} padding="md" noFocusTrap>
      {size}
    </Wrapper>
  </div>
));

storiesOf('@mantine/core/Drawer', module)
  .add('General usage', () => <Wrapper>Drawer</Wrapper>)
  .add('Sizes', () => <div style={{ padding: 20 }}>{sizes}</div>)
  .add('Dark theme', () => (
    <DarkStory>
      <Wrapper>Dark theme</Wrapper>
    </DarkStory>
  ));
