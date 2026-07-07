import { Stat } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Stat } from '@mantine/core';

function Demo() {
  return (
    <Stat>
      <Stat.Value prefix="$">1,340.50</Stat.Value>
      <Stat.Label>Total revenue</Stat.Label>
      <Stat.Diff value={12.4} />
    </Stat>
  );
}
`;

function Demo() {
  return (
    <Stat>
      <Stat.Value prefix="$">1,340.50</Stat.Value>
      <Stat.Label>Total revenue</Stat.Label>
      <Stat.Diff value={12.4} />
    </Stat>
  );
}

export const compound: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
