import { Button, ComboboxPopover } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 250, position: 'bottom-start' }}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Select framework</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`;

function Demo() {
  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 250, position: 'bottom-start' }}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>
          Select framework
        </Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}

export const dropdownWidth: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
