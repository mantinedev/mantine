import React from 'react';
import { getPickerInputUsageDemo } from './picker-input-usage.demo';
import { getPickerInputMultipleDemo } from './picker-input-multiple.demo';
import { getPickerInputRangeDemo } from './picker-input-range.demo';
import { getPickerInputConfiguratorDemo } from './picker-input-configurator.demo';
import { getPickerInputModalDemo } from './picker-input-modal.demo';
import { getPickerInputIconDemo } from './picker-input-icon.demo';
import { getPickerInputClearableDemo } from './picker-input-clearable.demo';

export function getSharedPickerInputDemos(component: React.FC<any>) {
  return {
    usage: getPickerInputUsageDemo(component),
    multiple: getPickerInputMultipleDemo(component),
    range: getPickerInputRangeDemo(component),
    configurator: getPickerInputConfiguratorDemo(component),
    modal: getPickerInputModalDemo(component),
    icon: getPickerInputIconDemo(component),
    clearable: getPickerInputClearableDemo(component),
  };
}
