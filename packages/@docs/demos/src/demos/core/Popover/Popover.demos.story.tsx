import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Popover' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoForm = {
  name: '⭐ Demo: form',
  render: renderDemo(demos.form),
};

export const DemoHover = {
  name: '⭐ Demo: hover',
  render: renderDemo(demos.hover),
};

export const DemoSameWidth = {
  name: '⭐ Demo: sameWidth',
  render: renderDemo(demos.sameWidth),
};

export const DemoInline = {
  name: '⭐ Demo: inline',
  render: renderDemo(demos.inline),
};

export const DemoOffsetAxis = {
  name: '⭐ Demo: offsetAxis',
  render: renderDemo(demos.offsetAxis),
};

export const DemoOffset = {
  name: '⭐ Demo: offset',
  render: renderDemo(demos.offset),
};

export const DemoArrow = {
  name: '⭐ Demo: arrow',
  render: renderDemo(demos.arrow),
};

export const DemoClickOutsideEvents = {
  name: '⭐ Demo: clickOutsideEvents',
  render: renderDemo(demos.clickOutsideEvents),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoPortalChildren = {
  name: '⭐ Demo: portalChildren',
  render: renderDemo(demos.portalChildren),
};
