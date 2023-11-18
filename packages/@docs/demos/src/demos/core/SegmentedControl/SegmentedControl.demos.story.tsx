import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'SegmentedControl' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoTransitions = {
  name: '⭐ Demo: transitions',
  render: renderDemo(demos.transitions),
};

export const DemoLabels = {
  name: '⭐ Demo: labels',
  render: renderDemo(demos.labels),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoIconsOnly = {
  name: '⭐ Demo: iconsOnly',
  render: renderDemo(demos.iconsOnly),
};

export const DemoReadOnly = {
  name: '⭐ Demo: readOnly',
  render: renderDemo(demos.readOnly),
};
