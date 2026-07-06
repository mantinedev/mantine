import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'FileSize' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_unitSystem = {
  name: '⭐ Demo: unitSystem',
  render: renderDemo(demos.unitSystem),
};

export const Demo_units = {
  name: '⭐ Demo: units',
  render: renderDemo(demos.units),
};

export const Demo_unitDisplay = {
  name: '⭐ Demo: unitDisplay',
  render: renderDemo(demos.unitDisplay),
};

export const Demo_locale = {
  name: '⭐ Demo: locale',
  render: renderDemo(demos.locale),
};

export const Demo_functionUsage = {
  name: '⭐ Demo: functionUsage',
  render: renderDemo(demos.functionUsage),
};
