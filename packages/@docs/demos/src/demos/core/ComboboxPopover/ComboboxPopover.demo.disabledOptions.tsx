import { Button, ComboboxPopover } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
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
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>
          Select framework
        </Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}

export const disabledOptions: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
