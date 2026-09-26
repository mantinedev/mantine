import { __InputStylesNames, BoxProps, Factory, InputVariant, StylesApiProps } from '@mantine/core';
import { DatePickerType } from '../../types';
import { DatePicker, DatePickerBaseProps, DatePickerStylesNames } from '../DatePicker';
import {
  DateInputSharedProps,
  PickerInputBase,
  PickerInputController,
  PickerInputControllerOptions,
} from '../PickerInputBase';
import { createPickerInput } from '../PickerInputBase/create-picker-input/create-picker-input';
import { useDatePickerInput } from './use-date-picker-input/use-date-picker-input';

export type DatePickerInputStylesNames = __InputStylesNames | 'placeholder' | DatePickerStylesNames;

export interface DatePickerInputProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    DateInputSharedProps,
    DatePickerBaseProps<Type>,
    StylesApiProps<DatePickerInputFactory> {
  /** `dayjs` format for input value @default "MMMM D, YYYY" @category appearance */
  valueFormat?: string;

  /** Controller returned by the `useDatePickerInput` hook. When provided, the dropdown opened state and the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel`, `onLevelChange`, `popoverProps.opened` and `popoverProps.onChange` props are ignored @category state */
  controller?: PickerInputController;
}

export type DatePickerInputFactory = Factory<{
  props: DatePickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: DatePickerInputStylesNames;
  variant: InputVariant;
  signature: <Type extends DatePickerType = 'default'>(
    props: DatePickerInputProps<Type> & { ref?: React.Ref<HTMLButtonElement> }
  ) => React.JSX.Element;
}>;

const defaultProps = {
  type: 'default',
  size: 'sm',
  valueFormat: 'MMMM D, YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
} satisfies Partial<DatePickerInputProps>;

export const DatePickerInput = createPickerInput<DatePickerInputFactory>({
  name: 'DatePickerInput',
  Picker: DatePicker,
  useControllerHook: useDatePickerInput,
  defaultProps,
  classes: { ...PickerInputBase.classes, ...DatePicker.classes },
});

export namespace DatePickerInput {
  export type Props = DatePickerInputProps;
  export type StylesNames = DatePickerInputStylesNames;
  export type Factory = DatePickerInputFactory;
  export type Controller = PickerInputController;
  export type ControllerOptions = PickerInputControllerOptions;
}
