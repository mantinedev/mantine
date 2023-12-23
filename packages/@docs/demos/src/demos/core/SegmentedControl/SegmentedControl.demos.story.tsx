import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'SegmentedControl' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_transitions = {
  name: '⭐ Demo: transitions',
  render: renderDemo(demos.transitions),
};

export const Demo_labels = {
  name: '⭐ Demo: labels',
  render: renderDemo(demos.labels),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const Demo_iconsOnly = {
  name: '⭐ Demo: iconsOnly',
  render: renderDemo(demos.iconsOnly),
};

export const Demo_readOnly = {
  name: '⭐ Demo: readOnly',
  render: renderDemo(demos.readOnly),
};
