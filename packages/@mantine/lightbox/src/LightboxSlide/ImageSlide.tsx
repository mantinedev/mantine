import { useLightboxContext } from '../lightbox.context';
import type { LightboxImageSlide } from '../lightbox.types';

interface ImageSlideProps {
  slide: LightboxImageSlide;
  active: boolean;
}

export function ImageSlide({ slide, active }: ImageSlideProps) {
  const ctx = useLightboxContext();
  const zoomProps = active && ctx.withZoom ? ctx.getImageZoomProps() : {};

  return (
    <img
      {...ctx.getStyles('slideImage')}
      src={slide.src}
      alt={slide.alt ?? ''}
      srcSet={slide.srcSet}
      sizes={slide.sizes}
      draggable={false}
      {...zoomProps}
    />
  );
}

ImageSlide.displayName = '@mantine/lightbox/ImageSlide';
