import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Accordion' };

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const Demo_chevron = {
  name: '⭐ Demo: chevron',
  render: renderDemo(demos.chevron),
};

export const Demo_icons = {
  name: '⭐ Demo: icons',
  render: renderDemo(demos.icons),
};

export const Demo_label = {
  name: '⭐ Demo: label',
  render: renderDemo(demos.label),
};

export const Demo_sideControls = {
  name: '⭐ Demo: sideControls',
  render: renderDemo(demos.sideControls),
};

export const Demo_customize = {
  name: '⭐ Demo: customize',
  render: renderDemo(demos.customize),
};

export const Demo_disableTransitions = {
  name: '⭐ Demo: disableTransitions',
  render: renderDemo(demos.disableTransitions),
};

export const Demo_customTransitions = {
  name: '⭐ Demo: customTransitions',
  render: renderDemo(demos.customTransitions),
};

export const Demo_unstyled = {
  name: '⭐ Demo: unstyled',
  render: renderDemo(demos.unstyled),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
