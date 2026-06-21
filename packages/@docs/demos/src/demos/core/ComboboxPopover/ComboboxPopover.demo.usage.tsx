import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      value={value}
      onChange={setValue}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select framework'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover data={['React', 'Angular', 'Vue', 'Svelte']} value={value} onChange={setValue}>
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>
          {value || 'Select framework'}
        </Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
