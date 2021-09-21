import React from 'react';
import { storiesOf } from '@storybook/react';
import { BaseDemo } from './demos/_base';
import { DarkStory } from '../../../demos';

storiesOf('@mantine/core/Accordion', module)
  .add('General usage', () => (
    <div style={{ padding: 40, maxWidth: 540 }}>
      <BaseDemo />
    </div>
  ))
  .add('Multiple selected items', () => (
    <div style={{ padding: 40, maxWidth: 540 }}>
      <BaseDemo multiple />
    </div>
  ))
  .add('Dark theme', () => (
    <DarkStory>
      <div style={{ padding: 40, maxWidth: 540 }}>
        <BaseDemo />
      </div>
    </DarkStory>
  ));
