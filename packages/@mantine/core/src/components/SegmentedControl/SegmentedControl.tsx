import { useState } from 'react';
import {
  randomId,
  useId,
  useMergedRef,
  useMounted,
  useShallowEffect,
  useUncontrolled,
} from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  Factory,
  genericFactory,
  getContrastColor,
  getFontSize,
  getRadius,
  getSize,
  getThemeColor,
  isPrimitive,
  MantineColor,
  MantineRadius,
  MantineSize,
  Primitive,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useStyles,
} from '../../core';
import { FloatingIndicator } from '../FloatingIndicator';
import classes from './SegmentedControl.module.css';

export type SegmentedControlStylesNames =
  | 'root'
  | 'input'
  | 'label'
  | 'control'
  | 'indicator'
  | 'innerLabel';
export type SegmentedControlCssVariables = {
  root:
    | '--sc-radius'
    | '--sc-color'
    | '--sc-font-size'
    | '--sc-padding'
    | '--sc-shadow'
    | '--sc-transition-duration'
    | '--sc-transition-timing-function';
};

export interface SegmentedControlItem<Value = string> {
  value: Value;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps<Value extends Primitive = string>
  extends
    BoxProps,
    StylesApiProps<SegmentedControlFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Data based on which controls are rendered */
  data: (Value | SegmentedControlItem<Value>)[];

  /** Controlled component value */
  value?: Value;

  /** Uncontrolled component default value */
  defaultValue?: Value;

  /** Called when value changes */
  onChange?: (value: Value) => void;

  /** Determines whether the component is disabled */
  disabled?: boolean;

  /** Name attribute for the radio group. A random name is auto-generated if not provided */
  name?: string;

  /** Determines whether the component should take 100% width of its parent @default false */
  fullWidth?: boolean;

  /** Key of `theme.colors` or any valid CSS color, changes indicator background color. By default, uses white in light mode and dark.5 in dark mode */
  color?: MantineColor;

  /** Controls `font-size`, `padding` and `height` properties @default 'sm' */
  size?: MantineSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem @default theme.defaultRadius */
  radius?: MantineRadius;

  /** Indicator `transition-duration` in ms, set `0` to turn off transitions @default 200 */
  transitionDuration?: number;

  /** Indicator `transition-timing-function` property @default ease */
  transitionTimingFunction?: string;

  /** Component orientation @default 'horizontal' */
  orientation?: 'vertical' | 'horizontal';

  /** If set to `false`, prevents changing the value */
  readOnly?: boolean;

  /** If set, automatically adjusts label text color for optimal contrast against the indicator background color */
  autoContrast?: boolean;

  /** Determines whether there should be borders between items @default true */
  withItemsBorders?: boolean;
}

export type SegmentedControlFactory = Factory<{
  props: SegmentedControlProps;
  ref: HTMLDivElement;
  stylesNames: SegmentedControlStylesNames;
  vars: SegmentedControlCssVariables;
  signature: <Value extends Primitive = string>(
    props: SegmentedControlProps<Value>
  ) => React.JSX.Element | null;
}>;

const defaultProps = {
  withItemsBorders: true,
} satisfies Partial<SegmentedControlProps>;

const varsResolver = createVarsResolver<SegmentedControlFactory>(
  (theme, { radius, color, transitionDuration, size, transitionTimingFunction }) => ({
    root: {
      '--sc-radius': radius === undefined ? undefined : getRadius(radius),
      '--sc-color': color ? getThemeColor(color, theme) : undefined,
      '--sc-shadow': color ? undefined : 'var(--mantine-shadow-xs)',
      '--sc-transition-duration':
        transitionDuration === undefined ? undefined : `${transitionDuration}ms`,
      '--sc-transition-timing-function': transitionTimingFunction,
      '--sc-padding': getSize(size, 'sc-padding'),
      '--sc-font-size': getFontSize(size),
    },
  })
);

export const SegmentedControl = genericFactory<SegmentedControlFactory>((_props) => {
  const props = useProps('SegmentedControl', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    value,
    defaultValue,
    onChange,
    size,
    name,
    disabled,
    readOnly,
    fullWidth,
    orientation,
    radius,
    color,
    transitionDuration,
    transitionTimingFunction,
    variant,
    autoContrast,
    withItemsBorders,
    mod,
    attributes,
    ref,
    ...others
  } = props;

  const getStyles = useStyles<SegmentedControlFactory>({
    name: 'SegmentedControl',
    props: props as any,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const theme = useMantineTheme();

  const _data = data.map((item) => (isPrimitive(item) ? { label: `${item}`, value: item } : item));

  const initialized = useMounted();
  const [key, setKey] = useState(randomId());
  const [parent, setParent] = useState<HTMLElement | null>(null);
  const [refs, setRefs] = useState<Record<string, HTMLElement | null>>({});
  const setElementRef = (element: HTMLElement | null, val: string) => {
    refs[val] = element;
    setRefs(refs);
  };

  const [_value, handleValueChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: Array.isArray(data)
      ? (_data.find((item) => !item.disabled)?.value ?? (data[0] as any)?.value ?? null)
      : null,
    onChange,
  });

  const uuid = useId(name);

  const controls = _data.map((item) => (
    <Box
      {...getStyles('control')}
      mod={{ active: _value === item.value, orientation }}
      key={`${item.value}`}
    >
      <input
        {...getStyles('input')}
        disabled={disabled || item.disabled}
        type="radio"
        name={uuid}
        value={`${item.value}`}
        id={`${uuid}-${item.value}`}
        checked={_value === item.value}
        onChange={() => !readOnly && handleValueChange(item.value)}
        data-focus-ring={theme.focusRing}
        key={`${item.value}-input`}
      />

      <Box
        component="label"
        {...getStyles('label')}
        mod={{
          active: _value === item.value && !(disabled || item.disabled),
          disabled: disabled || item.disabled,
          'read-only': readOnly,
        }}
        htmlFor={`${uuid}-${item.value}`}
        ref={(node) => setElementRef(node, `${item.value}`)}
        __vars={{
          '--sc-label-color':
            color !== undefined ? getContrastColor({ color, theme, autoContrast }) : undefined,
        }}
        key={`${item.value}-label`}
      >
        <span {...getStyles('innerLabel')}>{item.label}</span>
      </Box>
    </Box>
  ));

  const mergedRef = useMergedRef(ref, (node) => setParent(node));

  useShallowEffect(() => {
    setKey(randomId());
  }, [data.length]);

  if (data.length === 0) {
    return null;
  }

  return (
    <Box
      {...getStyles('root')}
      variant={variant}
      size={size}
      ref={mergedRef}
      mod={[
        {
          'full-width': fullWidth,
          orientation,
          initialized,
          'with-items-borders': withItemsBorders,
        },
        mod,
      ]}
      {...others}
      role="radiogroup"
      data-disabled={disabled}
    >
      {typeof _value !== 'undefined' && (
        <FloatingIndicator
          target={refs[`${_value}`]}
          parent={parent}
          component="span"
          transitionDuration="var(--sc-transition-duration)"
          key={key}
          {...getStyles('indicator')}
        />
      )}

      {controls}
    </Box>
  );
});

SegmentedControl.classes = classes;
SegmentedControl.displayName = '@mantine/core/SegmentedControl';
