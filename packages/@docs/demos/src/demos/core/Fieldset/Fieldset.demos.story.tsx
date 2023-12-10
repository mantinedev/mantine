import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Fieldset' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
