import { renderDemo } from '../../render-demo';
import { highlightjs } from './CodeHighlight.demo.highlightjs';
import * as demos from './index';

export default { title: 'CodeHighlight' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_tabs = {
  name: '⭐ Demo: tabs',
  render: renderDemo(demos.tabs),
};

export const Demo_tabsIcons = {
  name: '⭐ Demo: tabsIcons',
  render: renderDemo(demos.tabsIcons),
};

export const Demo_tabsGetIcons = {
  name: '⭐ Demo: tabsGetIcons',
  render: renderDemo(demos.tabsGetIcons),
};

export const Demo_expand = {
  name: '⭐ Demo: expand',
  render: renderDemo(demos.expand),
};

export const Demo_copy = {
  name: '⭐ Demo: copy',
  render: renderDemo(demos.copy),
};

export const Demo_inline = {
  name: '⭐ Demo: inline',
  render: renderDemo(demos.inline),
};

export const Demo_highlightjs = {
  name: '⭐ Demo: highlightjs',
  render: renderDemo(highlightjs),
};

export const Demo_customControl = {
  name: '⭐ Demo: customControl',
  render: renderDemo(demos.customControl),
};
