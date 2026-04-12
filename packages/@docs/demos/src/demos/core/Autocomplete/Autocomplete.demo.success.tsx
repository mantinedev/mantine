import { Autocomplete } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return <Autocomplete label="Autocomplete" placeholder="Autocomplete" data={['React', 'Angular', 'Vue', 'Svelte']} success="Looks good!" />;
}
`;

function Demo() {
  return (
    <Autocomplete
      label="Autocomplete"
      placeholder="Autocomplete"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      success="Looks good!"
    />
  );
}

export const success: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
