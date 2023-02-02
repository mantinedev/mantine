import React, { useState } from 'react';
import { IconPictureInPicture } from '@tabler/icons-react';
import { Accordion } from './Accordion';

export default { title: 'Accordion' };

const _items = (
  <>
    <Accordion.Item value="customize">
      <Accordion.Control>Customization</Accordion.Control>
      <Accordion.Panel>
        Colors, fonts, shadows and many other parts are customizable to fit your design needs
      </Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value="flex">
      <Accordion.Control>Flexibility</Accordion.Control>
      <Accordion.Panel>
        Configure components appearance and behavior with vast amount of settings or overwrite any
        part of component styles
      </Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value="focus">
      <Accordion.Control>No annoying focus ring</Accordion.Control>
      <Accordion.Panel>
        With new :focus-visible pseudo-class focus ring appears only when user navigates with
        keyboard
      </Accordion.Panel>
    </Accordion.Item>
  </>
);

export const Variants = () => (
  <>
    <Accordion
      defaultValue="flex"
      sx={{ maxWidth: 400 }}
      mx="auto"
      mt="xl"
      variant="default"
      radius="md"
    >
      {_items}
    </Accordion>

    <Accordion
      defaultValue="flex"
      sx={{ maxWidth: 400 }}
      mx="auto"
      mt={50}
      variant="contained"
      radius="md"
    >
      {_items}
    </Accordion>

    <Accordion
      defaultValue="flex"
      sx={{ maxWidth: 400 }}
      mx="auto"
      mt={50}
      variant="filled"
      radius="md"
    >
      {_items}
    </Accordion>

    <Accordion
      defaultValue="flex"
      sx={{ maxWidth: 400 }}
      mx="auto"
      mt={50}
      variant="separated"
      radius="md"
    >
      {_items}
    </Accordion>
  </>
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
    <Accordion.Item value="customize">
      <Accordion.Control>Customization</Accordion.Control>
      <Accordion.Panel>
        Colors, fonts, shadows and many other parts are customizable to fit your design needs
      </Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value="flex">
      <Accordion.Control disabled>Flexibility</Accordion.Control>
      <Accordion.Panel>
        Configure components appearance and behavior with vast amount of settings or overwrite any
        part of component styles
      </Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value="focus">
      <Accordion.Control>No annoying focus ring</Accordion.Control>
      <Accordion.Panel>
        With new :focus-visible pseudo-class focus ring appears only when user navigates with
        keyboard
      </Accordion.Panel>
    </Accordion.Item>
  </Accordion>
);

export const Unstyled = () => (
  <Accordion unstyled sx={{ maxWidth: 400 }} mx="auto">
    {_items}
  </Accordion>
);

export const Nested = () => (
  <Accordion multiple sx={{ maxWidth: 400 }} mx="auto">
    <Accordion.Item value="item-1">
      <Accordion.Control>Nested 1</Accordion.Control>
      <Accordion.Panel>
        <Accordion>{_items}</Accordion>
      </Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value="item-2">
      <Accordion.Control>Nested 2</Accordion.Control>
      <Accordion.Panel>
        <Accordion>{_items}</Accordion>
      </Accordion.Panel>
    </Accordion.Item>
  </Accordion>
);

export const WithIcon = () => (
  <>
    <Accordion sx={{ maxWidth: 400 }} mx="auto">
      <Accordion.Item value="flex">
        <Accordion.Control icon={<IconPictureInPicture size={18} />}>Flexibility</Accordion.Control>
      </Accordion.Item>
    </Accordion>

    <Accordion sx={{ maxWidth: 400 }} mx="auto" chevronPosition="left">
      <Accordion.Item value="flex">
        <Accordion.Control icon={<IconPictureInPicture size={18} />}>Flexibility</Accordion.Control>
      </Accordion.Item>
    </Accordion>
  </>
);
