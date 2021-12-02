import React from 'react';
import { storiesOf } from '@storybook/react';
import { RtlProvider } from '@mantine/ds/src';
import { Blockquote } from '../Blockquote';

storiesOf('@mantine/core/Blockquote/stories', module).add('RTL', () => (
  <div style={{ maxWidth: 400, margin: 'auto' }}>
    <RtlProvider>
      <Blockquote cite="– Forrest Gump">
        Life is like an npm install – you never know what you are going to get.
      </Blockquote>
    </RtlProvider>
  </div>
));
