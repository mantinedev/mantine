import React, { useState } from 'react';
import { IconGauge, IconFingerprint, IconActivity } from '@tabler/icons';
import { Box, NavLink } from '@mantine/core';

const code = `
import { useState } from 'react';
import { IconGauge, IconFingerprint, IconActivity } from '@tabler/icons';
import { Box, NavLink } from '@mantine/core';

const data = [
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconActivity, label: 'Activity' },
];

function Demo() {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      icon={<item.icon size={16} stroke={1.5} />}
      onClick={() => setActive(index)}
    />
  ));

  return <Box sx={{ width: 220 }}>{items}</Box>;
}
`;

const data = [
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconActivity, label: 'Activity' },
];

function Demo() {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      icon={<item.icon size={16} stroke={1.5} />}
      onClick={() => setActive(index)}
    />
  ));

  return <Box sx={{ width: 220 }}>{items}</Box>;
}

export const active: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
