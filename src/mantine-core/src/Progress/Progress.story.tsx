import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MantineProvider } from '@mantine/theme';
import { Button } from '../Button/Button';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { Progress } from './Progress';

function SetDemo() {
  const [value, setValue] = useState(50);
  const setValueToRandom = () => setValue(Math.round(Math.random() * 99));

  return (
    <div style={{ maxWidth: 500, padding: 50 }}>
      <Progress value={value} />
      <ElementsGroup style={{ marginTop: 20 }} position="center">
        <Button onClick={setValueToRandom}>Set random value</Button>
      </ElementsGroup>
    </div>
  );
}

const sizes = ([2, 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
  <Progress size={size} value={50} key={size} style={{ marginTop: 20 }} />
));

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Progress key={color} color={color} value={50} style={{ marginTop: 20 }} {...props} />
  ));

storiesOf('@mantine/core/Progress', module)
  .add('General usage', () => (
    <div style={{ maxWidth: 500, padding: 50 }}>
      <Progress value={0} />
      <Progress value={20} style={{ marginTop: 20 }} />
      <Progress value={40} style={{ marginTop: 20 }} />
      <Progress value={60} style={{ marginTop: 20 }} />
      <Progress value={80} style={{ marginTop: 20 }} />
      <Progress value={80} style={{ marginTop: 20 }} striped />
      <Progress value={100} style={{ marginTop: 20 }} />
    </div>
  ))
  .add('Sizes', () => <div style={{ maxWidth: 500, padding: 50 }}>{sizes}</div>)
  .add('Themes', () => <div style={{ maxWidth: 500, padding: 50 }}>{getThemes()}</div>)
  .add('Striped', () => (
    <div style={{ maxWidth: 500, padding: 50 }}>{getThemes({ striped: true })}</div>
  ))
  .add('Value changes', () => <SetDemo />)
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div
        style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}
      >
        <Progress value={0} />
        <Progress value={20} style={{ marginTop: 20 }} />
        <Progress value={40} style={{ marginTop: 20 }} />
        <Progress value={60} style={{ marginTop: 20 }} />
        <Progress value={80} style={{ marginTop: 20 }} />
        <Progress value={80} style={{ marginTop: 20 }} striped />
        <Progress value={100} style={{ marginTop: 20 }} />
      </div>
    </MantineProvider>
  ));
