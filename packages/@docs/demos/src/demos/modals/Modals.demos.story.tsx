import { renderDemo } from '../../render-demo';
import * as demos from './index';

export default { title: 'Modals' };

export const Demo_confirm = {
  name: '⭐ Demo: confirm',
  render: renderDemo(demos.confirm),
};

export const Demo_context = {
  name: '⭐ Demo: context',
  render: renderDemo(demos.context),
};

export const Demo_confirmCustomize = {
  name: '⭐ Demo: confirmCustomize',
  render: renderDemo(demos.confirmCustomize),
};

export const Demo_multipleSteps = {
  name: '⭐ Demo: multipleSteps',
  render: renderDemo(demos.multipleSteps),
};

export const Demo_content = {
  name: '⭐ Demo: content',
  render: renderDemo(demos.content),
};

export const Demo_modalProps = {
  name: '⭐ Demo: modalProps',
  render: renderDemo(demos.modalProps),
};

export const Demo_updateModal = {
  name: '⭐ Demo: updateModal',
  render: renderDemo(demos.updateModal),
};

export const Demo_updateContextModal = {
  name: '⭐ Demo: updateContextModal',
  render: renderDemo(demos.updateContextModal),
};
