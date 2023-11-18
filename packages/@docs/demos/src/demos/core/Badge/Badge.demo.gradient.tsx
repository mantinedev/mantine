import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Badge } from '@mantine/core';
import { gradientControls } from '../../../shared';

const code = (props: any) => `
import { Badge } from '@mantine/core';

function Demo() {
  return (
    <Badge
      size="xl"
      variant="gradient"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      Gradient badge
    </Badge>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Badge
      size="xl"
      variant="gradient"
      gradient={{ from: props.gradientFrom, to: props.gradientTo, deg: props.gradientDegree }}
    >
      Gradient badge
    </Badge>
  );
}

export const gradient: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls,
};
