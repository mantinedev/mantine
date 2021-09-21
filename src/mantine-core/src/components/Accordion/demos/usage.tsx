import React from 'react';
import { BaseDemo } from './_base';

const code = `
<Accordion>
  <Accordion.Item label="Customization">
    Colors, fonts, shadows and many other parts are customizable to fit your design needs
  </Accordion.Item>

  <Accordion.Item label="Flexibility">
    Configure components appearance and behavior with vast amount of settings or overwrite any
    part of component styles
  </Accordion.Item>

  <Accordion.Item label="No annoying focus ring">
    With new :focus-visible pseudo-class focus ring appears only when user navigates with
    keyboard
  </Accordion.Item>
</Accordion>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <BaseDemo />
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
