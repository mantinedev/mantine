import React from 'react';
import { IconAlertCircle } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Alert, Box } from '@mantine/core';

function Wrapper(props: React.ComponentPropsWithoutRef<typeof Alert>) {
  return (
    <Box maw={400} mx="auto">
      <Alert {...props} icon={<IconAlertCircle size="1rem" />} />
    </Box>
  );
}

const codeTemplate = (props: string, children: string) => `
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

function Demo() {
  return (
    <Alert icon={<IconAlertCircle size="1rem" />}${props}>
      ${children}
    </Alert>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'title', type: 'string', initialValue: 'Bummer!' },
    {
      name: 'children',
      type: 'string',
      initialValue:
        'Something terrible happened! You made a mistake and there is no going back, your data was lost forever!',
    },
    { name: 'color', type: 'color', initialValue: 'red', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'withCloseButton', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'variant',
      type: 'segmented',
      data: [
        { label: 'light', value: 'light' },
        { label: 'filled', value: 'filled' },
        { label: 'outline', value: 'outline' },
      ],
      initialValue: 'light',
      defaultValue: 'light',
    },
  ],
};
