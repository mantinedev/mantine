import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useHovered } from '@mantine/utils';
import { Input } from '../Input';
import { ScrollArea } from '../ScrollArea';
import { ComboboxPopover } from './ComboboxPopover/ComboboxPopover';
import { ComboboxItems } from './ComboboxItems/ComboboxItems';

export default { title: 'Combobox' };

const items = Array(50)
  .fill(0)
  .map((_, index) => `item ${index}`);

export function Usage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [hovered, { setHovered, resetHovered }] = useHovered();

  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <ComboboxPopover opened={opened} id="hello">
        <ComboboxPopover.Target>
          <div>
            <Input<'input'>
              onFocus={open}
              onBlur={close}
              onKeyDown={(event) => {
                if (event.key === 'ArrowDown') {
                  setHovered((c) => c + 1);
                }

                if (event.key === 'ArrowUp') {
                  setHovered((c) => c - 1);
                }
              }}
            />
          </div>
        </ComboboxPopover.Target>

        <ComboboxPopover.Dropdown id="hello">
          <ComboboxItems data={items} hovered={hovered} />
        </ComboboxPopover.Dropdown>
      </ComboboxPopover>
    </div>
  );
}

export function WithScrollArea() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <ComboboxPopover opened={opened} id="hello">
        <ComboboxPopover.Target>
          <div>
            <Input onFocus={open} onBlur={close} />
          </div>
        </ComboboxPopover.Target>

        <ComboboxPopover.Dropdown id="hello" component={ScrollArea}>
          <ComboboxItems data={items} />
        </ComboboxPopover.Dropdown>
      </ComboboxPopover>
    </div>
  );
}
