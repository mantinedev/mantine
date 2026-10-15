import { LightboxImageSlide, LightboxSlideData } from './lightbox.types';

export function isImageSlide(slide: LightboxSlideData): slide is LightboxImageSlide {
  return slide.type === undefined || slide.type === 'image';
}

export function getSlideThumbSrc(slide: LightboxSlideData) {
  return (
    slide.thumbSrc ??
    (slide.type === 'video' ? slide.poster : undefined) ??
    (isImageSlide(slide) ? slide.src : undefined)
  );
}

export function getSlideAccessibleName(slide: LightboxSlideData | undefined) {
  if (slide?.type === 'video') {
    return slide.label;
  }

  return slide?.type === 'custom' ? undefined : slide?.alt;
}
