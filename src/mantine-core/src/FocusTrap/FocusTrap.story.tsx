import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Button } from '../Button';
import { FocusTrap } from './FocusTrap';

export default { title: 'FocusTrap' };

export function Usage() {
  const [active, handlers] = useDisclosure(false);
  return (
    <>
      <Button onClick={handlers.toggle}>Toggle</Button>
      <FocusTrap active={active}>
        <div>
          <input />
          <input />
          <input />
        </div>
      </FocusTrap>
    </>
  );
}
