import React from 'react';
import { Accordion, AccordionItem } from '../Accordion';

const code = `
<Accordion>
  <AccordionItem label="Customization">
    Colors, fonts, shadows and many other parts are customizable to fit your design needs
  </AccordionItem>

  <AccordionItem label="Flexibility">
    Configure components appearance and behavior with vast amount of settings or overwrite any
    part of component styles
  </AccordionItem>

  <AccordionItem label="No annoying focus ring">
    With new :focus-visible pseudo-class focus ring appears only when user navigates with
    keyboard
  </AccordionItem>
</Accordion>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <Accordion>
        <AccordionItem label="Customization">
          Colors, fonts, shadows and many other parts are customizable to fit your design needs
        </AccordionItem>

        <AccordionItem label="Flexibility">
          Configure components appearance and behavior with vast amount of settings or overwrite any
          part of component styles
        </AccordionItem>

        <AccordionItem label="No annoying focus ring">
          With new :focus-visible pseudo-class focus ring appears only when user navigates with
          keyboard
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
