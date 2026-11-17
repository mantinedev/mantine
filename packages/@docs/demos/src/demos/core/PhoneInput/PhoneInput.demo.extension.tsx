import { useState } from 'react';
import { Code, PhoneInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Code, PhoneInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('+12025551234x1234');

  return (
    <>
      <PhoneInput
        label="Office phone"
        description="Enter an extension after x"
        withExtension
        value={value}
        onChange={setValue}
      />
      <Code block mt="md">{value}</Code>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useState('+12025551234x1234');

  return (
    <>
      <PhoneInput
        label="Office phone"
        description="Enter an extension after x"
        withExtension
        value={value}
        onChange={setValue}
      />
      <Code block mt="md">
        {value}
      </Code>
    </>
  );
}

export const extension: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
