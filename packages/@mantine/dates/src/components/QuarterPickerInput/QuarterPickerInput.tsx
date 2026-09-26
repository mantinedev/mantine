import { __InputStylesNames, BoxProps, Factory, InputVariant, StylesApiProps } from '@mantine/core';
import { DatePickerType } from '../../types';
import {
  DateInputSharedProps,
  PickerInputBase,
  PickerInputController,
  PickerInputControllerOptions,
} from '../PickerInputBase';
import { createPickerInput } from '../PickerInputBase/create-picker-input/create-picker-input';
import { QuarterPicker, QuarterPickerBaseProps, QuarterPickerStylesNames } from '../QuarterPicker';
import { pickQuarterPickerProps } from './pick-quarter-picker-props/pick-quarter-picker-props';
import { useQuarterPickerInput } from './use-quarter-picker-input/use-quarter-picker-input';

export type QuarterPickerInputStylesNames =
  | __InputStylesNames
  | 'placeholder'
  | QuarterPickerStylesNames;

export interface QuarterPickerInputProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    DateInputSharedProps,
    QuarterPickerBaseProps<Type>,
    StylesApiProps<QuarterPickerInputFactory> {
  /** `dayjs` format for input value @default "[Q]Q YYYY" @category appearance */
  valueFormat?: string;

  /** Controller returned by the `useQuarterPickerInput` hook. When provided, the dropdown opened state and the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel`, `onLevelChange`, `popoverProps.opened` and `popoverProps.onChange` props are ignored @category state */
  controller?: PickerInputController;
}

export type QuarterPickerInputFactory = Factory<{
  props: QuarterPickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: QuarterPickerInputStylesNames;
  variant: InputVariant;
  signature: <Type extends DatePickerType = 'default'>(
    props: QuarterPickerInputProps<Type> & { ref?: React.Ref<HTMLButtonElement> }
  ) => React.JSX.Element;
}>;

const defaultProps = {
  type: 'default',
  size: 'sm',
  valueFormat: '[Q]Q YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
} satisfies Partial<QuarterPickerInputProps>;

export const QuarterPickerInput = createPickerInput<QuarterPickerInputFactory>({
  name: 'QuarterPickerInput',
  Picker: QuarterPicker,
  useControllerHook: useQuarterPickerInput,
  defaultProps,
  classes: { ...PickerInputBase.classes, ...QuarterPicker.classes },
  minLevel: 'year',
  pickPickerProps: (props) => {
    const { pickerProps, others } = pickQuarterPickerProps(props);
    return { calendarProps: pickerProps as any, others };
  },
});

export namespace QuarterPickerInput {
  export type Props<Type extends DatePickerType = 'default'> = QuarterPickerInputProps<Type>;
  export type StylesNames = QuarterPickerInputStylesNames;
  export type Factory = QuarterPickerInputFactory;
  export type Controller = PickerInputController;
  export type ControllerOptions = PickerInputControllerOptions;
}
