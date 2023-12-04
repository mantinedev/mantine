import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Skeleton' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoContent = {
  name: '⭐ Demo: content',
  render: renderDemo(demos.content),
};
