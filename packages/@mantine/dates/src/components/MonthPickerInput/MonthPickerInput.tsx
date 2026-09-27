import { __InputStylesNames, BoxProps, Factory, InputVariant, StylesApiProps } from '@mantine/core';
import { DatePickerType } from '../../types';
import { MonthPicker, MonthPickerBaseProps, MonthPickerStylesNames } from '../MonthPicker';
import {
  DateInputSharedProps,
  PickerInputBase,
  PickerInputController,
  PickerInputControllerOptions,
} from '../PickerInputBase';
import { createPickerInput } from '../PickerInputBase/create-picker-input/create-picker-input';
import { useMonthPickerInput } from './use-month-picker-input/use-month-picker-input';

export type MonthPickerInputStylesNames =
  | __InputStylesNames
  | 'placeholder'
  | MonthPickerStylesNames
  | 'submitButton';

export interface MonthPickerInputProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    DateInputSharedProps,
    MonthPickerBaseProps<Type>,
    StylesApiProps<MonthPickerInputFactory> {
  /** `dayjs` format for input value @default "MMMM YYYY" @category appearance */
  valueFormat?: string;

  /** Controller returned by the `useMonthPickerInput` hook. When provided, the dropdown opened state and the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel`, `onLevelChange`, `popoverProps.opened` and `popoverProps.onChange` props are ignored @category state */
  controller?: PickerInputController;
}

export type MonthPickerInputFactory = Factory<{
  props: MonthPickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: MonthPickerInputStylesNames;
  variant: InputVariant;
  signature: <Type extends DatePickerType = 'default'>(
    props: MonthPickerInputProps<Type> & { ref?: React.Ref<HTMLButtonElement> }
  ) => React.JSX.Element;
}>;

const defaultProps = {
  type: 'default',
  size: 'sm',
  valueFormat: 'MMMM YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: { base: 'drawer', sm: 'popover' },
} satisfies Partial<MonthPickerInputProps>;

export const MonthPickerInput = createPickerInput<MonthPickerInputFactory>({
  name: 'MonthPickerInput',
  Picker: MonthPicker,
  useControllerHook: useMonthPickerInput,
  defaultProps,
  classes: { ...PickerInputBase.classes, ...MonthPicker.classes },
  minLevel: 'year',
});

export namespace MonthPickerInput {
  export type Props<Type extends DatePickerType = 'default'> = MonthPickerInputProps<Type>;
  export type StylesNames = MonthPickerInputStylesNames;
  export type Factory = MonthPickerInputFactory;
  export type Controller = PickerInputController;
  export type ControllerOptions = PickerInputControllerOptions;
}
