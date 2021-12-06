import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { RtlProvider } from '@mantine/ds/src';
import { JsonInput } from '../JsonInput';

function Controlled() {
  const [value, onChange] = useState('');
  return (
    <JsonInput value={value} onChange={onChange} label="Controlled" placeholder="Controlled" />
  );
}

storiesOf('@mantine/core/JsonInput/stories', module)
  .add('Controlled', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Controlled />
    </div>
  ))
  .add('RTL', () => (
    <RtlProvider>
      <div style={{ padding: 40, maxWidth: 400 }}>
        <Controlled />
      </div>
    </RtlProvider>
  ));
