import React, { forwardRef } from 'react';
import { DefaultProps, ForwardRefWithStaticComponents } from '@mantine/styles';
import { useUuid, mergeRefs } from '@mantine/hooks';
import { Box } from '../Box';
import { filterChildrenByType } from '../../utils';
import {
  AccordionItem,
  AccordionItemStylesNames,
  AccordionIconPosition,
} from './AccordionItem/AccordionItem';
import { useAccordionState, AccordionState } from './use-accordion-state/use-accordion-state';
import { useAccordionFocus } from './use-accordion-focus/use-accordion-focus';

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

  /** Should icon be offset with padding, applicable only when iconPosition is right */
  offsetIcon?: boolean;

  /** Icon width in px */
  iconSize?: number;

  /** Heading level used for items */
  order?: 2 | 3 | 4 | 5 | 6;
}

type AccordionComponent = ForwardRefWithStaticComponents<
  AccordionProps,
  { Item: typeof AccordionItem }
>;

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
      offsetIcon = true,
      iconSize = 24,
      order = 3,
      icon,
      classNames,
      styles,
      id,
      ...others
    }: AccordionProps,
    ref
  ) => {
    const uuid = useUuid(id);
    const items = filterChildrenByType(children, AccordionItem);

    const { handleItemKeydown, assignControlRef } = useAccordionFocus(items.length);
    const [value, handlers] = useAccordionState({
      multiple,
      total: items.length,
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
        onToggle={() => handlers.toggle(index)}
        classNames={item.props?.classNames || classNames}
        styles={item.props?.styles || styles}
        id={`${uuid}-${index}`}
        onControlKeyDown={handleItemKeydown(index)}
        controlRef={mergeRefs(assignControlRef(index), item.props?.controlRef)}
        offsetIcon={offsetIcon}
        iconSize={iconSize}
        order={order}
      />
    ));

    return (
      <Box ref={ref} {...others}>
        {controls}
      </Box>
    );
  }
) as any;

Accordion.Item = AccordionItem;
Accordion.displayName = '@mantine/core/Accordion';
