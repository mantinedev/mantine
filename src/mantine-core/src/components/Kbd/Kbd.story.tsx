import React from 'react';
import { storiesOf } from '@storybook/react';
import { Kbd } from './Kbd';
import { DarkStory } from '../../../demos';

storiesOf('@mantine/core/Kbd', module)
  .add('General usage', () => (
    <div style={{ padding: 50 }}>
      <Kbd>shift</Kbd> + <Kbd>H</Kbd>
    </div>
  ))
  .add('Dark theme', () => (
    <DarkStory>
      <div style={{ padding: 50 }}>
        <Kbd>shift</Kbd> + <Kbd>H</Kbd>
      </div>
    </DarkStory>
  ));
