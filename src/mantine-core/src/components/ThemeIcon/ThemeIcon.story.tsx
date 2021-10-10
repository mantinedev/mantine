import React from 'react';
import { storiesOf } from '@storybook/react';
import { RocketIcon } from '@modulz/radix-icons';
import { DEFAULT_THEME } from '@mantine/styles';
import { Group } from '../Group/Group';
import { ThemeIcon } from './ThemeIcon';
import { DarkStory } from '../../../demos';

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <ThemeIcon key={color} color={color} style={{ marginTop: 20 }} size="lg" {...props}>
      <RocketIcon style={{ width: 20, height: 20 }} />
    </ThemeIcon>
  ));

storiesOf('@mantine/core/ThemeIcon', module)
  .add('Filled variant', () => <Group style={{ padding: 20 }}>{getThemes()}</Group>)
  .add('Light variant', () => (
    <Group style={{ padding: 20 }}>{getThemes({ variant: 'light' })}</Group>
  ))
  .add('Gradient', () => (
    <Group>
      <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        <RocketIcon style={{ width: 20, height: 20 }} />
      </ThemeIcon>
      <ThemeIcon variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 90 }}>
        <RocketIcon style={{ width: 20, height: 20 }} />
      </ThemeIcon>
      <ThemeIcon variant="gradient" gradient={{ from: 'teal', to: 'cyan', deg: 180 }}>
        <RocketIcon style={{ width: 20, height: 20 }} />
      </ThemeIcon>
    </Group>
  ))
  .add('Dark theme', () => (
    <DarkStory>
      <div style={{ padding: 40 }}>
        <Group style={{ padding: 20 }}>{getThemes()}</Group>
        <Group style={{ padding: 20 }}>{getThemes({ variant: 'light' })}</Group>
      </div>
    </DarkStory>
  ));
