import { TagsInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TagsInput
        label="Press Enter to submit a tag"
        placeholder="Enter tag"
        defaultValue={['React', 'Angular', 'Vue', 'Svelte']}
        maxDisplayedValues={2}
      />

      <TagsInput
        label="With custom overflow content"
        placeholder="Enter tag"
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
      <TagsInput
        label="Press Enter to submit a tag"
        placeholder="Enter tag"
        defaultValue={['React', 'Angular', 'Vue', 'Svelte']}
        maxDisplayedValues={2}
      />

      <TagsInput
        label="With custom overflow content"
        placeholder="Enter tag"
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
