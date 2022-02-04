import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/styles';
import { Blockquote } from './Blockquote';

storiesOf('@mantine/core/Blockquote/stories', module).add(
  'Default props on MantineProvider',
  () => (
    <MantineProvider defaultProps={{ Blockquote: { color: 'orange' } }}>
      <Blockquote cite="– Cite">Hello there</Blockquote>
    </MantineProvider>
  )
);
