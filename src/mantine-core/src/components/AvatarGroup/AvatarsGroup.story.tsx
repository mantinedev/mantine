import React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from '@mantine/core';
import { AvatarsGroup } from './AvatarsGroup';

storiesOf('@mantine/core/AvatarsGroup', module)
  .add('AvatarsGroup', () => (
    <div style={{ padding: 40 }}>
      <AvatarsGroup>
        <Avatar color="red" />
        <Avatar radius="xl" color="indigo" />
        <Avatar radius="md" color="blue" />
      </AvatarsGroup>
    </div>
  ));
