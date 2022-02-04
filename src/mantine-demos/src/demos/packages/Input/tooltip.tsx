import React from 'react';
import { InfoCircledIcon } from '@modulz/radix-icons';
import { Input, Tooltip } from '@mantine/core';

const code = `
import { Input, Tooltip } from '@mantine/core';
import { InfoCircledIcon } from '@modulz/radix-icons';

function Demo() {
  const rightSection = (
    <Tooltip label="We do not send spam" position="top" placement="end">
      <InfoCircledIcon />
    </Tooltip>
  );

  return <Input placeholder="Your email" rightSection={rightSection} />;
}
`;

function Demo() {
  const rightSection = (
    <Tooltip label="We do not send spam" position="top" placement="end">
      <InfoCircledIcon style={{ width: 15, height: 15, display: 'block', opacity: 0.5 }} />
    </Tooltip>
  );

  return <Input placeholder="Your email" rightSection={rightSection} />;
}

export const tooltip: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
