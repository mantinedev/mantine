import { useState } from 'react';
import { Loader, NativeSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { NativeSelect, Loader } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.currentTarget.value);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <NativeSelect
      label="Select option"
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

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.currentTarget.value);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <NativeSelect
      label="Select option"
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
