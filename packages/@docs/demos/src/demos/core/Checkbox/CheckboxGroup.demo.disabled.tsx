import { Checkbox, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox.Group disabled>
      <Stack>
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="angular" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Stack>
    </Checkbox.Group>
  );
}
`;

function Demo() {
  return (
    <Checkbox.Group
      disabled
      label="Select your favorite frameworks/libraries"
      description="This is anonymous"
    >
      <Stack mt="xs">
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="angular" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Stack>
    </Checkbox.Group>
  );
}

export const groupDisabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
