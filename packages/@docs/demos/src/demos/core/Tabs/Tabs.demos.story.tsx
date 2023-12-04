import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Tabs' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoPosition = {
  name: '⭐ Demo: position',
  render: renderDemo(demos.position),
};

export const DemoPull = {
  name: '⭐ Demo: pull',
  render: renderDemo(demos.pull),
};

export const DemoInverted = {
  name: '⭐ Demo: inverted',
  render: renderDemo(demos.inverted),
};

export const DemoPlacement = {
  name: '⭐ Demo: placement',
  render: renderDemo(demos.placement),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoColors = {
  name: '⭐ Demo: colors',
  render: renderDemo(demos.colors),
};

export const DemoDeactivate = {
  name: '⭐ Demo: deactivate',
  render: renderDemo(demos.deactivate),
};

export const DemoKeyboardActivation = {
  name: '⭐ Demo: keyboardActivation',
  render: renderDemo(demos.keyboardActivation),
};

export const DemoCustomize = {
  name: '⭐ Demo: customize',
  render: renderDemo(demos.customize),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
