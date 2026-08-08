import type { ReactNode } from 'react';

export interface LightboxImageSlide {
  /** Slide type, `'image'` by default */
  type?: 'image';

  /** Image URL */
  src: string;

  /** Image alt text for accessibility */
  alt?: string;

  /** Custom thumbnail URL, if not set `src` is used */
  thumbSrc?: string;

  /** Caption displayed below the slide */
  caption?: ReactNode;

  /** Image `srcset` attribute for responsive images */
  srcSet?: string;

  /** Image `sizes` attribute for responsive images */
  sizes?: string;
}

export interface LightboxVideoSlideTrack {
  /** WebVTT track source URL */
  src: string;

  /** Track kind, `'subtitles'` by default */
  kind?: string;

  /** Track language code, for example `'en'` */
  srcLang?: string;

  /** Track label displayed in the video player captions menu */
  label?: string;

  /** Whether the track should be enabled by default */
  default?: boolean;
}

export interface LightboxVideoSlide {
  /** Slide type, must be `'video'` */
  type: 'video';

  /** Video source URL */
  src: string;

  /** Video accessible label, announced by screen readers */
  label?: string;

  /** Custom thumbnail URL */
  thumbSrc?: string;

  /** Caption displayed below the slide */
  caption?: ReactNode;

  /** Whether the video should auto-play when the slide becomes active */
  autoPlay?: boolean;

  /** Video poster image URL */
  poster?: string;

  /** Subtitle/caption tracks rendered as `<track>` elements */
  tracks?: LightboxVideoSlideTrack[];
}

export interface LightboxCustomSlide {
  /** Slide type, must be `'custom'` */
  type: 'custom';

  /** Render function for custom slide content, receives `{ active }` prop */
  render: (props: { active: boolean }) => ReactNode;

  /** Render function for custom thumbnail content */
  renderThumb?: () => ReactNode;

  /** Custom thumbnail URL, used if `renderThumb` is not set */
  thumbSrc?: string;

  /** Caption displayed below the slide */
  caption?: ReactNode;
}

export type LightboxSlideData = LightboxImageSlide | LightboxVideoSlide | LightboxCustomSlide;

export interface LightboxLabels {
  /** Accessible label of the lightbox dialog */
  lightboxLabel: string;

  /** Accessible label of a slide, called with 1-based slide index and total number of slides */
  slideLabel: (index: number, total: number) => string;

  /** Accessible label of the previous slide button */
  previousSlideLabel: string;

  /** Accessible label of the next slide button */
  nextSlideLabel: string;

  /** Accessible label of a thumbnail, called with 1-based slide index and total number of slides */
  thumbnailLabel: (index: number, total: number) => string;

  /** Label of the fullscreen toolbar button when the document is not in fullscreen mode */
  enterFullscreenLabel: string;

  /** Label of the fullscreen toolbar button when the document is in fullscreen mode */
  exitFullscreenLabel: string;

  /** Label of the thumbnails toolbar button when the thumbnails strip is hidden */
  showThumbnailsLabel: string;

  /** Label of the thumbnails toolbar button when the thumbnails strip is visible */
  hideThumbnailsLabel: string;

  /** Label of the download toolbar button */
  downloadLabel: string;

  /** Label of the close toolbar button */
  closeLabel: string;
}

export interface ToolbarItem {
  /** Unique key for the toolbar item */
  key: string;

  /** Icon element displayed in the button */
  icon: ReactNode;

  /** Accessible label for the button */
  label: string;

  /** Called when the button is clicked */
  onClick: () => void;

  /** Position in the toolbar, `'right'` by default */
  position?: 'left' | 'right';
}

export interface ToolbarItemsPayload {
  /** Array of slide data objects */
  slides: LightboxSlideData[];

  /** Index of the currently displayed slide */
  currentIndex: number;

  /** Sets the current slide index */
  setIndex: (index: number) => void;

  /** Navigates to the next slide */
  next: () => void;

  /** Navigates to the previous slide */
  prev: () => void;

  /** Closes the lightbox */
  close: () => void;

  /** Determines whether the thumbnails strip is currently visible */
  thumbnailsVisible: boolean;

  /** Toggles thumbnails strip visibility */
  toggleThumbnails: () => void;

  /** Determines whether the document is currently displayed in fullscreen mode */
  isFullscreen: boolean;

  /** Toggles fullscreen mode */
  toggleFullscreen: () => void;

  /** Determines whether the current image is zoomed in */
  zoomed: boolean;

  /** Toggles zoom of the current image */
  toggleZoom: () => void;

  /** Labels of the lightbox, `labels` prop merged with the default labels */
  labels: LightboxLabels;
}

export type ToolbarItems = ToolbarItem[] | ((payload: ToolbarItemsPayload) => ToolbarItem[]);
