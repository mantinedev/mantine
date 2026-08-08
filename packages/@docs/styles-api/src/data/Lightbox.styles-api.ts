import type { LightboxFactory } from '@mantine/lightbox';
import type { StylesApiData } from '../types';

export const LightboxStylesApi: StylesApiData<LightboxFactory> = {
  selectors: {
    root: 'Root element – holds CSS variables, renders overlay and content',
    overlay: 'Background overlay behind the lightbox',
    content: 'Full-screen dialog container with all lightbox controls',
    toolbar: 'Top toolbar wrapper',
    toolbarGroup: 'Left/right toolbar button group',
    toolbarButton: 'Individual toolbar action button',
    counter: 'Slide counter text (e.g. "2 / 5")',
    slides: 'Slides area wrapper',
    slidesViewport: 'Embla viewport (overflow hidden)',
    slidesContainer: 'Embla container (flex row of slides)',
    slide: 'Individual slide wrapper',
    slideImage: 'Image element inside a slide',
    slideVideo: 'Video element inside a slide',
    thumbnails: 'Thumbnails strip wrapper',
    thumbnailsViewport: 'Thumbnails Embla viewport',
    thumbnailsContainer: 'Thumbnails Embla container',
    thumbnail: 'Individual thumbnail button',
    thumbnailImage: 'Image inside a thumbnail',
    navigation: 'Navigation arrows wrapper',
    navigationButton: 'Previous/next navigation button',
    caption: 'Caption text below the active slide',
    closeButton: 'Close button',
  },

  vars: {
    root: {
      '--lightbox-transition-duration': 'Controls transition duration of all animations',
      '--lightbox-overlay-color': 'Controls background overlay color',
      '--lightbox-z-index': 'Controls `z-index` of the root element',
      '--lightbox-toolbar-height': 'Controls toolbar height',
      '--lightbox-thumbnails-height': 'Controls thumbnails strip height',
    },
  },

  modifiers: [
    {
      modifier: 'data-active',
      selector: 'thumbnail',
      condition: 'Thumbnail corresponds to the currently active slide',
    },
    {
      modifier: 'data-inactive',
      selector: 'navigationButton',
      condition: 'Navigation button is disabled (first/last slide without loop)',
    },
    {
      modifier: 'data-zoom-enabled',
      selector: 'slideImage',
      condition: '`withZoom` prop is set on the lightbox',
    },
    {
      modifier: 'data-zoomed',
      selector: 'slideImage',
      condition: 'Image is currently zoomed in',
    },
    {
      modifier: 'data-dragging',
      selector: 'slideImage',
      condition: 'Image is being dragged while zoomed',
    },
    {
      modifier: 'data-slide-transition',
      selector: 'slidesContainer',
      condition: 'Slide transition animation is active',
    },
  ],
};
