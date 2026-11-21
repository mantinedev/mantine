import { useState } from 'react';
import { Code } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Code } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <>
      <MaskedDateInput label="Date of birth" value={value} onChange={setValue} />
      <Code block mt="md">
        {value ?? 'null'}
      </Code>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <>
      <MaskedDateInput label="Date of birth" value={value} onChange={setValue} />
      <Code block mt="md">
        {value ?? 'null'}
      </Code>
    </>
  );
}

export const controlled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
