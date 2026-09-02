import type { LightboxLabels } from './lightbox.types';

export const DEFAULT_LABELS: LightboxLabels = {
  lightboxLabel: 'Gallery',
  slideLabel: (index, total) => `Slide ${index} of ${total}`,
  slidesLabel: 'Slides',
  previousSlideLabel: 'Previous slide',
  nextSlideLabel: 'Next slide',
  thumbnailLabel: (index) => `Go to slide ${index}`,
  enterFullscreenLabel: 'Enter fullscreen',
  exitFullscreenLabel: 'Exit fullscreen',
  showThumbnailsLabel: 'Show thumbnails',
  hideThumbnailsLabel: 'Hide thumbnails',
  downloadLabel: 'Download',
  closeLabel: 'Close',
};
