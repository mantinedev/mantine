import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button/Button';
import { ElementsGroup } from './ElementsGroup';

storiesOf('@mantine/core', module).add('ElementsGroup', () => (
  <>
    <ElementsGroup position="left">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ElementsGroup>

    <ElementsGroup position="center" style={{ marginTop: 20 }}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ElementsGroup>

    <ElementsGroup position="apart" style={{ marginTop: 20 }}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ElementsGroup>

    <ElementsGroup grow spacing="xl" style={{ marginTop: 20 }}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ElementsGroup>

    <ElementsGroup position="right" style={{ marginTop: 20 }}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ElementsGroup>
  </>
));
