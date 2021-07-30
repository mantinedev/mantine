import React from 'react';
import { Mark } from '../Mark';
import { Text } from '../../Text/Text';

const code = `
<Text>
  Thanks for stopping by and checking out <Mark>Mantine</Mark>, you are awesome!
</Text>
`;

function Demo() {
  return (
    <Text>
      Thanks for stopping by and checking out <Mark>Mantine</Mark>, you are awesome!
    </Text>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
