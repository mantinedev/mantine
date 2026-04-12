import { Button, ComboboxPopover } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, ComboboxPopover } from '@mantine/core';

const data = Array(50)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <ComboboxPopover data={data} maxDropdownHeight={200}>
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Select option</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`;

const data = Array(50)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <ComboboxPopover data={data} maxDropdownHeight={200}>
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>
          Select option
        </Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}

export const scrollArea: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
