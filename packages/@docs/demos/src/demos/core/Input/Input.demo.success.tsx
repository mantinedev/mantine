import { TextInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput placeholder="Success as boolean" label="Success as boolean" success />
      <TextInput
        mt="md"
        placeholder="Success as react node"
        label="Success as react node"
        success="Username is available"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <TextInput placeholder="Success as boolean" label="Success as boolean" success />
      <TextInput
        mt="md"
        placeholder="Success as react node"
        label="Success as react node"
        success="Username is available"
      />
    </>
  );
}

export const success: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
