import React, { forwardRef } from 'react';
import { DefaultProps, useExtractedMargins, useSx } from '@mantine/styles';
import { useUuid } from '@mantine/hooks';
import {
  AccordionItem,
  AccordionItemStylesNames,
  AccordionItemType,
  AccordionIconPosition,
} from './AccordionItem/AccordionItem';
import { useAccordionState, AccordionState } from './use-accordion-state/use-accordion-state';

export interface AccordionProps
  extends DefaultProps<AccordionItemStylesNames>,
    Omit<React.ComponentPropsWithRef<'div'>, 'onChange'> {
  /** <AccordionItem /> components only */
  children: React.ReactNode;

  /** Index of item which is initially opened (uncontrolled component) */
  initialItem?: number;

  /** Initial state (controls opened state of accordion items) for uncontrolled component */
  initialState?: AccordionState;

  /** Controlled state (controls opened state of accordion items) */
  state?: AccordionState;

  /** onChange handler for controlled component */
  onChange?(state: AccordionState): void;

  /** Allow multiple items to be opened at the same time */
  multiple?: boolean;

  /** Open/close item transition duration in ms */
  transitionDuration?: number;

  /** Used to connect accordion items controls to related content */
  id?: string;

  /** Replace icon on all items */
  icon?: React.ReactNode;

  /** Should icon rotation be disabled */
  disableIconRotation?: boolean;

  /** Change icon position: left or right */
  iconPosition?: AccordionIconPosition;
}

type AccordionComponent = ((props: AccordionProps) => React.ReactElement) & {
  displayName: string;
  Item: typeof AccordionItem;
};

export const Accordion: AccordionComponent = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      children,
      initialItem = -1,
      initialState,
      state,
      onChange,
      multiple = false,
      disableIconRotation = false,
      transitionDuration = 200,
      iconPosition = 'left',
      icon,
      classNames,
      styles,
      style,
      className,
      id,
      sx,
      ...others
    }: AccordionProps,
    ref
  ) => {
    const { sxClassName } = useSx({ sx, className });
    const uuid = useUuid(id);
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const items = React.Children.toArray(children).filter(
      (item: AccordionItemType) => item.type === AccordionItem
    ) as AccordionItemType[];

    const [value, onToggle] = useAccordionState({
      multiple,
      items,
      initialItem,
      state,
      initialState,
      onChange,
    });

    const controls = items.map((item, index) => (
      <AccordionItem
        {...item.props}
        icon={item.props.icon || icon}
        iconPosition={item.props.iconPosition || iconPosition}
        disableIconRotation={disableIconRotation}
        key={index}
        transitionDuration={transitionDuration}
        opened={value[index]}
        onToggle={() => onToggle(index)}
        classNames={classNames}
        styles={styles}
        id={`${uuid}-${index}`}
      />
    ));

    return (
      <div style={mergedStyles} ref={ref} className={sxClassName} {...rest}>
        {controls}
      </div>
    );
  }
) as any;

Accordion.Item = AccordionItem;

Accordion.displayName = '@mantine/core/Accordion';
