import { Checkbox, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox checked label="regular checkbox" size="lg" color="lime.4" />
      <Checkbox autoContrast checked label="autoContrast checkbox" size="lg" color="lime.4" />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <Checkbox checked label="regular checkbox" size="lg" color="lime.4" onChange={() => {}} />
      <Checkbox
        autoContrast
        checked
        label="autoContrast checkbox"
        size="lg"
        color="lime.4"
        onChange={() => {}}
      />
    </Stack>
  );
}

export const autoContrast: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
