import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Skeleton' };

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_content = {
  name: '⭐ Demo: content',
  render: renderDemo(demos.content),
};
