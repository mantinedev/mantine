import React from 'react';
import { Accordion, AccordionProps } from '@mantine/core';
import { baseAccordionMockdata } from './_mockdata';

export const baseDemoItems = baseAccordionMockdata.map((item) => (
  <Accordion.Item key={item.label} value={item.id}>
    <Accordion.Control>{item.label}</Accordion.Control>
    <Accordion.Panel>{item.content}</Accordion.Panel>
  </Accordion.Item>
));

export function BaseDemo(props: Partial<AccordionProps>) {
  return <Accordion {...props}>{baseDemoItems}</Accordion>;
}
