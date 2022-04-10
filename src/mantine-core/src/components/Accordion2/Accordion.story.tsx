import React from 'react';
import { Accordion } from './Accordion';

export default { title: 'Accordion2' };

export const Usage = () => (
  <Accordion defaultValue="flex" sx={{ maxWidth: 400 }} mx="auto">
    <Accordion.Item label="Customization" value="customize">
      Colors, fonts, shadows and many other parts are customizable to fit your design needs
    </Accordion.Item>

    <Accordion.Item label="Flexibility" value="flex">
      Configure components appearance and behavior with vast amount of settings or overwrite any
      part of component styles
    </Accordion.Item>

    <Accordion.Item label="No annoying focus ring" value="focus">
      With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
    </Accordion.Item>
  </Accordion>
);
