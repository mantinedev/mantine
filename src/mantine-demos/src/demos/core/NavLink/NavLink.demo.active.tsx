import React, { useState } from 'react';
import { IconGauge, IconFingerprint, IconActivity, IconChevronRight } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Box, NavLink, Group } from '@mantine/core';

const codeTemplate = (props: string) => `
import { useState } from 'react';
import { IconGauge, IconFingerprint, IconActivity, IconChevronRight } from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';

const data = [
  { icon: IconGauge, label: 'Dashboard', description: 'Item with description' },
  {
    icon: IconFingerprint,
    label: 'Security',
    rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
  },
  { icon: IconActivity, label: 'Activity' },
];

function Demo() {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      icon={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}${props.length === 0 ? '' : `\n     ${props}`}
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
    rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
  },
  { icon: IconActivity, label: 'Activity' },
];

function Demo(props: any) {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      icon={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
      {...props}
    />
  ));

  return (
    <Group position="center">
      <Box w={220}>{items}</Box>
    </Group>
  );
}

export const active: MantineDemo = {
  type: 'configurator',
  component: Demo,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    {
      name: 'variant',
      type: 'segmented',
      data: [
        { value: 'subtle', label: 'Subtle' },
        { value: 'light', label: 'Light' },
        { value: 'filled', label: 'Filled' },
      ],

      defaultValue: 'light',
      initialValue: 'light',
    },
  ],
};
