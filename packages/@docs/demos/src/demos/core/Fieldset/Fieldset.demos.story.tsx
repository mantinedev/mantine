import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Fieldset' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
