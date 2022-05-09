import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Input } from '../Input';
import { ScrollArea } from '../ScrollArea';
import { ComboboxPopover } from './ComboboxPopover/ComboboxPopover';

export default { title: 'Combobox' };

const content = Array(50)
  .fill(0)
  .map((_, index) => <div key={index}>item {index}</div>);

export function Usage() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <ComboboxPopover opened={opened} id="hello">
        <ComboboxPopover.Target>
          <div>
            <Input onFocus={open} onBlur={close} />
          </div>
        </ComboboxPopover.Target>

        <ComboboxPopover.Dropdown id="hello">{content}</ComboboxPopover.Dropdown>
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
          {content}
        </ComboboxPopover.Dropdown>
      </ComboboxPopover>
    </div>
  );
}
