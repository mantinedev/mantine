import { Pill, PillsInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { PillsInput, Pill } from '@mantine/core';

function Demo() {
  return (
    <PillsInput label="Enter items" loading>
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <PillsInput.Field placeholder="Enter value" />
      </Pill.Group>
    </PillsInput>
  );
}
`;

function Demo() {
  return (
    <PillsInput label="Enter items" loading>
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <PillsInput.Field placeholder="Enter value" />
      </Pill.Group>
    </PillsInput>
  );
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
