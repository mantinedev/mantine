import React, { useState } from 'react';
import { Accordion } from './Accordion';

export default { title: 'Accordion2' };

const _items = (
  <>
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
  </>
);

export const Usage = () => (
  <Accordion defaultValue="flex" sx={{ maxWidth: 400 }} mx="auto">
    {_items}
  </Accordion>
);

export const Multiple = () => (
  <Accordion multiple defaultValue={['flex']} sx={{ maxWidth: 400 }} mx="auto">
    {_items}
  </Accordion>
);

export const ControlledSingle = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <Accordion value={value} onChange={setValue} sx={{ maxWidth: 400 }} mx="auto">
      {_items}
    </Accordion>
  );
};

export const ControlledMultiple = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Accordion multiple value={value} onChange={setValue} sx={{ maxWidth: 400 }} mx="auto">
      {_items}
    </Accordion>
  );
};

export const NoLoop = () => (
  <Accordion loop={false} sx={{ maxWidth: 400 }} mx="auto">
    {_items}
  </Accordion>
);

export const Disabled = () => (
  <Accordion loop={false} sx={{ maxWidth: 400 }} mx="auto">
    <Accordion.Item label="Customization" value="customize">
      Colors, fonts, shadows and many other parts are customizable to fit your design needs
    </Accordion.Item>

    <Accordion.Item label="Flexibility" value="flex" disabled>
      Configure components appearance and behavior with vast amount of settings or overwrite any
      part of component styles
    </Accordion.Item>

    <Accordion.Item label="No annoying focus ring" value="focus">
      With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
    </Accordion.Item>
  </Accordion>
);
