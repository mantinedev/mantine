import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Skeleton' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoContent = {
  name: '⭐ Demo: content',
  render: renderDemo(demos.content),
};
