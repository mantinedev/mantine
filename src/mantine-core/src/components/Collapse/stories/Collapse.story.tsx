import React from 'react';
import { storiesOf } from '@storybook/react';
import { CollapsedDemo } from '../demos/nested';

storiesOf('@mantine/core/Collapse/stories', module)
  .add('Focus within collapse', () => (
    <div style={{ padding: 40 }}>
      <input placeholder="Outside input" />

      <CollapsedDemo buttonProps={{ children: 'toggle' }}>
        <input placeholder="Inside input" />
      </CollapsedDemo>

      <input placeholder="Outside input" />
    </div>
  ))
  .add('Animate opacity: false', () => (
    <CollapsedDemo buttonProps={{ children: 'toggle' }} animateOpacity={false}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, repudiandae non. Modi, quia
      dolore quasi consequatur, sunt cumque delectus quae quibusdam quaerat ad alias eveniet, iure
      laboriosam. Sapiente, iusto cupiditate.
    </CollapsedDemo>
  ));
