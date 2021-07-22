import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button/Button';
import { Group } from './Group';

const positions = (['left', 'center', 'apart', 'right'] as const).map((position) => (
  <div style={{ padding: 15, backgroundColor: '#f3f3f3', margin: 20 }} key={position}>
    <Group position={position}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Group>
  </div>
));

const spacings = ([0, 'xs', 'sm', 'md', 'lg', 'xl', 50] as const).map((spacing) => (
  <div style={{ padding: 15, backgroundColor: '#f3f3f3', margin: 20 }} key={spacing}>
    <Group spacing={spacing}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <button type="button">Hello</button>
    </Group>
  </div>
));

storiesOf('@mantine/core/Group', module)
  .add('Positions', () => <>{positions}</>)
  .add('Spacing', () => <>{spacings}</>)
  .add('No wrap', () => (
    <div style={{ padding: 15, maxWidth: 200, backgroundColor: '#f3f3f3' }}>
      <Group noWrap>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Group>
    </div>
  ))
  .add('Grow', () => (
    <div style={{ padding: 15, backgroundColor: '#f3f3f3' }}>
      <Group grow>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <button type="button">Hello</button>
      </Group>
    </div>
  ));
