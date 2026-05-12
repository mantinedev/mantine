import { DatePickerType } from '../../types';
import type {
  InlineDateTimePickerFactory,
  InlineDateTimePickerProps,
  InlineDateTimePickerStylesNames,
} from './InlineDateTimePicker';

export { InlineDateTimePicker } from './InlineDateTimePicker';

export type {
  InlineDateTimePickerProps,
  InlineDateTimePickerStylesNames,
  InlineDateTimePickerFactory,
};

export namespace InlineDateTimePicker {
  export type Props<Type extends DatePickerType> = InlineDateTimePickerProps<Type>;
  export type StylesNames = InlineDateTimePickerStylesNames;
  export type Factory = InlineDateTimePickerFactory;
}
