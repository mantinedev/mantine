import { MultiSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      loading
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect placeholder="Pick values" data={['React', 'Angular', 'Vue', 'Svelte']} loading />
  );
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
