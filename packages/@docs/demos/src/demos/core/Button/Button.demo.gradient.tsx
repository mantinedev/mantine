import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button } from '@mantine/core';
import { gradientControls } from '../../../shared';

const code = (props: any) => `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      variant="gradient"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      Gradient button
    </Button>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Button
      variant="gradient"
      gradient={{ from: props.gradientFrom, to: props.gradientTo, deg: props.gradientDegree }}
    >
      Gradient button
    </Button>
  );
}

export const gradient: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls,
};
