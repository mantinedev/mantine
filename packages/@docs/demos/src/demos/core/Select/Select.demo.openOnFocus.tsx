import { Select } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select
        label="Opens on focus"
        placeholder="Pick value"
        searchable
        openOnFocus
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Select
        label="Does not open on focus"
        placeholder="Pick value"
        searchable
        openOnFocus={false}
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Select
        label="Opens on focus"
        placeholder="Pick value"
        searchable
        openOnFocus
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Select
        label="Does not open on focus"
        placeholder="Pick value"
        searchable
        openOnFocus={false}
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}

export const openOnFocus: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
};
