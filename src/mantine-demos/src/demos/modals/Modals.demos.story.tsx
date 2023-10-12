import * as demos from './index';
import { renderDemo } from '../../render-demo';

export default { title: 'Modals' };

export const DemoConfirm = {
  name: '⭐ Demo: confirm',
  render: renderDemo(demos.confirm),
};

export const DemoContext = {
  name: '⭐ Demo: context',
  render: renderDemo(demos.context),
};

export const DemoConfirmCustomize = {
  name: '⭐ Demo: confirmCustomize',
  render: renderDemo(demos.confirmCustomize),
};

export const DemoMultipleSteps = {
  name: '⭐ Demo: multipleSteps',
  render: renderDemo(demos.multipleSteps),
};

export const DemoContent = {
  name: '⭐ Demo: content',
  render: renderDemo(demos.content),
};
