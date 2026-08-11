import { PasswordInput, Stack, TextInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { PasswordInput, Stack, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <TextInput label="Email" placeholder="your@email.com" />
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visibilityToggleFocusable
      />
      <TextInput label="Nickname" placeholder="Your nickname" />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <TextInput label="Email" placeholder="your@email.com" />
      <PasswordInput label="Password" defaultValue="secret" visibilityToggleFocusable />
      <TextInput label="Nickname" placeholder="Your nickname" />
    </Stack>
  );
}

export const visibilityToggleFocusable: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
