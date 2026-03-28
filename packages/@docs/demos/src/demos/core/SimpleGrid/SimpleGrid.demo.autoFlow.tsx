import { SimpleGrid, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { GridItem } from './_demo-item';

const code = `
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* auto-fill: empty tracks are preserved, items do not stretch */}
      <SimpleGrid minColWidth="200px" autoFlow="auto-fill">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SimpleGrid>

      {/* auto-fit: empty tracks are collapsed, items stretch to fill the row */}
      <SimpleGrid minColWidth="200px" autoFlow="auto-fit">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SimpleGrid>
    </>
  );
}
`;

const items = Array(3)
  .fill(0)
  .map((_, index) => <GridItem key={index}>{index + 1}</GridItem>);

function Demo() {
  return (
    <Stack>
      <div>
        <Text mb="xs" fw={500}>
          auto-fill
        </Text>
        <SimpleGrid minColWidth="200px" autoFlow="auto-fill">
          {items}
        </SimpleGrid>
      </div>
      <div>
        <Text mb="xs" fw={500}>
          auto-fit
        </Text>
        <SimpleGrid minColWidth="200px" autoFlow="auto-fit">
          {items}
        </SimpleGrid>
      </div>
    </Stack>
  );
}

export const autoFlow: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
