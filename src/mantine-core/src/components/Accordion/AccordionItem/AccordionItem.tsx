import React, { forwardRef } from 'react';
import { DefaultProps, ClassNames, useContextStylesApi } from '@mantine/styles';
import { Box } from '../../Box';
import { AccordionItemContextProvider } from '../AccordionItem.context';
import useStyles from './AccordionItem.styles';

export type AccordionItemStylesNames = ClassNames<typeof useStyles>;

export interface AccordionItemProps
  extends DefaultProps<AccordionItemStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  value: string;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, value, ...others }, ref) => {
    const { classNames, styles, unstyled } = useContextStylesApi();
    const { classes, cx } = useStyles(null, { name: 'Accordion', classNames, styles, unstyled });

    return (
      <AccordionItemContextProvider value={{ value }}>
        <Box ref={ref} className={cx(classes.item, className)} {...others}>
          {children}
        </Box>
      </AccordionItemContextProvider>
    );
  }
);

AccordionItem.displayName = '@mantine/core/AccordionItem';
