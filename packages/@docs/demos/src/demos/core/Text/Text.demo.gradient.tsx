import { Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { gradientControls } from '../../../shared';

const code = (props: any) => `
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      Gradient Text
    </Text>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: props.gradientFrom, to: props.gradientTo, deg: props.gradientDegree }}
    >
      Gradient Text
    </Text>
  );
}

export const gradient: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls,
};
