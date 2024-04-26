import { Badge, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const matches = useMediaQuery('(min-width: ${em(900)})');

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`;

function Demo() {
  const matches = useMediaQuery(`(min-width: ${em(900)})`);

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}

export const useMediaQueryDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
