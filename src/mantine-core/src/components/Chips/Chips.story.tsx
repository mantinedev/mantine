import React from 'react';
import { storiesOf } from '@storybook/react';
import { Chip } from './Chip/Chip';

storiesOf('@mantine/core/Chips', module)
  .add('Chip', () => (
    <div style={{ padding: 40 }}>
      <Chip type="radio">Radio chip</Chip>
      <Chip variant="filled">Checkbox chip</Chip>
    </div>
  ))
  .add('Chip sizes', () => (
    <div style={{ padding: 40 }}>
      <div>
        <Chip size="xs">xs chip</Chip>
      </div>
      <div style={{ marginTop: 15 }}>
        <Chip size="sm">sm chip</Chip>
      </div>
      <div style={{ marginTop: 15 }}>
        <Chip size="md">md chip</Chip>
      </div>
      <div style={{ marginTop: 15 }}>
        <Chip size="lg">lg chip</Chip>
      </div>
      <div style={{ marginTop: 15 }}>
        <Chip size="xl">xl chip</Chip>
      </div>
    </div>
  ));
