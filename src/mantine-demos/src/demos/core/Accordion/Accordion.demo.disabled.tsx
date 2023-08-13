import { Accordion, Box } from '@mantine/core';
import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { baseAccordionMockdata } from './_mockdata';

const code = `
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion>
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control disabled>Flexibility</Accordion.Control>
        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;

export const baseDemoItems = baseAccordionMockdata.map((item, index) => (
  <Accordion.Item key={item.label} value={item.id}>
    <Accordion.Control disabled={index === 1}>{item.label}</Accordion.Control>
    <Accordion.Panel>{item.content}</Accordion.Panel>
  </Accordion.Item>
));

function Demo() {
  return (
    <Box maw={380} mx="auto">
      <Accordion>{baseDemoItems}</Accordion>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
