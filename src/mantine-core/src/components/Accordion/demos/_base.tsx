import React from 'react';
import { Accordion, AccordionProps } from '../Accordion';
import { BASE_DATA } from './_mockdata';

export function BaseDemo(props: Partial<AccordionProps>) {
  return (
    <Accordion {...props}>
      {BASE_DATA.map((item) => (
        <Accordion.Item label={item.label} key={item.label}>
          {item.content}
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
