import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { ModalBase } from './ModalBase';
import { Button } from '../Button';

export default { title: 'ModalBase' };

// function Demo() {
//   return (
//     <ModalBase>
//       <ModalBase.CloseButton />
//       <ModalBase.Content>
//         <ModalBase.Header>Title</ModalBase.Header>
//         <ModalBase.Body>Modal content</ModalBase.Body>
//         <ModalBase.Footer>Modal Footer</ModalBase.Footer>
//       </ModalBase.Content>
//       <ModalBase.Overlay />
//     </ModalBase>
//   );
// }

export function Usage() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div style={{ padding: 40 }}>
      <ModalBase opened={opened} onClose={close} __staticSelector="Modal">
        <ModalBase.CloseButton aria-label="Test button" />
        <ModalBase.Overlay />
      </ModalBase>

      <Button onClick={open}>Open modal</Button>
    </div>
  );
}
