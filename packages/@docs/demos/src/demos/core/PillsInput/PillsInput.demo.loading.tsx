import { useState } from 'react';
import { Loader, Pill, PillsInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { PillsInput, Pill, Loader } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <PillsInput
      label="Enter items"
      rightSection={loading ? <Loader size={18} /> : null}
    >
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <PillsInput.Field
          placeholder="Adding items..."
          value={value}
          onChange={handleChange}
        />
      </Pill.Group>
    </PillsInput>
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
    <PillsInput label="Enter items" rightSection={loading ? <Loader size={18} /> : null}>
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <PillsInput.Field placeholder="Adding items..." value={value} onChange={handleChange} />
      </Pill.Group>
    </PillsInput>
  );
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
