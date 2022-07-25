import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/styles';
import { Divider } from './Divider';

const getColors = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Divider key={color} color={color} style={{ marginTop: 15 }} {...props} />
  ));

storiesOf('Divider', module)
  .add('Colors', () => <div style={{ padding: 20 }}>{getColors()}</div>)
  .add('Vertical', () => (
    <div style={{ padding: 20, height: 200 }}>
      <Divider orientation="vertical" />
    </div>
  ))
  .add('Label props', () => (
    <Divider
      labelPosition="center"
      label="test label"
      color="#000"
      size="xs"
      labelProps={{ color: '#000', size: 'xl' }}
    />
  ));
