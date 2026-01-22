import { useState } from 'react';
import { Input, Loader } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Input, Loader } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <Input
      placeholder="Start typing to search..."
      value={value}
      onChange={handleChange}
      rightSection={loading ? <Loader size={18} /> : null}
    />
  );
}
`;

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <Input
      placeholder="Start typing to search..."
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
