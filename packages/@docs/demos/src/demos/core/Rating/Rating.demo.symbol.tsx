import React from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { Rating } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return <Rating emptySymbol={<IconSun size="1rem" />} fullSymbol={<IconMoon size="1rem" />} />;
}
`;

function Demo() {
  return <Rating emptySymbol={<IconSun size="1rem" />} fullSymbol={<IconMoon size="1rem" />} />;
}

export const symbol: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
