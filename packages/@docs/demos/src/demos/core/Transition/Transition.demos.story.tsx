import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Transition' };

export const Demo_custom = {
  name: '⭐ Demo: custom',
  render: renderDemo(demos.custom),
};
