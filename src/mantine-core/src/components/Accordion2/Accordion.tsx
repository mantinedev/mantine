import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import { AccordionProviderProps, AccordionProvider } from './AccordionProvider';

export interface AccordionProps<Multiple extends boolean = false>
  extends AccordionProviderProps<Multiple>,
    DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, keyof AccordionProviderProps<Multiple>> {}

export function Accordion<Multiple extends boolean = false>({
  id,
  loop,
  children,
  multiple,
  value,
  defaultValue,
  onChange,
  ...others
}: AccordionProps<Multiple>) {
  return (
    <AccordionProvider
      id={id}
      loop={loop}
      multiple={multiple}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      <Box {...others}>{children}</Box>
    </AccordionProvider>
  );
}
