import { useId, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  ExtendComponent,
  Factory,
  getRadius,
  getSafeId,
  getWithProps,
  MantineRadius,
  MantineThemeComponent,
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
  /** Determines whether multiple items can be opened at a time, `false` by default */
  multiple?: Multiple;

  /** Value for controlled component */
  value?: AccordionValue<Multiple>;

  /** Default value for uncontrolled component */
  defaultValue?: AccordionValue<Multiple>;

  /** Called when value changes */
  onChange?: (value: AccordionValue<Multiple>) => void;

  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
  loop?: boolean;

  /** Transition duration in ms, `200` by default */
  transitionDuration?: number;

  /** Determines whether chevron rotation should be disabled, `false` by default */
  disableChevronRotation?: boolean;

  /** Position of the chevron relative to the item label, `right` by default */
  chevronPosition?: AccordionChevronPosition;

  /** Size of the chevron icon container, `24` by default */
  chevronSize?: number | string;

  /** Heading order, has no effect on visuals */
  order?: AccordionHeadingOrder;

  /** Custom chevron icon that will be used in all items */
  chevron?: React.ReactNode;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
  radius?: MantineRadius;
}

export type AccordionFactory = Factory<{
  props: AccordionProps;
  ref: HTMLDivElement;
  stylesNames: AccordionStylesNames;
  vars: AccordionCssVariables;
  variant: AccordionVariant;
}>;

const defaultProps: Partial<AccordionProps> = {
  multiple: false,
  disableChevronRotation: false,
  chevronPosition: 'right',
  variant: 'default',
  chevron: <AccordionChevron />,
};

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

export function Accordion<Multiple extends boolean = false>(_props: AccordionProps<Multiple>) {
  const props = useProps('Accordion', defaultProps as AccordionProps<Multiple>, _props);
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
    const nextValue: AccordionValue<Multiple> = Array.isArray(_value)
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
        transitionDuration,
        disableChevronRotation,
        chevronPosition,
        order,
        chevron,
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
}

const extendAccordion = (c: ExtendComponent<AccordionFactory>): MantineThemeComponent => c;

Accordion.extend = extendAccordion;
Accordion.withProps = getWithProps<AccordionProps, AccordionProps>(Accordion as any);
Accordion.classes = classes;
Accordion.displayName = '@mantine/core/Accordion';
Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
Accordion.Control = AccordionControl;
Accordion.Chevron = AccordionChevron;
