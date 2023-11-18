import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'PasswordInput' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoStrengthMeter = {
  name: '⭐ Demo: strengthMeter',
  render: renderDemo(demos.strengthMeter),
};

export const DemoError = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};

export const DemoVisibilityIcon = {
  name: '⭐ Demo: visibilityIcon',
  render: renderDemo(demos.visibilityIcon),
};

export const DemoControlledVisibility = {
  name: '⭐ Demo: controlledVisibility',
  render: renderDemo(demos.controlledVisibility),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoSections = {
  name: '⭐ Demo: sections',
  render: renderDemo(demos.sections),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
