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

export interface LightboxVideoSlide {
  /** Slide type, must be `'video'` */
  type: 'video';

  /** Video source URL */
  src: string;

  /** Custom thumbnail URL */
  thumbSrc?: string;

  /** Caption displayed below the slide */
  caption?: ReactNode;

  /** Whether the video should auto-play when the slide becomes active */
  autoPlay?: boolean;

  /** Video poster image URL */
  poster?: string;
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
