import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'ColorSwatch' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoComponent = {
  name: '⭐ Demo: component',
  render: renderDemo(demos.component),
};

export const DemoShadow = {
  name: '⭐ Demo: shadow',
  render: renderDemo(demos.shadow),
};
