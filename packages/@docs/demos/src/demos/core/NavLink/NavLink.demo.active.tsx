import { useState } from 'react';
import { IconActivity, IconChevronRight, IconFingerprint, IconGauge } from '@tabler/icons-react';
import { Box, Group, NavLink } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { IconGauge, IconFingerprint, IconActivity, IconChevronRight } from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';

const data = [
  { icon: IconGauge, label: 'Dashboard', description: 'Item with description' },
  {
    icon: IconFingerprint,
    label: 'Security',
    rightSection: <IconChevronRight size={16} stroke={1.5} />,
  },
  { icon: IconActivity, label: 'Activity' },
];

function Demo() {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      href="#required-for-focus"
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      leftSection={<item.icon size={16} stroke={1.5} />}
      onClick={() => setActive(index)}
      {{props}}
    />
  ));

  return <Box w={220}>{items}</Box>;
}
`;

const data = [
  { icon: IconGauge, label: 'Dashboard', description: 'Item with description' },
  {
    icon: IconFingerprint,
    label: 'Security',
    rightSection: <IconChevronRight size={16} stroke={1.5} className="mantine-rotate-rtl" />,
  },
  { icon: IconActivity, label: 'Activity' },
];

function Demo(props: any) {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      href="#required-for-focus"
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      leftSection={<item.icon size={16} stroke={1.5} />}
      onClick={() => setActive(index)}
      {...props}
    />
  ));

  return (
    <Group justify="center">
      <Box w={220}>{items}</Box>
    </Group>
  );
}

export const active: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code,
  controls: [
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: 'blue' },
    {
      prop: 'variant',
      type: 'segmented',
      data: [
        { value: 'subtle', label: 'Subtle' },
        { value: 'light', label: 'Light' },
        { value: 'filled', label: 'Filled' },
      ],

      libraryValue: 'light',
      initialValue: 'light',
    },
  ],
};
