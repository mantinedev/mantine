import { Button, ComboboxPopover } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Open dropdown above</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`;

function Demo() {
  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>
          Open dropdown above
        </Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}

export const dropdownPosition: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
