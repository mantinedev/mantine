import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { RatingProps, Rating, Group } from '@mantine/core';

const codeTemplate = (props: string) => `
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating defaultValue={2}${props} />
}
`;

function Wrapper(props: RatingProps) {
  return (
    <Group position="center">
      <Rating defaultValue={2} {...props} />
    </Group>
  );
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'yellow', defaultValue: 'yellow' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'count', type: 'number', initialValue: 5, defaultValue: 5, min: 1, max: 15 },
    { name: 'highlightSelectedOnly', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
