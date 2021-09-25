import React from 'react';
import { Accordion, AccordionProps } from '../Accordion';
import { BASE_DATA } from './_mockdata';

export const baseDemoItems = BASE_DATA.map((item) => (
  <Accordion.Item label={item.label} key={item.label}>
    {item.content}
  </Accordion.Item>
));

export function BaseDemo(props: Partial<AccordionProps>) {
  return <Accordion {...props}>{baseDemoItems}</Accordion>;
}
