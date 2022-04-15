import React from 'react';
import { ClassNames, DefaultProps, useContextStylesApi } from '@mantine/styles';
import { Collapse } from '../../Collapse';
import { useAccordionContext } from '../Accordion.context';
import { useAccordionItemContext } from '../AccordionItem.context';
import useStyles from './AccordionPanel.styles';

export type AccordionPanelStylesNames = ClassNames<typeof useStyles>;

export interface AccordionPanelProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onTransitionEnd'> {
  /** Panel content */
  children?: React.ReactNode;
}

export function AccordionPanel({ children, className, ...others }: AccordionPanelProps) {
  const ctx = useAccordionContext();
  const { value } = useAccordionItemContext();
  const { classNames, styles, unstyled } = useContextStylesApi();
  const { classes, cx } = useStyles(
    { variant: ctx.variant, radius: ctx.radius },
    { name: 'Accordion', classNames, styles, unstyled }
  );

  return (
    <Collapse
      {...others}
      className={cx(classes.panel, className)}
      in={ctx.isItemActive(value)}
      transitionDuration={ctx.transitionDuration}
      role="region"
      id={ctx.getRegionId(value)}
      aria-labelledby={ctx.getControlId(value)}
    >
      <div className={classes.content}>{children}</div>
    </Collapse>
  );
}

AccordionPanel.displayName = '@mantine/core/AccordionPanel';
