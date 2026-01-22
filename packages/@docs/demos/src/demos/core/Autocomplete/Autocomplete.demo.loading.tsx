import { useState } from 'react';
import { Autocomplete, Loader } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Autocomplete, Loader } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (val: string) => {
    setValue(val);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <Autocomplete
      label="Search"
      placeholder="Fetching suggestions..."
      value={value}
      onChange={handleChange}
      data={['React', 'Angular', 'Vue', 'Svelte']}
      rightSection={loading ? <Loader size={18} /> : null}
    />
  );
}
`;

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (val: string) => {
    setValue(val);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <Autocomplete
      label="Search"
      placeholder="Fetching suggestions..."
      value={value}
      onChange={handleChange}
      data={['React', 'Angular', 'Vue', 'Svelte']}
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
