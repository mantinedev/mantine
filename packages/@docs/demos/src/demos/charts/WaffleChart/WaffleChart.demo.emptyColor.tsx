import { WaffleChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { WaffleChart } from '@mantine/charts';

function Demo() {
  return (
    <WaffleChart
      data={[{ name: 'Completed', value: 68, color: 'teal' }]}
      total={100}
      emptyColor="gray.3"
    />
  );
}
`;

function Demo() {
  return (
    <WaffleChart
      data={[{ name: 'Completed', value: 68, color: 'teal' }]}
      total={100}
      emptyColor="gray.3"
    />
  );
}

export const emptyColor: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
