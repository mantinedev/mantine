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
import { useAccordionItemContext } from '../AccordionItem.context';
import classes from '../Accordion.module.css';

export type AccordionPanelStylesNames = 'panel' | 'content';

export interface AccordionPanelProps
  extends BoxProps,
    CompoundStylesApiProps<AccordionPanelFactory>,
    ElementProps<'div'> {
  /** Called when the panel animation completes */
  onTransitionEnd?: () => void;
}

export type AccordionPanelFactory = Factory<{
  props: AccordionPanelProps;
  ref: HTMLDivElement;
  stylesNames: AccordionPanelStylesNames;
  compound: true;
}>;

const defaultProps: Partial<AccordionPanelProps> = {};

export const AccordionPanel = factory<AccordionPanelFactory>((props, ref) => {
  const { classNames, className, style, styles, vars, children, ...others } = useProps(
    'AccordionPanel',
    defaultProps,
    props
  );

  const { value } = useAccordionItemContext();
  const ctx = useAccordionContext();

  return (
    <Collapse
      ref={ref}
      {...ctx.getStyles('panel', { className, classNames, style, styles })}
      {...others}
      in={ctx.isItemActive(value)}
      transitionDuration={ctx.transitionDuration ?? 200}
      role="region"
      id={ctx.getRegionId(value)}
      aria-labelledby={ctx.getControlId(value)}
    >
      <div {...ctx.getStyles('content', { classNames, styles })}>{children}</div>
    </Collapse>
  );
});

AccordionPanel.displayName = '@mantine/core/AccordionPanel';
AccordionPanel.classes = classes;
