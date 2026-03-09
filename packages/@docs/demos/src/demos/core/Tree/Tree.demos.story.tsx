import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Tree' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_files = {
  name: '⭐ Demo: files',
  render: renderDemo(demos.files),
};

export const Demo_renderNode = {
  name: '⭐ Demo: renderNode',
  render: renderDemo(demos.renderNode),
};

export const Demo_controller = {
  name: '⭐ Demo: controller',
  render: renderDemo(demos.controller),
};

export const Demo_checked = {
  name: '⭐ Demo: checked',
  render: renderDemo(demos.checked),
};

export const Demo_expandedState = {
  name: '⭐ Demo: expandedState',
  render: renderDemo(demos.expandedState),
};

export const Demo_checkAllNodes = {
  name: '⭐ Demo: checkAllNodes',
  render: renderDemo(demos.checkAllNodes),
};

export const Demo_dragDrop = {
  name: '⭐ Demo: dragDrop',
  render: renderDemo(demos.dragDrop),
};

export const Demo_asyncLoading = {
  name: '⭐ Demo: asyncLoading',
  render: renderDemo(demos.asyncLoading),
};

export const Demo_searchHighlight = {
  name: '⭐ Demo: searchHighlight',
  render: renderDemo(demos.searchHighlight),
};

export const Demo_searchFilter = {
  name: '⭐ Demo: searchFilter',
  render: renderDemo(demos.searchFilter),
};

export const Demo_searchFuzzy = {
  name: '⭐ Demo: searchFuzzy',
  render: renderDemo(demos.searchFuzzy),
};

export const Demo_lines = {
  name: '⭐ Demo: lines',
  render: renderDemo(demos.lines),
};

export const Demo_virtualized = {
  name: '⭐ Demo: virtualized',
  render: renderDemo(demos.virtualized),
};

export const Demo_checkStrictly = {
  name: '⭐ Demo: checkStrictly',
  render: renderDemo(demos.checkStrictly),
};
