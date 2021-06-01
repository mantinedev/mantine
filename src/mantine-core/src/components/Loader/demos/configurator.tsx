import React from 'react';
import { Loader, LoaderProps } from '../Loader';
import { Group } from '../../Group/Group';

function Wrapper(props: LoaderProps) {
  return (
    <Group position="center">
      <Loader data-mantine-composable {...props} />
    </Group>
  );
}

const codeTemplate = (props: string) => `<Loader${props} />`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
  ],
};
