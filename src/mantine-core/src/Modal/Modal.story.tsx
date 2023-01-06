// import React, { useState } from 'react';
// import { Modal } from './Modal';
// import { Button } from '../Button';
// import { ColorInput } from '../ColorInput';

// export default { title: 'Modal' };

// function WrappedModal(
//   props: Omit<React.ComponentPropsWithoutRef<typeof Modal>, 'opened' | 'onClose'>
// ) {
//   const [opened, setOpened] = useState(false);

//   return (
//     <div style={{ padding: 50 }}>
//       <Button onClick={() => setOpened(true)}>Open Modal</Button>
//       <Modal opened={opened} onClose={() => setOpened(false)} {...props} />
//     </div>
//   );
// }

// const content = Array(40)
//   .fill(0)
//   .map((_, index) => (
//     <p key={index}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt architecto
//       beatae iure, aliquam laborum molestias ratione delectus sed cupiditate, nobis impedit eos vero
//       neque magni minima repellendus! Beatae, illo.
//     </p>
//   ));

// export function FullScreenWithOverflow() {
//   return (
//     <div style={{ padding: 40 }}>
//       <WrappedModal fullScreen>{content}</WrappedModal>
//       {content}
//     </div>
//   );
// }

// export function SizeAuto() {
//   return (
//     <div style={{ padding: 40 }}>
//       <WrappedModal size="auto">{content}</WrappedModal>
//     </div>
//   );
// }

// export function WithPageScrollbars() {
//   return (
//     <div style={{ padding: 40 }}>
//       <WrappedModal>Wrapped modal</WrappedModal>
//       {content}
//     </div>
//   );
// }

// export function WithPortalChildren() {
//   return (
//     <div style={{ padding: 40 }}>
//       <WrappedModal>
//         <ColorInput label="No Portal" mb="md" />
//         <ColorInput label="Within Portal" mb="md" withinPortal />
//       </WrappedModal>
//     </div>
//   );
// }
