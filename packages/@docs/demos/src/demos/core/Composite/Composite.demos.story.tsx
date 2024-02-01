import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Composite' };

export const DemoUsage = {
  name: '⭐ Demo: Basic List',
  render: renderDemo(demos.basicList),
};

export const DemoImageGrid = {
  name: '⭐ Demo: Layout Image Grid',
  render: renderDemo(demos.imageGrid),
};

export const DemoCardGrid = {
  name: '⭐ Demo: Layout Card Grid',
  render: renderDemo(demos.cardGrid),
};

export const DemoMultipleComposite = {
  name: '⭐ Demo: Multiple Composite',
  render: renderDemo(demos.controlledComposite),
};
