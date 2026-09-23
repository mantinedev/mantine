import type { CalendarLevel } from '../../../types';
import {
  usePickerInputController,
  type PickerInputController,
  type PickerInputControllerOptions,
} from './use-picker-input-controller';

export type PickerInputType = 'date' | 'month' | 'year' | 'week';

const RESET_LEVEL: Record<PickerInputType, CalendarLevel> = {
  date: 'month',
  week: 'month',
  month: 'year',
  year: 'decade',
};

export function createUsePickerInput(pickerType: PickerInputType) {
  return function usePickerInputControllerOfType(
    options: PickerInputControllerOptions = {}
  ): PickerInputController {
    return usePickerInputController(options, RESET_LEVEL[pickerType]);
  };
}
