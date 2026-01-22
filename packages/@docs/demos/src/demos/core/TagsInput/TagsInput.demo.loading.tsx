import { useState } from 'react';
import { Loader, TagsInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { TagsInput, Loader } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (val: string[]) => {
    setValue(val);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <TagsInput
      label="Enter tags"
      placeholder="Adding tags..."
      value={value}
      onChange={handleChange}
      rightSection={loading ? <Loader size={18} /> : null}
    />
  );
}
`;

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (val: string[]) => {
    setValue(val);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <TagsInput
      label="Enter tags"
      placeholder="Adding tags..."
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
