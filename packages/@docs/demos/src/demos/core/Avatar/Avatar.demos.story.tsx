import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Avatar' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoPlaceholders = {
  name: '⭐ Demo: placeholders',
  render: renderDemo(demos.placeholders),
};

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoLink = {
  name: '⭐ Demo: link',
  render: renderDemo(demos.link),
};

export const DemoGroup = {
  name: '⭐ Demo: group',
  render: renderDemo(demos.group),
};

export const DemoGroupTooltip = {
  name: '⭐ Demo: groupTooltip',
  render: renderDemo(demos.groupTooltip),
};

export const DemoGradient = {
  name: '⭐ Demo: gradient',
  render: renderDemo(demos.gradient),
};
