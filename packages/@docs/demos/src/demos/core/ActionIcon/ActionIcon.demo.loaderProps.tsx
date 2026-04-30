import { ActionIcon } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon } from '@mantine/core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} aria-label="Loading..." />;
}
`;

function Demo() {
  return <ActionIcon size="xl" loading aria-label="Loading..." loaderProps={{ type: 'dots' }} />;
}

export const loaderProps: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
