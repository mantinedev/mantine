import { getPickerInputClearableDemo } from './picker-input-clearable.demo';
import { getPickerInputConfiguratorDemo } from './picker-input-configurator.demo';
import { getPickerInputIconDemo } from './picker-input-icon.demo';
import { getPickerInputModalDemo } from './picker-input-modal.demo';
import { getPickerInputMultipleDemo } from './picker-input-multiple.demo';
import { getPickerInputRangeDemo } from './picker-input-range.demo';
import { getPickerInputUsageDemo } from './picker-input-usage.demo';
import { getPickerInputValueFormatterDemo } from './picker-input-value-formatter.demo';

export function getSharedPickerInputDemos(component: React.FC<any>) {
  return {
    usage: getPickerInputUsageDemo(component),
    multiple: getPickerInputMultipleDemo(component),
    range: getPickerInputRangeDemo(component),
    configurator: getPickerInputConfiguratorDemo(component),
    modal: getPickerInputModalDemo(component),
    icon: getPickerInputIconDemo(component),
    clearable: getPickerInputClearableDemo(component),
    valueFormatter: getPickerInputValueFormatterDemo(component),
  };
}
