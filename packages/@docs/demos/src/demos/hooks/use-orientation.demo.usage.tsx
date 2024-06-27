import { Code, Text } from '@mantine/core';
import { useOrientation } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Code, Text } from '@mantine/core';
import { useOrientation } from '@mantine/hooks';

function Demo() {
  const { angle, type } = useOrientation();
  return (
    <>
      <Text>
        Angle: <Code>{angle}</Code>
      </Text>
      <Text>
        Type: <Code>{type}</Code>
      </Text>
    </>
  );
}
`;

function Demo() {
  const { angle, type } = useOrientation();
  return (
    <>
      <Text>
        Angle: <Code>{angle}</Code>
      </Text>
      <Text>
        Type: <Code>{type}</Code>
      </Text>
    </>
  );
}

export const useOrientationUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
