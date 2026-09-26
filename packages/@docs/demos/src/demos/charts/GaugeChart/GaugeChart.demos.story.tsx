import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'GaugeChart' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_sections = {
  name: '⭐ Demo: sections',
  render: renderDemo(demos.sectionsProp),
};

export const Demo_target = {
  name: '⭐ Demo: target',
  render: renderDemo(demos.target),
};

export const Demo_angles = {
  name: '⭐ Demo: angles',
  render: renderDemo(demos.angles),
};

export const Demo_thickness = {
  name: '⭐ Demo: thickness',
  render: renderDemo(demos.thickness),
};

export const Demo_label = {
  name: '⭐ Demo: label',
  render: renderDemo(demos.label),
};

export const Demo_roundCaps = {
  name: '⭐ Demo: roundCaps',
  render: renderDemo(demos.roundCaps),
};
