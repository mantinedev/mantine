import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import { AccordionProviderProps, AccordionProvider } from './AccordionProvider';
import { AccordionItem } from './AccordionItem/AccordionItem';

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
  transitionDuration,
  disableIconRotation,
  iconPosition,
  offsetIcon,
  iconSize,
  order,
  icon,
  ...others
}: AccordionProps<Multiple>) {
  return (
    <AccordionProvider
      id={id}
      multiple={multiple}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      loop={loop}
      transitionDuration={transitionDuration}
      disableIconRotation={disableIconRotation}
      iconPosition={iconPosition}
      offsetIcon={offsetIcon}
      iconSize={iconSize}
      order={order}
      icon={icon}
    >
      <Box {...others}>{children}</Box>
    </AccordionProvider>
  );
}

Accordion.Item = AccordionItem;
