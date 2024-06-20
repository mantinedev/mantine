import { getPickerDeselectDemo } from './picker-deselect.demo';
import { getPickerMultipleDemo } from './picker-multiple.demo';
import { getPickerNumberOfColumnsDemo } from './picker-numberOfColumns.demo';
import { getPickerRangeDemo } from './picker-range.demo';
import { getPickerSingleRangeDemo } from './picker-singleRange.demo';
import { getPickerSizeConfiguratorDemo } from './picker-sizeConfigurator.demo';
import { getPickerUsageDemo } from './picker-usage.demo';

export function getSharedPickerDemos(component: React.FC<any>) {
  return {
    usage: getPickerUsageDemo(component),
    range: getPickerRangeDemo(component),
    multiple: getPickerMultipleDemo(component),
    deselect: getPickerDeselectDemo(component),
    singleRange: getPickerSingleRangeDemo(component),
    numberOfColumns: getPickerNumberOfColumnsDemo(component),
    sizeConfigurator: getPickerSizeConfiguratorDemo(component),
  };
}
