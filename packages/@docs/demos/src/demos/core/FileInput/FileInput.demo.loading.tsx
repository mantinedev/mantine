import { useState } from 'react';
import { FileInput, Loader } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { FileInput, Loader } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<File | null>(null);

  const handleChange = (file: File | null) => {
    setValue(file);
    if (file) {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <FileInput
      label="Upload file"
      placeholder="Validating file..."
      value={value}
      onChange={handleChange}
      rightSection={loading ? <Loader size={18} /> : null}
    />
  );
}
`;

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<File | null>(null);

  const handleChange = (file: File | null) => {
    setValue(file);
    if (file) {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <FileInput
      label="Upload file"
      placeholder="Validating file..."
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
