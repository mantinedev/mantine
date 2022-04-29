import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Popover } from './Popover';
import { Button } from '../Button';

export default { title: 'Popover2' };

export function Usage() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div style={{ padding: 40 }}>
      <Popover opened={opened}>
        <Popover.Target>
          <Button onClick={toggle}>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  );
}
