import React from 'react';
import { storiesOf } from '@storybook/react';
import { CollapsedDemo } from '../demos/nested';

storiesOf('@mantine/core/Collapse/stories', module).add('Focus within collapse', () => (
  <div style={{ padding: 40 }}>
    <input placeholder="Outside input" />

    <CollapsedDemo mt="xl" mb="xl" buttonProps={{ children: 'toggle' }}>
      <input placeholder="Inside input" />
    </CollapsedDemo>

    <input placeholder="Outside input" />
  </div>
));
