import { Treemap } from '@mantine/charts';
import { SimpleGrid } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Treemap } from '@mantine/charts';
import { SimpleGrid } from '@mantine/core';

const data = [
  { name: 'USA', value: 400, color: 'indigo.0' },
  { name: 'India', value: 300, color: 'yellow.1' },
  { name: 'Japan', value: 100, color: 'teal.1' },
  { name: 'Other', value: 200, color: 'gray.2' },
];

function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }}>
      <Treemap data={data} height={200} />
      <Treemap data={data} height={200} autoContrast={false} />
    </SimpleGrid>
  );
}
`;

const data = [
  { name: 'USA', value: 400, color: 'indigo.0' },
  { name: 'India', value: 300, color: 'yellow.1' },
  { name: 'Japan', value: 100, color: 'teal.1' },
  { name: 'Other', value: 200, color: 'gray.2' },
];

function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }}>
      <Treemap data={data} height={200} />
      <Treemap data={data} height={200} autoContrast={false} />
    </SimpleGrid>
  );
}

export const autoContrast: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
