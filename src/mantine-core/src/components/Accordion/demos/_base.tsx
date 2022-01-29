import React from 'react';
import { baseAccordionMockdata } from '@mantine/mockdata';
import { Accordion, AccordionProps } from '../Accordion';

export const baseDemoItems = baseAccordionMockdata.map((item) => (
  <Accordion.Item label={item.label} key={item.label}>
    {item.content}
  </Accordion.Item>
));

export function BaseDemo(props: Partial<AccordionProps>) {
  return <Accordion {...props}>{baseDemoItems}</Accordion>;
}
