import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { Collapse } from '../../Collapse';
import { useAccordionContext } from '../Accordion.context';
import { useAccordionItemContext } from '../AccordionItem.context';
import useStyles from './AccordionPanel.styles';

export interface AccordionPanelProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onTransitionEnd'> {
  children?: React.ReactNode;
}

export function AccordionPanel({ children, className, ...others }: AccordionPanelProps) {
  const ctx = useAccordionContext();
  const { value } = useAccordionItemContext();
  const { classes, cx } = useStyles();

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
