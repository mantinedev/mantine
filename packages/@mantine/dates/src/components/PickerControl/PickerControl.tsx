import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  getSize,
  MantineSize,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './PickerControl.module.css';

export type PickerControlStylesNames = 'pickerControl';
export type PickerControlCssVariables = {
  pickerControl: '--dpc-size' | '--dpc-fz';
};

export interface PickerControlProps
  extends BoxProps,
    StylesApiProps<PickerControlFactory>,
    ElementProps<'button'> {
  __staticSelector?: string;

  /** Control children */
  children?: React.ReactNode;

  /** Determines whether control should be disabled */
  disabled?: boolean;

  /** Determines whether control should have selected styles */
  selected?: boolean;

  /** Determines whether control is selected in range */
  inRange?: boolean;

  /** Determines whether control is first in range selection */
  firstInRange?: boolean;

  /** Determines whether control is last in range selection */
  lastInRange?: boolean;

  /** Component size */
  size?: MantineSize;
}

export type PickerControlFactory = Factory<{
  props: PickerControlProps;
  ref: HTMLButtonElement;
  stylesNames: PickerControlStylesNames;
  vars: PickerControlCssVariables;
}>;

const defaultProps: Partial<PickerControlProps> = {};

const varsResolver = createVarsResolver<PickerControlFactory>((_, { size }) => ({
  pickerControl: {
    '--dpc-fz': getFontSize(size),
    '--dpc-size': getSize(size, 'dpc-size'),
  },
}));

export const PickerControl = factory<PickerControlFactory>((_props, ref) => {
  const props = useProps('PickerControl', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    firstInRange,
    lastInRange,
    inRange,
    __staticSelector,
    selected,
    disabled,
    ...others
  } = props;

  const getStyles = useStyles<PickerControlFactory>({
    name: __staticSelector || 'PickerControl',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: 'pickerControl',
  });

  return (
    <UnstyledButton
      {...getStyles('pickerControl')}
      ref={ref}
      unstyled={unstyled}
      data-picker-control
      data-selected={(selected && !disabled) || undefined}
      data-disabled={disabled || undefined}
      data-in-range={(inRange && !disabled && !selected) || undefined}
      data-first-in-range={(firstInRange && !disabled) || undefined}
      data-last-in-range={(lastInRange && !disabled) || undefined}
      disabled={disabled}
      {...others}
    />
  );
});

PickerControl.classes = classes;
PickerControl.displayName = '@mantine/dates/PickerControl';
