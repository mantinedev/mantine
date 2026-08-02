import { renderDemo } from '../../render-demo';
import * as demos from './index';

export default { title: 'Lightbox' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_zoom = {
  name: '⭐ Demo: zoom',
  render: renderDemo(demos.zoom),
};

export const Demo_thumbnails = {
  name: '⭐ Demo: thumbnails',
  render: renderDemo(demos.thumbnails),
};

export const Demo_allFeatures = {
  name: '⭐ Demo: allFeatures',
  render: renderDemo(demos.allFeatures),
};

export const Demo_store = {
  name: '⭐ Demo: store',
  render: renderDemo(demos.store),
};

export const Demo_video = {
  name: '⭐ Demo: video',
  render: renderDemo(demos.video),
};

export const Demo_custom = {
  name: '⭐ Demo: custom',
  render: renderDemo(demos.custom),
};

export const Demo_toolbar = {
  name: '⭐ Demo: toolbar',
  render: renderDemo(demos.toolbar),
};

export const Demo_loop = {
  name: '⭐ Demo: loop',
  render: renderDemo(demos.loop),
};

export const Demo_transition = {
  name: '⭐ Demo: transition',
  render: renderDemo(demos.transition),
};

export const Demo_overlayTransition = {
  name: '⭐ Demo: overlayTransition',
  render: renderDemo(demos.overlayTransition),
};

export const Demo_disableTransition = {
  name: '⭐ Demo: disableTransition',
  render: renderDemo(demos.disableTransition),
};

export const Demo_swipeClose = {
  name: '⭐ Demo: swipeClose',
  render: renderDemo(demos.swipeClose),
};
