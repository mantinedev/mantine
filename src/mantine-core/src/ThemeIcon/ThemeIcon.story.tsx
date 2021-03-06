import React from 'react';
import { storiesOf } from '@storybook/react';
import { RocketIcon } from '@modulz/radix-icons';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { ThemeIcon } from './ThemeIcon';

storiesOf('@mantine/core', module).add('ThemeIcon', () => (
  <div style={{ padding: 20 }}>
    <ElementsGroup>
      <ThemeIcon size="sm">
        <RocketIcon style={{ width: 13, height: 13 }} />
      </ThemeIcon>

      <ThemeIcon color="indigo" variant="light">
        <RocketIcon />
      </ThemeIcon>

      <ThemeIcon color="indigo" variant="light" radius="xl">
        <RocketIcon />
      </ThemeIcon>

      <ThemeIcon color="violet" variant="gradient" size={100} radius={100}>
        <RocketIcon style={{ width: 60, height: 60 }} />
      </ThemeIcon>
    </ElementsGroup>
  </div>
));
