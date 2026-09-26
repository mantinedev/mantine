import { useId } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  Factory,
  genericFactory,
  getRadius,
  getSafeId,
  MantineRadius,
  rem,
  StylesApiProps,
  useController,
  useProps,
  useStyles,
} from '../../core';
import { AccordionProvider } from './Accordion.context';
import { AccordionChevronPosition, AccordionHeadingOrder, AccordionValue } from './Accordion.types';
import { AccordionChevron } from './AccordionChevron';
import { AccordionControl, AccordionControlProps } from './AccordionControl/AccordionControl';
import { AccordionItemContextValue } from './AccordionItem.context';
import { AccordionItem, AccordionItemProps } from './AccordionItem/AccordionItem';
import { AccordionPanel, AccordionPanelProps } from './AccordionPanel/AccordionPanel';
import { useAccordion, AccordionController } from './use-accordion/use-accordion';
import classes from './Accordion.module.css';

export type AccordionStylesNames =
  | 'root'
  | 'content'
  | 'item'
  | 'panel'
  | 'icon'
  | 'chevron'
  | 'label'
  | 'itemTitle'
  | 'control';

export type AccordionVariant = 'default' | 'contained' | 'filled' | 'separated';

export type AccordionCssVariables = {
  root: '--accordion-transition-duration' | '--accordion-chevron-size' | '--accordion-radius';
};

export interface AccordionProps<Multiple extends boolean = false>
  extends
    BoxProps,
    StylesApiProps<AccordionFactory>,
    ElementProps<'div', 'value' | 'defaultValue' | 'onChange'> {
  /** Controller returned by the `useAccordion` hook. When provided, the state is owned by the controller and `multiple`, `value`, `defaultValue`, `onChange` and `disableCollapse` props are ignored @category state */
  controller?: AccordionController<Multiple>;

  /** If set, multiple items can be opened at the same time. Ignored when `controller` is set @default false @category state */
  multiple?: Multiple;

  /** Controlled component value @category state */
  value?: AccordionValue<Multiple>;

  /** Uncontrolled component default value @category state */
  defaultValue?: AccordionValue<Multiple>;

  /** Called when value changes, payload type depends on `multiple` prop @category state */
  onChange?: (value: AccordionValue<Multiple>) => void;

  /** If set, arrow keys loop through items (first to last and last to first) @default true @category behavior */
  loop?: boolean;

  /** Transition duration in ms @default 200 @category appearance */
  transitionDuration?: number;

  /** If set, chevron rotation is disabled @default false @category appearance */
  disableChevronRotation?: boolean;

  /** If set, the open item cannot be collapsed by clicking it again, so one item always stays open. Only applies when `multiple` is `false`. @default false @category behavior */
  disableCollapse?: boolean;

  /** Position of the chevron relative to the item label @default right @category appearance */
  chevronPosition?: AccordionChevronPosition;

  /** Size of the chevron icon container @default auto @category appearance */
  chevronSize?: number | string;

  /** Size of the default chevron icon. Ignored when `chevron` prop is set. Use `chevronSize` instead when using custom chevron. @default 16 @category appearance */
  chevronIconSize?: number | string;

  /** Sets heading level (h2-h6) for `Accordion.Control` elements. Wraps each control in the corresponding heading tag, recommended to meet WAI-ARIA accessibility requirements. Has no visual effect. @category accessibility */
  order?: AccordionHeadingOrder;

  /** Custom chevron icon @category appearance */
  chevron?: React.ReactNode;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. @default theme.defaultRadius @category appearance */
  radius?: MantineRadius;

  /** If set to `false`, panels are unmounted when collapsed. By default, panels stay mounted when collapsed. @default true */
  keepMounted?: boolean;

  /** Controls how inactive panels content is hidden when `keepMounted` is `true`, `'activity'` – hidden with `Activity` component, `'display-none'` – hidden with `display: none` styles @default 'activity' */
  keepMountedMode?: 'activity' | 'display-none';
}

export type AccordionFactory = Factory<{
  props: AccordionProps;
  ref: HTMLDivElement;
  stylesNames: AccordionStylesNames;
  vars: AccordionCssVariables;
  variant: AccordionVariant;
  signature: <Multiple extends boolean = false>(
    props: AccordionProps<Multiple>
  ) => React.JSX.Element;
  staticComponents: {
    Item: typeof AccordionItem;
    Panel: typeof AccordionPanel;
    Control: typeof AccordionControl;
    Chevron: typeof AccordionChevron;
  };
}>;

const defaultProps = {
  multiple: false,
  loop: true,
  disableChevronRotation: false,
  disableCollapse: false,
  chevronPosition: 'right',
  variant: 'default',
  chevronSize: 'auto',
  chevronIconSize: 16,
  keepMountedMode: 'activity',
} satisfies Partial<AccordionProps>;

const varsResolver = createVarsResolver<AccordionFactory>(
  (_, { transitionDuration, chevronSize, radius }) => ({
    root: {
      '--accordion-transition-duration':
        transitionDuration === undefined ? undefined : `${transitionDuration}ms`,
      '--accordion-chevron-size': chevronSize === undefined ? undefined : rem(chevronSize),
      '--accordion-radius': radius === undefined ? undefined : getRadius(radius),
    },
  })
);

export const Accordion = genericFactory<AccordionFactory>((_props) => {
  const props = useProps('Accordion', defaultProps as any, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    controller,
    multiple,
    value,
    defaultValue,
    onChange,
    id,
    loop,
    transitionDuration,
    disableChevronRotation,
    disableCollapse,
    chevronPosition,
    chevronSize,
    order,
    chevron,
    variant,
    radius,
    chevronIconSize,
    attributes,
    keepMounted,
    keepMountedMode,
    ...others
  } = props;

  const uid = useId(id);

  const accordion = useController(useAccordion, controller, {
    multiple,
    value,
    defaultValue,
    onChange,
    disableCollapse,
  });

  const getStyles = useStyles<AccordionFactory>({
    name: 'Accordion',
    classes,
    props: props as AccordionProps,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  return (
    <AccordionProvider
      value={{
        isItemActive: accordion.isExpanded,
        onChange: accordion.toggle,
        registerItem: accordion.registerItem,
        getControlId: getSafeId(
          `${uid}-control`,
          'Accordion.Item component was rendered with invalid value or without value'
        ),
        getRegionId: getSafeId(
          `${uid}-panel`,
          'Accordion.Item component was rendered with invalid value or without value'
        ),
        chevron: chevron === undefined ? <AccordionChevron size={chevronIconSize} /> : chevron,
        transitionDuration,
        disableChevronRotation,
        disableCollapse: !accordion.multiple && accordion.disableCollapse,
        chevronPosition,
        order,
        loop,
        getStyles,
        variant,
        unstyled,
        keepMounted,
        keepMountedMode,
      }}
    >
      <Box {...getStyles('root')} id={uid} {...others} variant={variant} data-accordion>
        {children}
      </Box>
    </AccordionProvider>
  );
});

Accordion.classes = classes;
Accordion.varsResolver = varsResolver;
Accordion.displayName = '@mantine/core/Accordion';
Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
Accordion.Control = AccordionControl;
Accordion.Chevron = AccordionChevron;

export namespace Accordion {
  export type Props = AccordionProps;
  export type Controller<Multiple extends boolean = false> = AccordionController<Multiple>;
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
