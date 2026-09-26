import { DatePickerType } from '../../types';
import type {
  InlineDateTimePickerFactory,
  InlineDateTimePickerProps,
  InlineDateTimePickerStylesNames,
} from './InlineDateTimePicker';
import type {
  InlineDateTimePickerController,
  InlineDateTimePickerControllerOptions,
} from './use-inline-date-time-picker/use-inline-date-time-picker';
import type {
  TimeEntryController,
  TimeEntryControllerOptions,
  TimeEntryFocusRequest,
  TimeEntryRegisteredSettings,
  TimeEntryTarget,
} from './use-inline-date-time-picker/use-time-entry';

export { InlineDateTimePicker } from './InlineDateTimePicker';
export { useInlineDateTimePicker } from './use-inline-date-time-picker/use-inline-date-time-picker';

export type {
  InlineDateTimePickerProps,
  InlineDateTimePickerStylesNames,
  InlineDateTimePickerFactory,
  InlineDateTimePickerController,
  InlineDateTimePickerControllerOptions,
  TimeEntryController,
  TimeEntryControllerOptions,
  TimeEntryRegisteredSettings,
  TimeEntryTarget,
  TimeEntryFocusRequest,
};

export namespace InlineDateTimePicker {
  export type Props<Type extends DatePickerType> = InlineDateTimePickerProps<Type>;
  export type StylesNames = InlineDateTimePickerStylesNames;
  export type Factory = InlineDateTimePickerFactory;
  export type Controller = InlineDateTimePickerController;
  export type ControllerOptions = InlineDateTimePickerControllerOptions;
}
