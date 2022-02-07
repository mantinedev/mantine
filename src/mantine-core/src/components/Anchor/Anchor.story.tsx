import React from 'react';
import { storiesOf } from '@storybook/react';
import { Anchor } from './Anchor';

storiesOf('@mantine/core/Anchor/stories', module)
  .add('Custom component', () => (
    <div style={{ padding: 40 }}>
      <Anchor component="button" type="button">
        Anchor as button
      </Anchor>

      <br />

      <Anchor component="span">Anchor as span</Anchor>
    </div>
  ))
  .add('Text props', () => (
    <div style={{ padding: 40 }}>
      <Anchor size="lg" weight={700} color="red">
        Text props
      </Anchor>
    </div>
  ));
