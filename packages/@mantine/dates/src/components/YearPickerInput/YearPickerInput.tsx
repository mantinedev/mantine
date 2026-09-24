import { __InputStylesNames, BoxProps, Factory, InputVariant, StylesApiProps } from '@mantine/core';
import { DatePickerType } from '../../types';
import {
  DateInputSharedProps,
  PickerInputBase,
  type PickerInputController,
  type PickerInputControllerOptions,
} from '../PickerInputBase';
import { createPickerInput } from '../PickerInputBase/create-picker-input/create-picker-input';
import { YearPicker, YearPickerBaseProps, YearPickerStylesNames } from '../YearPicker';
import { useYearPickerInput } from './use-year-picker-input/use-year-picker-input';

export type YearPickerInputStylesNames = __InputStylesNames | 'placeholder' | YearPickerStylesNames;

export interface YearPickerInputProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    DateInputSharedProps,
    YearPickerBaseProps<Type>,
    StylesApiProps<YearPickerInputFactory> {
  /** `dayjs` format to display input value @default "YYYY" @category appearance */
  valueFormat?: string;

  /** Controller returned by the `useYearPickerInput` hook. When provided, the dropdown opened state and the displayed date are owned by the controller and `date`, `defaultDate`, `onDateChange`, `popoverProps.opened` and `popoverProps.onChange` props are ignored @category state */
  controller?: PickerInputController;
}

export type YearPickerInputFactory = Factory<{
  props: YearPickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: YearPickerInputStylesNames;
  variant: InputVariant;
  signature: <Type extends DatePickerType = 'default'>(
    props: YearPickerInputProps<Type> & { ref?: React.Ref<HTMLButtonElement> }
  ) => React.JSX.Element;
}>;

const defaultProps = {
  type: 'default',
  size: 'sm',
  valueFormat: 'YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
} satisfies Partial<YearPickerInputProps>;

export const YearPickerInput = createPickerInput<YearPickerInputFactory>({
  name: 'YearPickerInput',
  Picker: YearPicker,
  useControllerHook: useYearPickerInput,
  defaultProps,
  classes: { ...PickerInputBase.classes, ...YearPicker.classes },
  minLevel: 'decade',
});

export namespace YearPickerInput {
  export type Props<Type extends DatePickerType = 'default'> = YearPickerInputProps<Type>;
  export type StylesNames = YearPickerInputStylesNames;
  export type Factory = YearPickerInputFactory;
  export type Controller = PickerInputController;
  export type ControllerOptions = PickerInputControllerOptions;
}
