import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { Notification, NotificationProps, Box } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { demoBase } from './_demo-base';

function Wrapper(props: NotificationProps) {
  return (
    <Box maw={400} mx="auto">
      <Notification onClose={() => {}} {...props} />
      <Notification mt="md" icon={<IconCheck size="1.2rem" />} onClose={() => {}} {...props} />
    </Box>
  );
}

const codeTemplate = (props: string, children: string) => `
import { Notification } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Notification${props}>
        ${children}
      </Notification>

      <Notification icon={<IconCheck size="1.2rem" />}${props}>
        ${children}
      </Notification>
    </>
  );
}
`;

export const configurator: MantineDemo = {
  ...demoBase,
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'loading', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'withCloseButton', type: 'boolean', initialValue: true, defaultValue: true },
    { name: 'withBorder', type: 'boolean', initialValue: false, defaultValue: false },
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
