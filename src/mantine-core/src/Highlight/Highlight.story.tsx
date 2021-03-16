import React from 'react';
import { storiesOf } from '@storybook/react';
import { Highlight } from './Highlight';

storiesOf('@mantine/core/Highlight', module).add('Highlight', () => (
  <>
    <Highlight<'a'>
      highlight="this"
      transform="uppercase"
      size="sm"
      weight="bold"
      component="a"
      variant="link"
      target="_blank"
      href="https://mantine.dev"
    >
      Highlight this
    </Highlight>
    <Highlight highlight="that">Nothing nothing</Highlight>
    <Highlight highlight="Highlight all">Highlight all</Highlight>
  </>
));
