import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Accordion' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoChevron = {
  name: '⭐ Demo: chevron',
  render: renderDemo(demos.chevron),
};

export const DemoIcons = {
  name: '⭐ Demo: icons',
  render: renderDemo(demos.icons),
};

export const DemoLabel = {
  name: '⭐ Demo: label',
  render: renderDemo(demos.label),
};

export const DemoSideControls = {
  name: '⭐ Demo: sideControls',
  render: renderDemo(demos.sideControls),
};

export const DemoCustomize = {
  name: '⭐ Demo: customize',
  render: renderDemo(demos.customize),
};

export const DemoDisableTransitions = {
  name: '⭐ Demo: disableTransitions',
  render: renderDemo(demos.disableTransitions),
};

export const DemoCustomTransitions = {
  name: '⭐ Demo: customTransitions',
  render: renderDemo(demos.customTransitions),
};

export const DemoUnstyled = {
  name: '⭐ Demo: unstyled',
  render: renderDemo(demos.unstyled),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
