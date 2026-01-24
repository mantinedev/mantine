import {
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { Collapse } from '../../Collapse';
import { useAccordionContext } from '../Accordion.context';
import classes from '../Accordion.module.css';
import { useAccordionItemContext } from '../AccordionItem.context';

export type AccordionPanelStylesNames = 'panel' | 'content';

export interface AccordionPanelProps
  extends BoxProps, CompoundStylesApiProps<AccordionPanelFactory>, ElementProps<'div'> {
  /** Called when the panel animation completes */
  onTransitionEnd?: () => void;

  /** Called when the panel animation starts */
  onTransitionStart?: () => void;

  /** If set, overrides the Accordion-level `keepMounted` value. When undefined (default), uses Accordion's `keepMounted` setting. */
  keepMounted?: boolean;
}

export type AccordionPanelFactory = Factory<{
  props: AccordionPanelProps;
  ref: HTMLDivElement;
  stylesNames: AccordionPanelStylesNames;
  compound: true;
}>;

export const AccordionPanel = factory<AccordionPanelFactory>((props) => {
  const { classNames, className, style, styles, vars, children, keepMounted, ...others } = useProps(
    'AccordionPanel',
    null,
    props
  );

  const { value } = useAccordionItemContext();
  const ctx = useAccordionContext();

  return (
    <Collapse
      {...ctx.getStyles('panel', { className, classNames, style, styles })}
      expanded={ctx.isItemActive(value)}
      transitionDuration={ctx.transitionDuration ?? 200}
      role="region"
      id={ctx.getRegionId(value)}
      aria-labelledby={ctx.getControlId(value)}
      keepMounted={keepMounted ?? ctx.keepMounted}
      {...others}
    >
      <div {...ctx.getStyles('content', { classNames, styles })}>{children}</div>
    </Collapse>
  );
});

AccordionPanel.displayName = '@mantine/core/AccordionPanel';
AccordionPanel.classes = classes;
