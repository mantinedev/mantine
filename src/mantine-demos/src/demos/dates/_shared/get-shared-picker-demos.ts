import React from 'react';
import { getPickerDeselectDemo } from './picker-deselect.demo';
import { getPickerMultipleDemo } from './picker-multiple.demo';
import { getPickerRangeDemo } from './picker-range.demo';
import { getPickerUsageDemo } from './picker-usage.demo';
import { getPickerSingleRangeDemo } from './picker-singleRange.demo';
import { getPickerNumberOfColumnsDemo } from './picker-numberOfColumns.demo';
import { getPickerSizeConfiguratorDemo } from './picker-sizeConfigurator.demo';

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
