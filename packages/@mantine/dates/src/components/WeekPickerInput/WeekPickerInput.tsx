import { __InputStylesNames, BoxProps, Factory, InputVariant, StylesApiProps } from '@mantine/core';
import { DatePickerType } from '../../types';
import {
  DateInputSharedProps,
  PickerInputBase,
  PickerInputController,
  PickerInputControllerOptions,
} from '../PickerInputBase';
import { createPickerInput } from '../PickerInputBase/create-picker-input/create-picker-input';
import { WeekPicker, WeekPickerBaseProps, WeekPickerStylesNames } from '../WeekPicker';
import { getWeekFormatter } from './get-week-formatter/get-week-formatter';
import { useWeekPickerInput } from './use-week-picker-input/use-week-picker-input';

export type WeekPickerInputStylesNames = __InputStylesNames | 'placeholder' | WeekPickerStylesNames;

export interface WeekPickerInputProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    DateInputSharedProps,
    WeekPickerBaseProps<Type>,
    StylesApiProps<WeekPickerInputFactory> {
  /** `dayjs` format applied to the start and end dates of the week @default "MMM D, YYYY" @category appearance */
  valueFormat?: string;

  /** Controller returned by the `useWeekPickerInput` hook. When provided, the dropdown opened state and the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel`, `onLevelChange`, `popoverProps.opened` and `popoverProps.onChange` props are ignored @category state */
  controller?: PickerInputController;
}

export type WeekPickerInputFactory = Factory<{
  props: WeekPickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: WeekPickerInputStylesNames;
  variant: InputVariant;
  signature: <Type extends DatePickerType = 'default'>(
    props: WeekPickerInputProps<Type> & { ref?: React.Ref<HTMLButtonElement> }
  ) => React.JSX.Element;
}>;

const defaultProps = {
  type: 'default',
  size: 'sm',
  valueFormat: 'MMM D, YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
} satisfies Partial<WeekPickerInputProps>;

export const WeekPickerInput = createPickerInput<WeekPickerInputFactory>({
  name: 'WeekPickerInput',
  Picker: WeekPicker,
  useControllerHook: useWeekPickerInput,
  defaultProps,
  classes: { ...PickerInputBase.classes, ...WeekPicker.classes },
  getValueFormatter: (calendarProps, ctx) =>
    getWeekFormatter(ctx.getFirstDayOfWeek(calendarProps.firstDayOfWeek)),
});

export namespace WeekPickerInput {
  export type Props<Type extends DatePickerType = 'default'> = WeekPickerInputProps<Type>;
  export type StylesNames = WeekPickerInputStylesNames;
  export type Factory = WeekPickerInputFactory;
  export type Controller = PickerInputController;
  export type ControllerOptions = PickerInputControllerOptions;
}
