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
      label="Smooth scroll with keyboard navigation"
      placeholder="Pick value"
      data={data}
      scrollBehavior="smooth"
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
      label="Smooth scroll with keyboard navigation"
      placeholder="Pick value"
      data={data}
      scrollBehavior="smooth"
    />
  );
}

export const scrollBehavior: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
