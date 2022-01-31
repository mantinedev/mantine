import React from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { Notification, NotificationProps } from '@mantine/core';
import { demoBase } from './_demo-base';

function Wrapper(props: NotificationProps) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Notification onClose={() => {}} {...props} />
      <Notification style={{ marginTop: 15 }} icon={<CheckIcon />} onClose={() => {}} {...props} />
    </div>
  );
}

const codeTemplate = (props: string, children: string) => `
<Notification${props}>
  ${children}
</Notification>

<Notification icon={<CheckIcon />}${props}>
  ${children}
</Notification>
`;

export const configurator: MantineDemo = {
  ...demoBase,
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'loading', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'disallowClose', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    {
      name: 'title',
      type: 'string',
      initialValue: 'We notify you that',
    },
    {
      name: 'children',
      type: 'string',
      initialValue: 'You are now obligated to give a star to Mantine project on GitHub',
    },
  ],
};
