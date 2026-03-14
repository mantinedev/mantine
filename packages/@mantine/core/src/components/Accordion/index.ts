import type {
  AccordionCssVariables,
  AccordionFactory,
  AccordionProps,
  AccordionStylesNames,
  AccordionVariant,
} from './Accordion';
import type { AccordionContextValue } from './Accordion.context';
import type { AccordionHeadingOrder, AccordionValue } from './Accordion.types';
import type { AccordionChevronProps } from './AccordionChevron';
import type { AccordionControlProps } from './AccordionControl/AccordionControl';
import type { AccordionItemContextValue } from './AccordionItem.context';
import type { AccordionItemProps } from './AccordionItem/AccordionItem';
import type { AccordionPanelProps } from './AccordionPanel/AccordionPanel';

export { Accordion } from './Accordion';
export { AccordionChevron } from './AccordionChevron';
export { AccordionItem } from './AccordionItem/AccordionItem';
export { AccordionPanel } from './AccordionPanel/AccordionPanel';
export { AccordionControl } from './AccordionControl/AccordionControl';
export { useAccordionContext } from './Accordion.context';
export { useAccordionItemContext } from './AccordionItem.context';

export type {
  AccordionProps,
  AccordionStylesNames,
  AccordionCssVariables,
  AccordionFactory,
  AccordionVariant,
  AccordionControlProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionChevronProps,
  AccordionValue,
  AccordionHeadingOrder,
  AccordionContextValue,
  AccordionItemContextValue,
};

export namespace Accordion {
  export type Props = AccordionProps;
  export type StylesNames = AccordionStylesNames;
  export type CssVariables = AccordionCssVariables;
  export type Factory = AccordionFactory;
  export type Variant = AccordionVariant;

  export namespace Control {
    export type Props = AccordionControlProps;
  }

  export namespace Item {
    export type Props = AccordionItemProps;
    export type Context = AccordionItemContextValue;
  }

  export namespace Panel {
    export type Props = AccordionPanelProps;
  }
}
