import { SemiCircleProgress, SimpleGrid } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { SemiCircleProgress, SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid cols={{ sm:2 }} spacing="xl">
      <SemiCircleProgress
        value={60}
        orientation="up"
        fillDirection="left-to-right"
        label="Up, L→R"
        size={150}
      />
      <SemiCircleProgress
        value={60}
        orientation="up"
        fillDirection="right-to-left"
        label="Up, R→L"
        size={150}
      />
      <SemiCircleProgress
        value={60}
        orientation="down"
        fillDirection="left-to-right"
        label="Down, L→R"
        size={150}
      />
      <SemiCircleProgress
        value={60}
        orientation="down"
        fillDirection="right-to-left"
        label="Down, R→L"
        size={150}
      />
    </SimpleGrid>
  );
}
`;

function Demo() {
  return (
    <SimpleGrid cols={{ sm: 2 }} spacing="xl">
      <SemiCircleProgress
        value={60}
        orientation="up"
        fillDirection="left-to-right"
        label="Up, L→R"
        size={150}
      />
      <SemiCircleProgress
        value={60}
        orientation="up"
        fillDirection="right-to-left"
        label="Up, R→L"
        size={150}
      />
      <SemiCircleProgress
        value={60}
        orientation="down"
        fillDirection="left-to-right"
        label="Down, L→R"
        size={150}
      />
      <SemiCircleProgress
        value={60}
        orientation="down"
        fillDirection="right-to-left"
        label="Down, R→L"
        size={150}
      />
    </SimpleGrid>
  );
}

export const orientations: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
  centered: true,
};
