import { Badge, Text } from '@mantine/core';
import { useScrollDirection } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Badge, Text } from '@mantine/core';
import { useScrollDirection } from '@mantine/hooks';

function Demo() {
  const direction = useScrollDirection();

  return (
    <>
      <Badge color={direction === 'up' ? 'teal' : direction === 'down' ? 'red' : 'gray'}>
        {direction === 'up' && '↑ Scrolling UP'}
        {direction === 'down' && '↓ Scrolling DOWN'}
        {direction === 'unknown' && 'Scroll to detect direction'}
      </Badge>
      <Text mt="xs">Scroll the page to see the scroll direction</Text>
    </>
  );
}
`;

function Demo() {
  const direction = useScrollDirection();

  return (
    <>
      <Badge color={direction === 'up' ? 'teal' : direction === 'down' ? 'red' : 'gray'}>
        {direction === 'up' && '↑ Scrolling UP'}
        {direction === 'down' && '↓ Scrolling DOWN'}
        {direction === 'unknown' && 'Scroll to detect direction'}
      </Badge>
      <Text mt="xs">Scroll the page to see the scroll direction</Text>
    </>
  );
}

export const useScrollDirectionDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
