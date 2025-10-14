import { useId, useUncontrolled } from '@mantine/hooks';
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
  useProps,
  useStyles,
} from '../../core';
import { AccordionProvider } from './Accordion.context';
import { AccordionChevronPosition, AccordionHeadingOrder, AccordionValue } from './Accordion.types';
import { AccordionChevron } from './AccordionChevron';
import { AccordionControl } from './AccordionControl/AccordionControl';
import { AccordionItem } from './AccordionItem/AccordionItem';
import { AccordionPanel } from './AccordionPanel/AccordionPanel';
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
  extends BoxProps,
    StylesApiProps<AccordionFactory>,
    ElementProps<'div', 'value' | 'defaultValue' | 'onChange'> {
  /** If set, multiple items can be opened at the same time */
  multiple?: Multiple;

  /** Controlled component value */
  value?: AccordionValue<Multiple>;

  /** Uncontrolled component default value */
  defaultValue?: AccordionValue<Multiple>;

  /** Called when value changes, payload type depends on `multiple` prop */
  onChange?: (value: AccordionValue<Multiple>) => void;

  /** If set, arrow keys loop though items (first to last and last to first) @default `true` */
  loop?: boolean;

  /** Transition duration in ms @default `200` */
  transitionDuration?: number;

  /** If set, chevron rotation is disabled */
  disableChevronRotation?: boolean;

  /** Position of the chevron relative to the item label @default `right` */
  chevronPosition?: AccordionChevronPosition;

  /** Size of the chevron icon container @default `auto` */
  chevronSize?: number | string;

  /** Size of the default chevron icon. Ignored when `chevron` prop is set. @default `16` */
  chevronIconSize?: number | string;

  /** Heading order, has no effect on visuals */
  order?: AccordionHeadingOrder;

  /** Custom chevron icon */
  chevron?: React.ReactNode;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. @default `theme.defaultRadius` */
  radius?: MantineRadius;
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
  disableChevronRotation: false,
  chevronPosition: 'right',
  variant: 'default',
  chevronSize: 'auto',
  chevronIconSize: 16,
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
    multiple,
    value,
    defaultValue,
    onChange,
    id,
    loop,
    transitionDuration,
    disableChevronRotation,
    chevronPosition,
    chevronSize,
    order,
    chevron,
    variant,
    radius,
    chevronIconSize,
    attributes,
    ...others
  } = props;

  const uid = useId(id);
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: multiple ? ([] as any) : null,
    onChange,
  });

  const isItemActive = (itemValue: string) =>
    Array.isArray(_value) ? _value.includes(itemValue) : itemValue === _value;

  const handleItemChange = (itemValue: string) => {
    const nextValue = Array.isArray(_value)
      ? _value.includes(itemValue)
        ? _value.filter((selectedValue) => selectedValue !== itemValue)
        : [..._value, itemValue]
      : itemValue === _value
        ? null
        : (itemValue as any);

    handleChange(nextValue);
  };

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
        isItemActive,
        onChange: handleItemChange,
        getControlId: getSafeId(
          `${uid}-control`,
          'Accordion.Item component was rendered with invalid value or without value'
        ),
        getRegionId: getSafeId(
          `${uid}-panel`,
          'Accordion.Item component was rendered with invalid value or without value'
        ),
        chevron: chevron === null ? null : chevron || <AccordionChevron size={chevronIconSize} />,
        transitionDuration,
        disableChevronRotation,
        chevronPosition,
        order,
        loop,
        getStyles,
        variant,
        unstyled,
      }}
    >
      <Box {...getStyles('root')} id={uid} {...others} variant={variant} data-accordion>
        {children}
      </Box>
    </AccordionProvider>
  );
});

Accordion.classes = classes;
Accordion.displayName = '@mantine/core/Accordion';
Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
Accordion.Control = AccordionControl;
Accordion.Chevron = AccordionChevron;
