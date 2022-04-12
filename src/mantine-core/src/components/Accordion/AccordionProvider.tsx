import React from 'react';
import { useUncontrolled, useId, getSafeId } from '@mantine/utils';
import { AccordionContextProvider } from './Accordion.context';
import { AccordionValue, AccordionChevronPosition, AccordionHeadingOrder } from './Accordion.types';
import { ACCORDION_ERRORS } from './Accordion.errors';

export interface AccordionProviderProps<Multiple extends boolean = false> {
  /** Base id, used to generate ids that connect labels with controls, by default generated randomly */
  id?: string;

  /** Determines whether arrow key presses should loop though items (first to last and last to first) */
  loop?: boolean;

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

  /** Transition duration in ms, set 0 to disable transitions */
  transitionDuration?: number;

  /** Determines whether chevron rotation should be disabled */
  disableChevronRotation?: boolean;

  /** Determines position of the chevron */
  chevronPosition?: AccordionChevronPosition;

  /** Chevron size in px */
  chevronSize?: number;

  /** Heading order, has no effect on visuals */
  order?: AccordionHeadingOrder;

  /** Replaces chevron on all items */
  chevron?: React.ReactNode;
}

export function AccordionProvider<Multiple extends boolean = false>({
  children,
  multiple,
  value,
  defaultValue,
  onChange,
  id,
  loop,
  transitionDuration,
  disableChevronRotation,
  chevronPosition,
  chevronSize,
  order,
  chevron,
}: AccordionProviderProps<Multiple>) {
  const uid = useId(id);
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
      : itemValue === _value
      ? null
      : (itemValue as any);

    handleChange(nextValue);
  };

  return (
    <AccordionContextProvider
      value={{
        isItemActive,
        onChange: handleItemChange,
        getControlId: getSafeId(`${uid}-control`, ACCORDION_ERRORS.value.message),
        getRegionId: getSafeId(`${uid}-panel`, ACCORDION_ERRORS.value.message),
        id: uid,
        transitionDuration,
        disableChevronRotation,
        chevronPosition,
        chevronSize,
        order,
        chevron,
        loop,
      }}
    >
      {children}
    </AccordionContextProvider>
  );
}
