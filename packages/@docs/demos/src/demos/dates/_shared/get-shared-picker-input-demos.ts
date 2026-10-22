import { getPickerInputApplyOnSubmitDemo } from './picker-input-apply-on-submit.demo';
import { getPickerInputClearableDemo } from './picker-input-clearable.demo';
import { getPickerInputConfiguratorDemo } from './picker-input-configurator.demo';
import { getPickerInputDropdownTypeDemo } from './picker-input-dropdown-type.demo';
import { getPickerInputIconDemo } from './picker-input-icon.demo';
import { getPickerInputMultipleDemo } from './picker-input-multiple.demo';
import { getPickerInputPillsDemo } from './picker-input-pills.demo';
import { getPickerInputRangeDemo } from './picker-input-range.demo';
import { getPickerInputUsageDemo } from './picker-input-usage.demo';
import { getPickerInputValueFormatterDemo } from './picker-input-value-formatter.demo';

export function getSharedPickerInputDemos(component: React.FC<any>) {
  return {
    usage: getPickerInputUsageDemo(component),
    multiple: getPickerInputMultipleDemo(component),
    pills: getPickerInputPillsDemo(component),
    range: getPickerInputRangeDemo(component),
    configurator: getPickerInputConfiguratorDemo(component),
    dropdownType: getPickerInputDropdownTypeDemo(component),
    applyOnSubmit: getPickerInputApplyOnSubmitDemo(component),
    icon: getPickerInputIconDemo(component),
    clearable: getPickerInputClearableDemo(component),
    valueFormatter: getPickerInputValueFormatterDemo(component),
  };
}
