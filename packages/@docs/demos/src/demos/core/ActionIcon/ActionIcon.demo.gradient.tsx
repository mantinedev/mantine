import { HeartIcon } from '@phosphor-icons/react';
import { ActionIcon } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { gradientControls } from '../../../shared';

const code = (props: any) => `
import { ActionIcon } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ActionIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      <HeartIcon />
    </ActionIcon>
  );
}
`;

function Wrapper(props: any) {
  return (
    <ActionIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: props.gradientFrom, to: props.gradientTo, deg: props.gradientDegree }}
    >
      <HeartIcon />
    </ActionIcon>
  );
}

export const gradient: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls,
};
