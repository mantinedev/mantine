import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'TimeGrid' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_minMax = {
  name: '⭐ Demo: minMax',
  render: renderDemo(demos.minMax),
};

export const Demo_allowDeselect = {
  name: '⭐ Demo: allowDeselect',
  render: renderDemo(demos.allowDeselect),
};

export const Demo_disableTime = {
  name: '⭐ Demo: disableTime',
  render: renderDemo(demos.disableTime),
};

export const Demo_amPmLabels = {
  name: '⭐ Demo: amPmLabels',
  render: renderDemo(demos.amPmLabels),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
