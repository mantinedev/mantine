import React, { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text, Button } from '@mantine/core';
import { CodeDemo } from '../../../components/Demo/Demo';

const code = `import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, Text, Button } from '@mantine/core';

export function Demo() {
  const [value, setValue] = useState('');
  const [debounced, cancel] = useDebouncedValue(value, 1000);

  return (
    <>
      <TextInput
        label="Enter value to see debounce"
        value={value}
        style={{ flex: 1 }}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Button onClick={cancel} size="lg" style={{ marginLeft: 15 }}>
        Cancel
      </Button>

      <Text>Value: {value}</Text>
      <Text>Debounced value: {debounced}</Text>
    </>
  );
}`;

export function UseDebouncedValueCancelDemo() {
  const [value, setValue] = useState('');
  const [debounced, cancel] = useDebouncedValue(value, 1000);

  return (
    <CodeDemo code={code} language="tsx">
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
        <Button onClick={cancel} ml={15}>
          Cancel
        </Button>
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
