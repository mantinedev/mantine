import React from 'react';
import { DatabaseIcon } from '@primer/octicons-react';
import { DEFAULT_THEME, Button, Group, ButtonProps } from '@mantine/core';

function Wrapper(props: ButtonProps<'button'>) {
  return (
    <Group position="center">
      <Button leftIcon={<DatabaseIcon size={14} />} variant="white" {...props}>
        Connect to database
      </Button>
    </Group>
  );
}

const codeTemplate = (
  props: string
) => `<Button leftIcon={<DatabaseIcon />} variant="white"${props}>
  Connect to database
</Button>`;

export const whiteConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  background: (colorScheme) =>
    colorScheme === 'dark' ? DEFAULT_THEME.colors.dark[7] : DEFAULT_THEME.colors.gray[1],
  configurator: [{ name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' }],
};
