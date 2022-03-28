import React from 'react';
import { Database } from 'tabler-icons-react';
import { Button, Group, ButtonProps } from '@mantine/core';

function Wrapper(props: ButtonProps<'button'>) {
  return (
    <Group position="center">
      <Button leftIcon={<Database size={14} />} {...props}>
        Connect to database
      </Button>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Database } from 'tabler-icons-react';
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button leftIcon={<Database size={14} />}${props}>
      Connect to database
    </Button>
  );
}
`;

export const loadingConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'loading', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'loaderPosition',
      capitalize: true,
      type: 'segmented',
      data: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      initialValue: 'left',
      defaultValue: 'left',
    },
  ],
};
