import { SimpleGrid } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { defaultItems } from './_demo-item';

const code = `
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid cols={3} autoRows="minmax(100px, auto)">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`;

function Demo() {
  return (
    <SimpleGrid cols={3} autoRows="minmax(100px, auto)">
      {defaultItems}
    </SimpleGrid>
  );
}

export const autoRows: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
