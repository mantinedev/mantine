import { NativeSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      label="Your favorite framework"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      loading
    />
  );
}
`;

function Demo() {
  return (
    <NativeSelect
      label="Your favorite framework"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      loading
    />
  );
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
