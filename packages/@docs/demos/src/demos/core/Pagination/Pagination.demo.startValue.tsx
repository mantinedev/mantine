import { Pagination, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">Pages 5–15 (startValue=5, total=15)</Text>
      <Pagination total={15} startValue={5} defaultValue={5} />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Text mb="xs">Pages 5–15 (startValue=5, total=15)</Text>
      <Pagination total={15} startValue={5} defaultValue={5} />
    </>
  );
}

export const startValue: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
