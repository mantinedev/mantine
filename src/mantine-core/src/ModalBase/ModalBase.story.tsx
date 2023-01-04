import React from 'react';
import { ModalBase } from './ModalBase';

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
  return (
    <div style={{ padding: 40 }}>
      <ModalBase opened onClose={() => console.log('Close')} __staticSelector="Modal">
        <ModalBase.CloseButton aria-label="Test button" />
        <ModalBase.Overlay />
      </ModalBase>
    </div>
  );
}
