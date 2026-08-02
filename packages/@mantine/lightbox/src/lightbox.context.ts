import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { EmblaCarouselType } from 'embla-carousel';
import type { LightboxRootFactory } from './LightboxRoot/LightboxRoot';
import type { LightboxStore } from './lightbox.store';
import type { LightboxSlideData } from './lightbox.types';

export interface LightboxContextValue {
  getStyles: GetStylesApi<LightboxRootFactory>;
  store: LightboxStore;
  slides: LightboxSlideData[];
  currentIndex: number;
  setIndex: (index: number) => void;
  next: () => void;
  prev: () => void;
  embla: EmblaCarouselType | null;
  emblaRef: React.RefCallback<HTMLDivElement> | null;
  withZoom: boolean;
  withThumbnails: boolean;
  withFullscreen: boolean;
  withDownload: boolean;
  thumbnailsVisible: boolean;
  toggleThumbnails: () => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  zoomState: { scale: number; isZoomed: boolean };
  toggleZoom: () => void;
  getImageZoomProps: () => Record<string, any>;
  onClose: () => void;
  loop: boolean;
  closeOnSwipeDown: boolean;
  transitionDuration: number;
}

export const [LightboxContextProvider, useLightboxContext] =
  createSafeContext<LightboxContextValue>('Lightbox component was not found in tree');
