import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'RangeSlider' };

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_decimal = {
  name: '⭐ Demo: decimal',
  render: renderDemo(demos.decimal),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const Demo_domain = {
  name: '⭐ Demo: domain',
  render: renderDemo(demos.domain),
};

export const Demo_inverted = {
  name: '⭐ Demo: inverted',
  render: renderDemo(demos.inverted),
};

export const Demo_label = {
  name: '⭐ Demo: label',
  render: renderDemo(demos.label),
};

export const Demo_marks = {
  name: '⭐ Demo: marks',
  render: renderDemo(demos.marks),
};

export const Demo_pushOnOverlap = {
  name: '⭐ Demo: pushOnOverlap',
  render: renderDemo(demos.pushOnOverlap),
};

export const Demo_restrictToMarks = {
  name: '⭐ Demo: restrictToMarks',
  render: renderDemo(demos.restrictToMarks),
};

export const Demo_step = {
  name: '⭐ Demo: step',
  render: renderDemo(demos.step),
};

export const Demo_minRange = {
  name: '⭐ Demo: minRange',
  render: renderDemo(demos.minRange),
};

export const Demo_maxRange = {
  name: '⭐ Demo: maxRange',
  render: renderDemo(demos.maxRange),
};
