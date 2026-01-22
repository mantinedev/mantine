import { useState } from 'react';
import { Loader, Select } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Select, Loader } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<string | null>(null);

  const handleChange = (val: string | null) => {
    setValue(val);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <Select
      label="Select option"
      placeholder="Searching..."
      value={value}
      onChange={handleChange}
      data={['React', 'Angular', 'Vue', 'Svelte']}
      rightSection={loading ? <Loader size={18} /> : null}
      searchable
    />
  );
}
`;

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<string | null>(null);

  const handleChange = (val: string | null) => {
    setValue(val);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <Select
      label="Select option"
      placeholder="Searching..."
      value={value}
      onChange={handleChange}
      data={['React', 'Angular', 'Vue', 'Svelte']}
      rightSection={loading ? <Loader size={18} /> : null}
      searchable
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
