import { Button } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button component="a" href="https://mantine.dev/" target="_blank">
      Mantine website
    </Button>
  );
}
`;

function Demo() {
  return (
    <Button component="a" href="https://mantine.dev/" target="_blank">
      Mantine website
    </Button>
  );
}

export const polymorphic: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
