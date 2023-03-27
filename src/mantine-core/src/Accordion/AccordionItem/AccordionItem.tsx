import React, { forwardRef } from 'react';
import { DefaultProps, Selectors, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import { AccordionItemContextProvider } from '../AccordionItem.context';
import useStyles from './AccordionItem.styles';
import { useAccordionContext } from '../Accordion.context';

export type AccordionItemStylesNames = Selectors<typeof useStyles>;

export interface AccordionItemProps
  extends DefaultProps<AccordionItemStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Value that is used to manage accordion state */
  value: string;
}

const defaultProps: Partial<DefaultProps> = {};

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>((props, ref) => {
  const { children, className, value, ...others } = useComponentDefaultProps(
    'AccordionItem',
    defaultProps,
    props
  );

  const ctx = useAccordionContext();
  const { classes, cx } = useStyles(
    { radius: ctx.radius },
    {
      name: 'Accordion',
      classNames: ctx.classNames,
      styles: ctx.styles,
      unstyled: ctx.unstyled,
      variant: ctx.variant,
    }
  );

  return (
    <AccordionItemContextProvider value={{ value }}>
      <Box
        ref={ref}
        className={cx(classes.item, className)}
        data-active={ctx.isItemActive(value) || undefined}
        {...others}
      >
        {children}
      </Box>
    </AccordionItemContextProvider>
  );
});

AccordionItem.displayName = '@mantine/core/AccordionItem';
