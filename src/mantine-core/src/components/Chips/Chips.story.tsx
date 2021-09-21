import React from 'react';
import { storiesOf } from '@storybook/react';
import { Chip } from './Chip/Chip';
import { Chips } from './Chips';

storiesOf('@mantine/core/Chips', module)
  .add('Chips', () => (
    <div style={{ padding: 40 }}>
      <Chips>
        <Chip value="1">First</Chip>
        <Chip value="2" disabled>
          Second
        </Chip>
        <Chip value="3">Third</Chip>
      </Chips>
      <Chips variant="filled">
        <Chip value="1">First</Chip>
        <Chip value="2" disabled>
          Second
        </Chip>
        <Chip value="3">Third</Chip>
      </Chips>
    </div>
  ))
  .add('Chip', () => (
    <div style={{ padding: 40 }}>
      <Chip value="1" type="radio">
        Radio chip
      </Chip>
      <Chip value="1" variant="filled">
        Checkbox chip
      </Chip>
    </div>
  ))
  .add('Chip sizes', () => (
    <div style={{ padding: 40 }}>
      <div>
        <Chip value="1" size="xs">
          xs chip
        </Chip>
      </div>
      <div style={{ marginTop: 15 }}>
        <Chip value="1" size="sm">
          sm chip
        </Chip>
      </div>
      <div style={{ marginTop: 15 }}>
        <Chip value="1" size="md">
          md chip
        </Chip>
      </div>
      <div style={{ marginTop: 15 }}>
        <Chip value="1" size="lg">
          lg chip
        </Chip>
      </div>
      <div style={{ marginTop: 15 }}>
        <Chip value="1" size="xl">
          xl chip
        </Chip>
      </div>
    </div>
  ));
