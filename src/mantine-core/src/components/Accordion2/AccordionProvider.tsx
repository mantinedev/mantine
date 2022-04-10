import React from 'react';
import { useUncontrolled } from '@mantine/utils';
import { AccordionContextProvider } from './Accordion.context';
import { AccordionValue } from './Accordion.types';
import { ACCORDION_ERRORS } from './Accordion.errors';

export interface AccordionProviderProps<Multiple extends boolean = false> {
  /** Accordion content */
  children: React.ReactNode;

  /** Determines whether multiple items can be opened at a time */
  multiple?: Multiple;

  /** Value for controlled component */
  value?: AccordionValue<Multiple>;

  /** Default value for uncontrolled component */
  defaultValue?: AccordionValue<Multiple>;

  /** Callback for controlled component */
  onChange?(value: AccordionValue<Multiple>): void;
}

export function AccordionProvider<Multiple extends boolean = false>({
  children,
  multiple,
  value,
  defaultValue,
  onChange,
}: AccordionProviderProps<Multiple>) {
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: multiple ? ([] as any) : null,
    onChange,
    errorMessage: ACCORDION_ERRORS.onChange.message,
  });

  const isItemActive = (itemValue: string) =>
    Array.isArray(_value) ? _value.includes(itemValue) : itemValue === _value;

  const handleItemChange = (itemValue: string) => {
    const nextValue: AccordionValue<Multiple> = Array.isArray(_value)
      ? _value.includes(itemValue)
        ? _value.filter((selectedValue) => selectedValue !== itemValue)
        : [..._value, itemValue]
      : (itemValue as any);

    handleChange(nextValue);
  };

  return (
    <AccordionContextProvider
      value={{ isItemActive, onChange: handleItemChange, loop: false, id: 'test' }}
    >
      {children}
    </AccordionContextProvider>
  );
}
