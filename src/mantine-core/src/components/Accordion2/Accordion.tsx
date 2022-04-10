import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { AccordionValue } from './Accordion.types';

export interface AccordionProps<Multiple extends boolean = false>
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  value?: AccordionValue<Multiple>;
  defaultValue?: AccordionValue<Multiple>;
  onChange?(value: AccordionValue<Multiple>): void;
}
