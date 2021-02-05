import React from 'react';
import { storiesOf } from '@storybook/react';
import MantineProvider from '../../MantineProvider/MantineProvider';
import Button from '../Button/Button';
import ElementsGroup from './ElementsGroup';

storiesOf('@mantine/core', module).add('ElementsGroup', () => (
  <MantineProvider>
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

    <ElementsGroup grow spacing={20}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ElementsGroup>

    <ElementsGroup position="right" style={{ marginTop: 20 }}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ElementsGroup>
  </MantineProvider>
));
