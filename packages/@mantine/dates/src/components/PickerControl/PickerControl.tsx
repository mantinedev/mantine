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
  extends BoxProps, StylesApiProps<PickerControlFactory>, ElementProps<'button'> {
  __staticSelector?: string;

  /** Control children */
  children?: React.ReactNode;

  /** Disables control */
  disabled?: boolean;

  /** Assigns selected styles */
  selected?: boolean;

  /** Assigns in range styles */
  inRange?: boolean;

  /** Assigns first in range styles */
  firstInRange?: boolean;

  /** Assigns last in range styles */
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

const varsResolver = createVarsResolver<PickerControlFactory>((_, { size }) => ({
  pickerControl: {
    '--dpc-fz': getFontSize(size),
    '--dpc-size': getSize(size, 'dpc-size'),
  },
}));

export const PickerControl = factory<PickerControlFactory>((_props) => {
  const props = useProps('PickerControl', null, _props);
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
    attributes,
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
    attributes,
    vars,
    varsResolver,
    rootSelector: 'pickerControl',
  });

  return (
    <UnstyledButton
      {...getStyles('pickerControl')}
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
