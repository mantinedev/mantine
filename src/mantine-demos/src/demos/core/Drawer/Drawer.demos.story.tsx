import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Drawer' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoPositions = {
  name: '⭐ Demo: positions',
  render: renderDemo(demos.positions),
};

export const DemoSizes = {
  name: '⭐ Demo: sizes',
  render: renderDemo(demos.sizes),
};

export const DemoTransitions = {
  name: '⭐ Demo: transitions',
  render: renderDemo(demos.transitions),
};

export const DemoOverlay = {
  name: '⭐ Demo: overlay',
  render: renderDemo(demos.overlay),
};

export const DemoComposition = {
  name: '⭐ Demo: composition',
  render: renderDemo(demos.composition),
};

export const DemoHeader = {
  name: '⭐ Demo: header',
  render: renderDemo(demos.header),
};

export const DemoInitialFocus = {
  name: '⭐ Demo: initialFocus',
  render: renderDemo(demos.initialFocus),
};

export const DemoScrollarea = {
  name: '⭐ Demo: scrollarea',
  render: renderDemo(demos.scrollarea),
};

export const DemoOverflow = {
  name: '⭐ Demo: overflow',
  render: renderDemo(demos.overflow),
};
