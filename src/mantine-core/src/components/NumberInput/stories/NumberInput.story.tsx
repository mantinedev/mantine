import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/styles';
import { RtlProvider } from '@mantine/ds/src';
import { NumberInput } from '../NumberInput';

const sizes = MANTINE_SIZES.map((size) => (
  <NumberInput defaultValue={0} label={size} size={size} key={size} style={{ marginTop: 30 }} />
));

function Controlled(
  props: Omit<React.ComponentPropsWithoutRef<typeof NumberInput>, 'value' | 'onChange'>
) {
  const [value, setValue] = useState(0);
  return <NumberInput value={value} onChange={(val) => setValue(val)} {...props} />;
}

storiesOf('@mantine/core/NumberInput/stories', module)
  .add('Sizes', () => <div style={{ padding: 40, maxWidth: 400 }}>{sizes}</div>)
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
