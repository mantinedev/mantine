import { Autocomplete } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <>
      <Autocomplete
        label="Opens on focus"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Autocomplete
        label="Does not open on focus"
        placeholder="Pick value or enter anything"
        openOnFocus={false}
        data={['React', 'Angular', 'Vue', 'Svelte']}
        mt="md"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Autocomplete
        label="Opens on focus"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Autocomplete
        label="Does not open on focus"
        placeholder="Pick value or enter anything"
        openOnFocus={false}
        data={['React', 'Angular', 'Vue', 'Svelte']}
        mt="md"
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
