import { useState } from 'react';
import { Button, Group, Stack, Text } from '@mantine/core';
import { useDebouncedCallback } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Stack, Text } from '@mantine/core';
import { useDebouncedCallback } from '@mantine/hooks';

function InputWithDebounce({ onChange }) {
  const [innerValue, setInnerValue] = useState('');
  const debouncedCallback = useDebouncedCallback(
    (newInnerValue) => {
      onChange(newInnerValue);
    },
    { delay: 2000, flushOnUnmount: true }
  );

  const handleChange = (newInnerValue) => {
    setInnerValue(newInnerValue);
    debouncedCallback(newInnerValue);
  };

  return (
    <input
      placeholder="Enter text..."
      value={innerValue}
      onChange={(event) => handleChange(event.target.value)}
      style={{ padding: '8px', width: '100%' }}
    />
  );
}

function Demo() {
  const [outerValue, setOuterValue] = useState('');
  const [visible, setVisible] = useState(true);

  return (
    <Stack>
      <Text fw={700}>Output value: {outerValue || '(none)'}</Text>

      <Group>
        <Button onClick={() => setVisible(!visible)}>
          {visible ? 'Hide component' : 'Show component'}
        </Button>
      </Group>

      {visible ? <InputWithDebounce onChange={setOuterValue} /> : null}

      <Text size="sm" c="dimmed">
        1. Type text and wait 2 seconds for the value to be transmitted.
        2. Type text and immediately click the 'Hide component' button.
           The value will be transmitted immediately due to the flushOnUnmount option.
      </Text>
    </Stack>
  );
}
`;

function InputWithDebounce({ onChange }: { onChange: (value: string) => void }) {
  const [innerValue, setInnerValue] = useState('');
  const debouncedCallback = useDebouncedCallback(
    (newInnerValue: string) => {
      onChange(newInnerValue);
    },
    { delay: 2000, flushOnUnmount: true }
  );

  const handleChange = (newInnerValue: string) => {
    setInnerValue(newInnerValue);
    debouncedCallback(newInnerValue);
  };

  return (
    <input
      placeholder="Enter text..."
      value={innerValue}
      onChange={(event) => handleChange(event.target.value)}
      style={{ padding: '8px', width: '100%' }}
    />
  );
}

function Demo() {
  const [outerValue, setOuterValue] = useState('');
  const [visible, setVisible] = useState(true);

  return (
    <Stack>
      <Text fw={700}>Output value: {outerValue || '(none)'}</Text>

      <Group>
        <Button onClick={() => setVisible(!visible)}>
          {visible ? 'Hide component' : 'Show component'}
        </Button>
      </Group>

      {visible ? <InputWithDebounce onChange={setOuterValue} /> : null}

      <Text size="sm" c="dimmed">
        1. Type text and wait 2 seconds for the value to be transmitted. 2. Type text and
        immediately click the 'Hide component' button. The value will be transmitted immediately due
        to the flushOnUnmount option.
      </Text>
    </Stack>
  );
}

export const useDebouncedCallbackUnmount: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 500,
};
