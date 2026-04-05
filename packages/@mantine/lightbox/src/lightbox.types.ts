import type { ReactNode } from 'react';

export interface LightboxImageSlide {
  type?: 'image';
  src: string;
  alt?: string;
  thumbSrc?: string;
  caption?: ReactNode;
  srcSet?: string;
  sizes?: string;
}

export interface LightboxVideoSlide {
  type: 'video';
  src: string;
  thumbSrc?: string;
  caption?: ReactNode;
  autoPlay?: boolean;
  poster?: string;
}

export interface LightboxCustomSlide {
  type: 'custom';
  render: (props: { active: boolean }) => ReactNode;
  renderThumb?: () => ReactNode;
  thumbSrc?: string;
  caption?: ReactNode;
}

export type LightboxSlideData = LightboxImageSlide | LightboxVideoSlide | LightboxCustomSlide;

export interface ToolbarItem {
  key: string;
  icon: ReactNode;
  label: string;
  onClick: () => void;
  position?: 'left' | 'right';
}
