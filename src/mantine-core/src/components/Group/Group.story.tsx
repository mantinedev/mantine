import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import { Title } from '../Title/Title';
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
  .add('With title', () => (
    <Group>
      <Title>1</Title>
      <Title>2</Title>
    </Group>
  ))
  .add('Within container', () => (
    <div style={{ maxWidth: 400 }}>
      <Container>
        <Group>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </Group>
        <p>Other content in container</p>
      </Container>

      <Group>
        <span>out of container</span>
      </Group>
    </div>
  ))
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
      <Group grow sx={{ backgroundColor: 'red' }}>
        <Button>
          Button with so much content that it will try to take space from other elements
        </Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Group>
    </div>
  ));
