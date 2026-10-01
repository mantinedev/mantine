import { MultiSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect
        label="Your favorite libraries"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte', 'Solid', 'Preact']}
        defaultValue={['React', 'Angular', 'Vue', 'Svelte']}
        maxDisplayedValues={2}
      />

      <MultiSelect
        label="With custom overflow content"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte', 'Solid', 'Preact']}
        defaultValue={['React', 'Angular', 'Vue', 'Svelte']}
        maxDisplayedValues={2}
        maxDisplayedValuesContent={(overflow) => \`and \${overflow} others\`}
        mt="md"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <MultiSelect
        label="Your favorite libraries"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte', 'Solid', 'Preact']}
        defaultValue={['React', 'Angular', 'Vue', 'Svelte']}
        maxDisplayedValues={2}
      />

      <MultiSelect
        label="With custom overflow content"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte', 'Solid', 'Preact']}
        defaultValue={['React', 'Angular', 'Vue', 'Svelte']}
        maxDisplayedValues={2}
        maxDisplayedValuesContent={(overflow) => `and ${overflow} others`}
        mt="md"
      />
    </>
  );
}

export const maxDisplayedValues: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
