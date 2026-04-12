import { TextInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput label="Text Input" placeholder="Text Input" success="Looks good!" />;
}
`;

function Demo() {
  return <TextInput label="Text Input" placeholder="Text Input" success="Looks good!" />;
}

export const success: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
