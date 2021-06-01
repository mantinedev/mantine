import React from 'react';
import { InfoCircledIcon } from '@modulz/radix-icons';
import { Input } from '../Input';
import { Tooltip } from '../../Tooltip/Tooltip';

const code = `
import React from 'react';
import { Input, Tooltip } from '@mantine/core';
import { InfoCircledIcon } from '@modulz/radix-icons';

function Demo() {
  const rightSection = (
    <Tooltip
      label="We do not send spam"
      position="top"
      placement="end"
      withArrow
    >
      <InfoCircledIcon />
    </Tooltip>
  );

  return <Input placeholder="Your email" rightSection={rightSection} />;
}
`;

function Demo() {
  const rightSection = (
    <Tooltip label="We do not send spam" position="bottom" placement="end" withArrow>
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
