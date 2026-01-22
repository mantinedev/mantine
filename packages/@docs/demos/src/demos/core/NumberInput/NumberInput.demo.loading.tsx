import { useState } from 'react';
import { Loader, NumberInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { NumberInput, Loader } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<string | number>('');

  const handleChange = (val: string | number) => {
    setValue(val);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <NumberInput
      label="Amount"
      placeholder="Calculating..."
      value={value}
      onChange={handleChange}
      rightSection={loading ? <Loader size={18} /> : null}
    />
  );
}
`;

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<string | number>('');

  const handleChange = (val: string | number) => {
    setValue(val);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <NumberInput
      label="Amount"
      placeholder="Calculating..."
      value={value}
      onChange={handleChange}
      rightSection={loading ? <Loader size={18} /> : null}
    />
  );
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
