import { FingerprintIcon, GaugeIcon } from '@phosphor-icons/react';
import { NavLink } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { NavLink } from '@mantine/core';
import { GaugeIcon, FingerprintIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <NavLink
        label="First parent link"
        leftSection={<GaugeIcon size={16} />}
      >
        <NavLink href="#required-for-focus" label="First child link" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Nested parent link">
          <NavLink label="First child link" href="#required-for-focus" />
          <NavLink label="Second child link" href="#required-for-focus" />
          <NavLink label="Third child link" href="#required-for-focus" />
        </NavLink>
      </NavLink>

      <NavLink
        label="Second parent link"
        leftSection={<FingerprintIcon size={16} />}
        defaultOpened
      >
        <NavLink label="First child link" href="#required-for-focus" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Third child link" href="#required-for-focus" />
      </NavLink>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NavLink label="First parent link" leftSection={<GaugeIcon size={16} />}>
        <NavLink href="#required-for-focus" label="First child link" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Nested parent link">
          <NavLink label="First child link" href="#required-for-focus" />
          <NavLink label="Second child link" href="#required-for-focus" />
          <NavLink label="Third child link" href="#required-for-focus" />
        </NavLink>
      </NavLink>

      <NavLink label="Second parent link" leftSection={<FingerprintIcon size={16} />} defaultOpened>
        <NavLink label="First child link" href="#required-for-focus" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Third child link" href="#required-for-focus" />
      </NavLink>
    </>
  );
}

export const nested: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 240,
  component: Demo,
  code,
};
