import React from 'react';

export interface AccordionItemProps extends React.ComponentProps<'div'> {
  /** AccordionItem control label */
  label?: React.ReactNode;

  /** Icon on the left side of label */
  icon?: React.ReactNode;

  /** AccordionItem content */
  children?: React.ReactNode;

  /** Get tab control ref */
  elementRef?: React.ForwardedRef<HTMLButtonElement>;
}

export interface AccordionItemType {
  type: any;
  props: AccordionItemProps;
}

// Props should be kept for ts integration
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function AccordionItem(props: AccordionItemProps) {
  return null;
}

AccordionItem.displayName = '@mantine/core/AccordionItem';
