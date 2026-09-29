import { CoinsIcon, DownloadSimpleIcon, UsersIcon } from '@phosphor-icons/react';
import { Group, Stat } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { CoinsIcon, DownloadSimpleIcon, UsersIcon } from '@phosphor-icons/react';
import { Group, Stat } from '@mantine/core';

function Demo() {
  return (
    <Group gap={50}>
      <Stat label="Users" value={92410} thousandSeparator diff={12.4} icon={<UsersIcon size={28} />} />
      <Stat
        label="Revenue"
        value={1340.5}
        prefix="$"
        decimalScale={2}
        fixedDecimalScale
        thousandSeparator
        diff={4.1}
        icon={<CoinsIcon size={28} />}
      />
      <Stat label="Downloads" value={18320} thousandSeparator icon={<DownloadSimpleIcon size={28} />} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group gap={50}>
      <Stat
        label="Users"
        value={92410}
        thousandSeparator
        diff={12.4}
        icon={<UsersIcon size={28} />}
      />
      <Stat
        label="Revenue"
        value={1340.5}
        prefix="$"
        decimalScale={2}
        fixedDecimalScale
        thousandSeparator
        diff={4.1}
        icon={<CoinsIcon size={28} />}
      />
      <Stat
        label="Downloads"
        value={18320}
        thousandSeparator
        icon={<DownloadSimpleIcon size={28} />}
      />
    </Group>
  );
}

export const icon: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
