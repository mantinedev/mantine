import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Slider' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoCustomize = {
  name: '⭐ Demo: customize',
  render: renderDemo(demos.customize),
};

export const DemoMarks = {
  name: '⭐ Demo: marks',
  render: renderDemo(demos.marks),
};

export const DemoLabel = {
  name: '⭐ Demo: label',
  render: renderDemo(demos.label),
};

export const DemoStep = {
  name: '⭐ Demo: step',
  render: renderDemo(demos.step),
};

export const DemoChangeEnd = {
  name: '⭐ Demo: changeEnd',
  render: renderDemo(demos.changeEnd),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoThumbSize = {
  name: '⭐ Demo: thumbSize',
  render: renderDemo(demos.thumbSize),
};

export const DemoThumbChildren = {
  name: '⭐ Demo: thumbChildren',
  render: renderDemo(demos.thumbChildren),
};

export const DemoScale = {
  name: '⭐ Demo: scale',
  render: renderDemo(demos.scale),
};

export const DemoInverted = {
  name: '⭐ Demo: inverted',
  render: renderDemo(demos.inverted),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
