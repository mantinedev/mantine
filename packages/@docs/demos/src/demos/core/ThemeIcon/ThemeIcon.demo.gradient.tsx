import { IconHeart } from '@tabler/icons-react';
import { ThemeIcon } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { gradientControls } from '../../../shared';

const code = (props: any) => `
import { ThemeIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      <IconHeart />
    </ThemeIcon>
  );
}
`;

function Wrapper(props: any) {
  return (
    <ThemeIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: props.gradientFrom, to: props.gradientTo, deg: props.gradientDegree }}
    >
      <IconHeart />
    </ThemeIcon>
  );
}

export const gradient: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls,
};
