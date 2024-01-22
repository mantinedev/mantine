import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'PasswordInput' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_strengthMeter = {
  name: '⭐ Demo: strengthMeter',
  render: renderDemo(demos.strengthMeter),
};

export const Demo_error = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};

export const Demo_visibilityIcon = {
  name: '⭐ Demo: visibilityIcon',
  render: renderDemo(demos.visibilityIcon),
};

export const Demo_controlledVisibility = {
  name: '⭐ Demo: controlledVisibility',
  render: renderDemo(demos.controlledVisibility),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const Demo_sections = {
  name: '⭐ Demo: sections',
  render: renderDemo(demos.sections),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
