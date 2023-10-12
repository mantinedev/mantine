import * as demos from './index';
import { renderDemo } from '../../render-demo';

export default { title: 'CodeHighlight' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoTabs = {
  name: '⭐ Demo: tabs',
  render: renderDemo(demos.tabs),
};

export const DemoTabsIcons = {
  name: '⭐ Demo: tabsIcons',
  render: renderDemo(demos.tabsIcons),
};

export const DemoTabsGetIcons = {
  name: '⭐ Demo: tabsGetIcons',
  render: renderDemo(demos.tabsGetIcons),
};

export const DemoExpand = {
  name: '⭐ Demo: expand',
  render: renderDemo(demos.expand),
};

export const DemoCopy = {
  name: '⭐ Demo: copy',
  render: renderDemo(demos.copy),
};

export const DemoInline = {
  name: '⭐ Demo: inline',
  render: renderDemo(demos.inline),
};
