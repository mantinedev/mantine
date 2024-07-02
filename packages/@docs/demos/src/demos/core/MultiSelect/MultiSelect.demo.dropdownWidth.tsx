import { MultiSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}

export const dropdownWidth: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
