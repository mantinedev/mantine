import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Calendar' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoIsStatic = {
  name: '⭐ Demo: isStatic',
  render: renderDemo(demos.isStatic),
};

export const DemoPicker = {
  name: '⭐ Demo: picker',
  render: renderDemo(demos.picker),
};

export const DemoWeekPicker = {
  name: '⭐ Demo: weekPicker',
  render: renderDemo(demos.weekPicker),
};
