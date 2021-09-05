import React from 'react';
import { storiesOf } from '@storybook/react';
import { Chip } from './Chip/Chip';

storiesOf('@mantine/core/Chips', module).add('Chip', () => (
  <div style={{ padding: 40 }}>
    <div>
      <Chip size="xs">Checkbox chip</Chip>
    </div>
    <div>
      <Chip size="sm">Checkbox chip</Chip>
    </div>
    <div>
      <Chip size="md">Checkbox chip</Chip>
    </div>
    <div>
      <Chip size="lg">Checkbox chip</Chip>
    </div>
    <div>
      <Chip size="xl">Checkbox chip</Chip>
    </div>
    <Chip type="radio">Radio chip</Chip>
  </div>
));
