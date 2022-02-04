import React, { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';
import { CodeDemo } from '../../../components/Demo/Demo';

const code = (leading: boolean) => `import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text } from '@mantine/core';

export function Demo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200${leading ? ', { leading: true }' : ''});

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        style={{ flex: 1 }}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}`;

export function UseDebouncedValueBaseDemo({
  leading = false,
  toggle = false,
}: {
  leading: boolean;
  toggle: boolean;
}) {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200, { leading });

  return (
    <CodeDemo code={code(leading)} language="tsx" toggle={toggle}>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          maxWidth: 400,
          margin: 'auto',
        }}
      >
        <TextInput
          label="Enter value to see debounce effect"
          placeholder="Enter value to see debounce effect"
          value={value}
          style={{ flex: 1 }}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </div>
      <div style={{ maxWidth: 400, margin: 'auto', marginTop: 15 }}>
        <Text>
          <Text component="span" color="gray" size="sm">
            Value:
          </Text>{' '}
          {value.trim() || '[empty string]'}
        </Text>
        <Text>
          <Text component="span" color="gray" size="sm">
            Debounced value:
          </Text>{' '}
          {debounced.trim() || '[empty string]'}
        </Text>
      </div>
    </CodeDemo>
  );
}
