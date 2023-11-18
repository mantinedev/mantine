import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Grid' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoGrowConfigurator = {
  name: '⭐ Demo: growConfigurator',
  render: renderDemo(demos.growConfigurator),
};

export const DemoOffset = {
  name: '⭐ Demo: offset',
  render: renderDemo(demos.offset),
};

export const DemoOrder = {
  name: '⭐ Demo: order',
  render: renderDemo(demos.order),
};

export const DemoRows = {
  name: '⭐ Demo: rows',
  render: renderDemo(demos.rows),
};

export const DemoFlexConfigurator = {
  name: '⭐ Demo: flexConfigurator',
  render: renderDemo(demos.flexConfigurator),
};

export const DemoResponsive = {
  name: '⭐ Demo: responsive',
  render: renderDemo(demos.responsive),
};

export const DemoColumns = {
  name: '⭐ Demo: columns',
  render: renderDemo(demos.columns),
};

export const DemoAuto = {
  name: '⭐ Demo: auto',
  render: renderDemo(demos.auto),
};

export const DemoContent = {
  name: '⭐ Demo: content',
  render: renderDemo(demos.content),
};

export const DemoGutter = {
  name: '⭐ Demo: gutter',
  render: renderDemo(demos.gutter),
};
