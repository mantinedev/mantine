import { SegmentedControl, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { SegmentedControl, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <SegmentedControl color="lime.4" data={['React', 'Angular', 'Vue', 'Svelte']} />
      <SegmentedControl color="lime.4" autoContrast data={['React', 'Angular', 'Vue', 'Svelte']} />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <SegmentedControl color="lime.4" data={['React', 'Angular', 'Vue', 'Svelte']} />
      <SegmentedControl color="lime.4" autoContrast data={['React', 'Angular', 'Vue', 'Svelte']} />
    </Stack>
  );
}

export const autoContrast: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
