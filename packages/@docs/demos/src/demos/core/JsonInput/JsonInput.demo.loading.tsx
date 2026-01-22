import { useState } from 'react';
import { JsonInput, Loader } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { JsonInput, Loader } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (json: string) => {
    setValue(json);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <JsonInput
      label="JSON data"
      placeholder="Validating JSON..."
      value={value}
      onChange={handleChange}
      rightSection={loading ? <Loader size={18} /> : null}
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
`;

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (json: string) => {
    setValue(json);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <JsonInput
      label="JSON data"
      placeholder="Validating JSON..."
      value={value}
      onChange={handleChange}
      rightSection={loading ? <Loader size={18} /> : null}
      formatOnBlur
      autosize
      minRows={4}
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
