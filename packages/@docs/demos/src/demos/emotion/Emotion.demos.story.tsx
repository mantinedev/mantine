import { renderDemo } from '../../render-demo';
import * as demos from './index';

export default { title: 'Emotion' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_composition = {
  name: '⭐ Demo: composition',
  render: renderDemo(demos.composition),
};

export const Demo_cx = {
  name: '⭐ Demo: cx',
  render: renderDemo(demos.cx),
};

export const Demo_pseudo = {
  name: '⭐ Demo: pseudo',
  render: renderDemo(demos.pseudo),
};

export const Demo_parameters = {
  name: '⭐ Demo: parameters',
  render: renderDemo(demos.parameters),
};

export const Demo_media = {
  name: '⭐ Demo: media',
  render: renderDemo(demos.media),
};

export const Demo_keyframes = {
  name: '⭐ Demo: keyframes',
  render: renderDemo(demos.keyframes),
};
