import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useSplitter' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_vertical = {
  name: '⭐ Demo: vertical',
  render: renderDemo(demos.vertical),
};

export const Demo_collapsible = {
  name: '⭐ Demo: collapsible',
  render: renderDemo(demos.collapsible),
};

export const Demo_multiple = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const Demo_controlled = {
  name: '⭐ Demo: controlled',
  render: renderDemo(demos.controlled),
};

export const Demo_redistributeNearest = {
  name: '⭐ Demo: redistributeNearest',
  render: renderDemo(demos.redistributeNearest),
};

export const Demo_redistributeEqual = {
  name: '⭐ Demo: redistributeEqual',
  render: renderDemo(demos.redistributeEqual),
};

export const Demo_redistributeCustom = {
  name: '⭐ Demo: redistributeCustom',
  render: renderDemo(demos.redistributeCustom),
};

export const Demo_gripOnly = {
  name: '⭐ Demo: gripOnly',
  render: renderDemo(demos.gripOnly),
};

export const Demo_nested = {
  name: '⭐ Demo: nested',
  render: renderDemo(demos.nested),
};

export const Demo_codeEditor = {
  name: '⭐ Demo: codeEditor',
  render: renderDemo(demos.codeEditor),
};
