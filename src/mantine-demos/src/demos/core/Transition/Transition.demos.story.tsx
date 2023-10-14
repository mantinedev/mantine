import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Transition' };

export const DemoCustom = {
  name: '⭐ Demo: custom',
  render: renderDemo(demos.custom),
};
