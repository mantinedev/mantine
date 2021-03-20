import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button/Button';
import { ElementsGroup } from './ElementsGroup';

const positions = (['left', 'center', 'apart', 'right'] as const).map((position) => (
  <div style={{ padding: 15, backgroundColor: '#f3f3f3', margin: 20 }} key={position}>
    <ElementsGroup position={position}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ElementsGroup>
  </div>
));

const spacings = ([0, 'xs', 'sm', 'md', 'lg', 'xl', 50] as const).map((spacing) => (
  <div style={{ padding: 15, backgroundColor: '#f3f3f3', margin: 20 }} key={spacing}>
    <ElementsGroup spacing={spacing}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ElementsGroup>
  </div>
));

storiesOf('@mantine/core/ElementsGroup', module)
  .add('Positions', () => <>{positions}</>)
  .add('Spacing', () => <>{spacings}</>)
  .add('No wrap', () => (
    <div style={{ padding: 15, maxWidth: 200, backgroundColor: '#f3f3f3' }}>
      <ElementsGroup noWrap>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ElementsGroup>
    </div>
  ))
  .add('Grow', () => (
    <div style={{ padding: 15, backgroundColor: '#f3f3f3' }}>
      <ElementsGroup grow>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
        <Button>Button 4</Button>
      </ElementsGroup>
    </div>
  ));
