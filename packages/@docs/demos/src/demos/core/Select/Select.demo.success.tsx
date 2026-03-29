import { Select } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return <Select label="Select" placeholder="Select" data={['React', 'Angular', 'Vue', 'Svelte']} success="Looks good!" />;
}
`;

function Demo() {
  return (
    <Select
      label="Select"
      placeholder="Select"
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
