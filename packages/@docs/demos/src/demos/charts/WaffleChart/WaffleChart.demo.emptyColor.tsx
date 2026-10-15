import { WaffleChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { WaffleChart } from '@mantine/charts';

function Demo() {
  return (
    <WaffleChart
      data={[{ name: 'Completed', value: 68, color: 'teal' }]}
      total={100}
      emptyColor="var(--mantine-color-teal-light)"
    />
  );
}
`;

function Demo() {
  return (
    <WaffleChart
      data={[{ name: 'Completed', value: 68, color: 'teal' }]}
      total={100}
      emptyColor="var(--mantine-color-teal-light)"
    />
  );
}

export const emptyColor: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
