import { renderDemo } from '../../render-demo';
import * as demos from './index';

export default { title: 'Field' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_validateOnBlur = {
  name: '⭐ Demo: validateOnBlur',
  render: renderDemo(demos.validateOnBlur),
};

export const Demo_validateOnChange = {
  name: '⭐ Demo: validateOnChange',
  render: renderDemo(demos.validateOnChange),
};

export const Demo_asyncValidation = {
  name: '⭐ Demo: asyncValidation',
  render: renderDemo(demos.asyncValidation),
};

export const Demo_asyncValidationOnBlur = {
  name: '⭐ Demo: asyncValidationOnBlur',
  render: renderDemo(demos.asyncValidationOnBlur),
};

export const Demo_statusUncontrolled = {
  name: '⭐ Demo: statusUncontrolled',
  render: renderDemo(demos.statusUncontrolled),
};

export const Demo_statusControlled = {
  name: '⭐ Demo: statusControlled',
  render: renderDemo(demos.statusControlled),
};

export const Demo_uncontrolled = {
  name: '⭐ Demo: uncontrolled',
  render: renderDemo(demos.uncontrolled),
};

export const Demo_clearErrorOnChange = {
  name: '⭐ Demo: clearErrorOnChange',
  render: renderDemo(demos.clearErrorOnChange),
};
