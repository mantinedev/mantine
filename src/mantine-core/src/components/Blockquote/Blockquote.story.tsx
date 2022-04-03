import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/styles';
import { StylesAPIStory } from '@mantine/storybook';
import { Blockquote } from './Blockquote';

storiesOf('@mantine/core/Blockquote', module)
  .add('Styles API', () => (
    <StylesAPIStory
      component={Blockquote}
      name="Blockquote"
      props={{ children: 'Blockquote', cite: 'cite' }}
    />
  ))
  .add('Default props on MantineProvider', () => (
    <MantineProvider defaultProps={{ Blockquote: { color: 'orange' } }}>
      <Blockquote cite="– Cite">Hello there</Blockquote>
    </MantineProvider>
  ));
