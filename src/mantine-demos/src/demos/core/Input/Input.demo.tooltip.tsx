import React from 'react';
import { IconAlertCircle } from '@tabler/icons';
import { Input, Tooltip } from '@mantine/core';

const code = `
import { Input, Tooltip } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';

function Demo() {
  const rightSection = (
    <Tooltip label="We do not send spam" position="top-end">
      <IconAlertCircle size={16} style={{ display: 'block', opacity: 0.5 }} />
    </Tooltip>
  );

  return <Input placeholder="Your email" rightSection={rightSection} />;
}
`;

function Demo() {
  const rightSection = (
    <Tooltip label="We do not send spam" position="top-end">
      <IconAlertCircle size={16} style={{ display: 'block', opacity: 0.5 }} />
    </Tooltip>
  );

  return <Input placeholder="Your email" rightSection={rightSection} />;
}

export const tooltip: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
