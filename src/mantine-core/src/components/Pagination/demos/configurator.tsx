import React from 'react';
import { Pagination } from '../Pagination';
import { Group } from '../../Group/Group';

function Wrapper(props: any) {
  return (
    <Group position="center">
      <Pagination {...props} />
    </Group>
  );
}

const codeTemplate = (props: string) => `<Pagination${props} />`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'total', type: 'number', initialValue: 10, min: 1, max: 30 },
    { name: 'siblings', type: 'number', initialValue: 1, defaultValue: 1, min: 0, max: 5 },
    { name: 'boundary', type: 'number', initialValue: 1, defaultValue: 1, min: 0, max: 5 },
  ],
};
