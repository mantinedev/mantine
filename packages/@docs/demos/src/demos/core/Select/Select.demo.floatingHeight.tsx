import { Select } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Select } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <Select
      label="Fits viewport height"
      placeholder="Pick value"
      data={data}
      floatingHeight="viewport"
    />
  );
}
`;

const data = Array(100)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <Select
      label="Fits viewport height"
      placeholder="Pick value"
      data={data}
      floatingHeight="viewport"
    />
  );
}

export const floatingHeight: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
