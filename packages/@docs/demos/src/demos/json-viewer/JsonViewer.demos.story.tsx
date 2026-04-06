import { renderDemo } from '../../render-demo';
import * as demos from './index';

export default { title: 'JsonViewer' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_expandDepth = {
  name: '⭐ Demo: expandDepth',
  render: renderDemo(demos.expandDepth),
};

export const Demo_controls = {
  name: '⭐ Demo: controls',
  render: renderDemo(demos.controls),
};

export const Demo_rootName = {
  name: '⭐ Demo: rootName',
  render: renderDemo(demos.rootName),
};

export const Demo_withTypes = {
  name: '⭐ Demo: withTypes',
  render: renderDemo(demos.withTypes),
};

export const Demo_withCopy = {
  name: '⭐ Demo: withCopy',
  render: renderDemo(demos.withCopy),
};

export const Demo_collapseStrings = {
  name: '⭐ Demo: collapseStrings',
  render: renderDemo(demos.collapseStrings),
};

export const Demo_sortKeys = {
  name: '⭐ Demo: sortKeys',
  render: renderDemo(demos.sortKeys),
};

export const Demo_highlight = {
  name: '⭐ Demo: highlight',
  render: renderDemo(demos.highlight),
};

export const Demo_allExpanded = {
  name: '⭐ Demo: allExpanded',
  render: renderDemo(demos.allExpanded),
};

export const Demo_lineNumbers = {
  name: '⭐ Demo: lineNumbers',
  render: renderDemo(demos.lineNumbers),
};

export const Demo_withChevrons = {
  name: '⭐ Demo: withChevrons',
  render: renderDemo(demos.withChevrons),
};
