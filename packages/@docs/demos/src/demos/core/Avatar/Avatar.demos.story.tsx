import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Avatar' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_placeholders = {
  name: '⭐ Demo: placeholders',
  render: renderDemo(demos.placeholders),
};

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_link = {
  name: '⭐ Demo: link',
  render: renderDemo(demos.link),
};

export const Demo_group = {
  name: '⭐ Demo: group',
  render: renderDemo(demos.group),
};

export const Demo_groupTooltip = {
  name: '⭐ Demo: groupTooltip',
  render: renderDemo(demos.groupTooltip),
};

export const Demo_gradient = {
  name: '⭐ Demo: gradient',
  render: renderDemo(demos.gradient),
};

export const Demo_initials = {
  name: '⭐ Demo: initials',
  render: renderDemo(demos.initials),
};

export const Demo_allowedColors = {
  name: '⭐ Demo: allowedColors',
  render: renderDemo(demos.allowedColors),
};
