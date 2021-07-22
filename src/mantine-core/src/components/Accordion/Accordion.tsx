import React from 'react';
import { useUncontrolled, useId } from '@mantine/hooks';
import { DefaultProps } from '../../theme';
import {
  AccordionItem,
  AccordionItemType,
  AccordionItemProps,
} from './AccordionItem/AccordionItem';
import { AccordionControl, AccordionControlStylesNames } from './AccordionControl/AccordionControl';

export type { AccordionItemProps };
export { AccordionItem };

export type AccordionStylesNames = AccordionControlStylesNames;

export interface AccordionProps
  extends DefaultProps<AccordionStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** <AccordionItem /> components only */
  children: React.ReactNode;

  /** Index of item which is initially opened */
  initialItem?: number;

  /** Initial state (controls opened state of accordion items) for uncontrolled component */
  initialState?: Record<string, boolean>;

  /** Controlled state (controls opened state of accordion items) */
  state?: Record<string, boolean>;

  /** onChange handler for controlled component */
  onChange?(state: Record<string, boolean>): void;

  /** Allow multiple items to be opened at the same time */
  multiple?: boolean;

  /** Open/close item transition duration in ms */
  transitionDuration?: number;

  /** Used to connect accordion items controls to related content */
  id?: string;
}

export function Accordion({
  children,
  initialItem = 0,
  initialState,
  state,
  onChange,
  multiple = false,
  transitionDuration = 200,
  themeOverride,
  classNames,
  styles,
  id,
  ...others
}: AccordionProps) {
  const uuid = useId(id);
  const items = React.Children.toArray(children).filter(
    (item: AccordionItemType) => item.type === AccordionItem
  ) as AccordionItemType[];

  const _initialState =
    initialState ||
    (items.reduce((acc, item, index) => {
      acc[index] = index === initialItem;
      return acc;
    }, {}) as Record<string, boolean>);

  const [value, setValue] = useUncontrolled({
    value: state,
    defaultValue: _initialState,
    finalValue: {} as Record<string, boolean>,
    onChange,
    rule: (val) => val !== null && typeof val === 'object',
  });

  const handleItemToggle = (index: number) => {
    if (multiple) {
      setValue({ ...value, [index]: !value[index] });
    } else {
      const newValues = items.reduce((acc, item, itemIndex) => {
        acc[itemIndex] = false;
        return acc;
      }, {}) as Record<string, boolean>;
      newValues[index] = !value[index];
      setValue(newValues);
    }
  };

  const controls = items.map((item, index) => (
    <AccordionControl
      {...item.props}
      key={index}
      themeOverride={themeOverride}
      transitionDuration={transitionDuration}
      opened={value[index]}
      onToggle={() => handleItemToggle(index)}
      classNames={classNames}
      styles={styles}
      id={`${uuid}-${index}`}
    />
  ));

  return <div {...others}>{controls}</div>;
}

Accordion.displayName = '@mantine/core/Accordion';
