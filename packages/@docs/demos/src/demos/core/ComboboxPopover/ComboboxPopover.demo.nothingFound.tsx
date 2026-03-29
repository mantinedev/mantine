import { Button, ComboboxPopover } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={[]}
      nothingFoundMessage="No options available"
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Open dropdown</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`;

function Demo() {
  return (
    <ComboboxPopover data={[]} nothingFoundMessage="No options available">
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>
          Open dropdown
        </Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}

export const nothingFound: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
