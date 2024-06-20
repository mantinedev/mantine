import { Pagination } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  return <Pagination total={10} />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
};
