import { renderDemo } from '../../../render-demo';
import * as demos from './index';

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
