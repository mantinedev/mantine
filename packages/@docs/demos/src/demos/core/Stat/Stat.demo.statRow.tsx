import { CoinsIcon, ShoppingCartIcon, UsersIcon } from '@phosphor-icons/react';
import { Paper, SimpleGrid, Stat } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { CoinsIcon, ShoppingCartIcon, UsersIcon } from '@phosphor-icons/react';
import { Paper, SimpleGrid, Stat } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 3 }}>
      <Paper withBorder p="md" radius="md">
        <Stat label="Active users" value={92410} thousandSeparator diff={12.4} icon={<UsersIcon size={26} />} />
      </Paper>
      <Paper withBorder p="md" radius="md">
        <Stat label="Revenue" value={1340.5} prefix="$" decimalScale={2} fixedDecimalScale diff={-4.1} icon={<CoinsIcon size={26} />} />
      </Paper>
      <Paper withBorder p="md" radius="md">
        <Stat label="Orders" value={2847} thousandSeparator diff={0.8} icon={<ShoppingCartIcon size={26} />} />
      </Paper>
    </SimpleGrid>
  );
}
`;

function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 3 }} w="100%">
      <Paper withBorder p="md" radius="md">
        <Stat
          label="Active users"
          value={92410}
          thousandSeparator
          diff={12.4}
          icon={<UsersIcon size={26} />}
        />
      </Paper>
      <Paper withBorder p="md" radius="md">
        <Stat
          label="Revenue"
          value={1340.5}
          prefix="$"
          decimalScale={2}
          fixedDecimalScale
          diff={-4.1}
          icon={<CoinsIcon size={26} />}
        />
      </Paper>
      <Paper withBorder p="md" radius="md">
        <Stat
          label="Orders"
          value={2847}
          thousandSeparator
          diff={0.8}
          icon={<ShoppingCartIcon size={26} />}
        />
      </Paper>
    </SimpleGrid>
  );
}

export const statRow: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
