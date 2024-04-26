import { Pagination, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 boundary (default)</Text>
      <Pagination total={20} boundaries={1} defaultValue={10} />

      <Text mt="xl" mb="xs">2 boundaries</Text>
      <Pagination total={20} boundaries={2} defaultValue={10} />

      <Text mt="xl" mb="xs">3 boundaries</Text>
      <Pagination total={20} boundaries={3} defaultValue={10} />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Text mb="xs">1 boundary (default)</Text>
      <Pagination total={20} boundaries={1} defaultValue={10} />

      <Text mt="xl" mb="xs">
        2 boundaries
      </Text>
      <Pagination total={20} boundaries={2} defaultValue={10} />

      <Text mt="xl" mb="xs">
        3 boundaries
      </Text>
      <Pagination total={20} boundaries={3} defaultValue={10} />
    </>
  );
}

export const boundaries: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
