import {
  usePickerInputController,
  type PickerInputController,
  type PickerInputControllerOptions,
  type PickerInputType,
} from './use-picker-input-controller';

export function createUsePickerInput(pickerType: PickerInputType) {
  return function usePickerInputControllerOfType(
    options: PickerInputControllerOptions = {}
  ): PickerInputController {
    return usePickerInputController(options, pickerType);
  };
}
