import React from 'react';
import { DefaultProps, useMantineDefaultProps, StylesApiProvider } from '@mantine/styles';
import { Box } from '../Box';
import { AccordionProviderProps, AccordionProvider } from './AccordionProvider';
import { AccordionItem, AccordionItemStylesNames } from './AccordionItem/AccordionItem';
import { AccordionControl } from './AccordionControl/AccordionControl';
import { AccordionPanel } from './AccordionPanel/AccordionPanel';
import { ChevronIcon } from './ChevronIcon';

export type AccordionStylesNames = AccordionItemStylesNames;

export interface AccordionProps<Multiple extends boolean = false>
  extends AccordionProviderProps<Multiple>,
    DefaultProps<AccordionItemStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, keyof AccordionProviderProps<Multiple>> {}

const defaultProps: Partial<AccordionProps> = {
  multiple: false,
  disableChevronRotation: false,
  transitionDuration: 200,
  chevronPosition: 'right',
  chevronSize: 24,
  order: 3,
  chevron: <ChevronIcon />,
};

export function Accordion<Multiple extends boolean = false>(props: AccordionProps<Multiple>) {
  const {
    id,
    loop,
    children,
    multiple,
    value,
    defaultValue,
    onChange,
    transitionDuration,
    disableChevronRotation,
    chevronPosition,
    chevronSize,
    order,
    chevron,
    classNames,
    styles,
    unstyled,
    ...others
  } = useMantineDefaultProps<AccordionProps<Multiple>>(
    'Accordion',
    defaultProps as AccordionProps<Multiple>,
    props
  );

  return (
    <AccordionProvider
      id={id}
      multiple={multiple}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      loop={loop}
      transitionDuration={transitionDuration}
      disableChevronRotation={disableChevronRotation}
      chevronPosition={chevronPosition}
      chevronSize={chevronSize}
      order={order}
      chevron={chevron}
    >
      <StylesApiProvider classNames={classNames} styles={styles} unstyled={unstyled}>
        <Box {...others} data-accordion>
          {children}
        </Box>
      </StylesApiProvider>
    </AccordionProvider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Control = AccordionControl;
Accordion.Panel = AccordionPanel;
Accordion.displayName = '@mantine/core/Accordion';
