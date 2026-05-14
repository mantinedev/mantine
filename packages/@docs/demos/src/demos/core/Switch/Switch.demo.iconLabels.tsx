import { MoonStarsIcon, SunIcon } from '@phosphor-icons/react';
import { Switch } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Switch } from '@mantine/core';
import { SunIcon, MoonStarsIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Switch
      size="md"
      color="dark.4"
      onLabel={<SunIcon size={16} color="var(--mantine-color-yellow-4)" />}
      offLabel={<MoonStarsIcon size={16} color="var(--mantine-color-blue-6)" />}
    />
  );
}
`;

function Demo() {
  return (
    <Switch
      size="md"
      color="dark.4"
      onLabel={<SunIcon size={16} color="var(--mantine-color-yellow-4)" />}
      offLabel={<MoonStarsIcon size={16} color="var(--mantine-color-blue-6)" />}
    />
  );
}

export const iconLabels: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
