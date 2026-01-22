import { useState } from 'react';
import { Loader, PinInput, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { PinInput, Loader, Stack, Text } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (val: string) => {
    setValue(val);
    if (val.length === 4) {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <Stack align="center">
      <PinInput
        length={4}
        value={value}
        onChange={handleChange}
      />
      {loading && (
        <Text size="sm" c="dimmed">
          <Loader size={18} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }} />
          Verifying PIN...
        </Text>
      )}
    </Stack>
  );
}
`;

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (val: string) => {
    setValue(val);
    if (val.length === 4) {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <Stack align="center">
      <PinInput length={4} value={value} onChange={handleChange} />
      {loading && (
        <Text size="sm" c="dimmed">
          <Loader
            size={18}
            style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }}
          />
          Verifying PIN...
        </Text>
      )}
    </Stack>
  );
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
