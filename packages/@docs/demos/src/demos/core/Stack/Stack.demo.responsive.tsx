import { Button, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Stack, Button } from '@mantine/core';

function Demo() {
  return (
    <Stack
      gap={{ base: 'sm', sm: 'xl' }}
      align={{ base: 'stretch', sm: 'center' }}
      justify={{ base: 'flex-start', sm: 'space-between' }}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack
      gap={{ base: 'sm', sm: 'xl' }}
      align={{ base: 'stretch', sm: 'center' }}
      justify={{ base: 'flex-start', sm: 'space-between' }}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Stack>
  );
}

export const responsive: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
