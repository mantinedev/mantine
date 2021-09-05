import React from 'react';
import { storiesOf } from '@storybook/react';
import { Chip } from './Chip/Chip';
import { Chips } from './Chips';

storiesOf('@mantine/core/Chips', module)
  .add('Chips', () => (
    <div style={{ padding: 40 }}>
      <Chips multiple>
        <Chip value="1">First</Chip>
        <Chip value="2">Second</Chip>
        <Chip value="3">Third</Chip>
      </Chips>
    </div>
  ))
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
