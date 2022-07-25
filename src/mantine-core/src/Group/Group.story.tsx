import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button/Button';
import { Group } from './Group';

const positions = (['left', 'center', 'apart', 'right'] as const).map((position) => (
  <div style={{ padding: 15, backgroundColor: 'rgba(0, 0, 0, .1)', margin: 20 }} key={position}>
    <Group position={position}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Group>
  </div>
));

const spacings = ([0, 'xs', 'sm', 'md', 'lg', 'xl', 50] as const).map((spacing) => (
  <div style={{ padding: 15, backgroundColor: 'rgba(0, 0, 0, .1)', margin: 20 }} key={spacing}>
    <Group spacing={spacing}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Group>
  </div>
));

storiesOf('Group', module)
  .add('Positions', () => <>{positions}</>)
  .add('Spacing', () => <>{spacings}</>)
  .add('No wrap', () => (
    <div style={{ padding: 15, maxWidth: 200, backgroundColor: 'rgba(0, 0, 0, .1)' }}>
      <Group noWrap>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Group>
    </div>
  ))
  .add('Grow', () => (
    <div style={{ padding: 15, backgroundColor: 'rgba(0, 0, 0, .1)' }}>
      <Group grow>
        <Button>
          Button with so much content that it will try to take space from other elements
        </Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Group>
    </div>
  ))
  .add('Invalid children', () => (
    <Group>
      String
      {true}
      {20}
      <>Fragment</>
    </Group>
  ));
