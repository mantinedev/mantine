import type { LightboxSlideStylesApiProps } from './LightboxSlide';
import { useLightboxContext } from '../lightbox.context';
import type { LightboxImageSlide } from '../lightbox.types';

interface ImageSlideProps {
  slide: LightboxImageSlide;
  active: boolean;
  stylesApiProps?: LightboxSlideStylesApiProps;
}

export function ImageSlide({ slide, active, stylesApiProps }: ImageSlideProps) {
  const ctx = useLightboxContext();
  const { style: zoomStyle, ...zoomProps } =
    active && ctx.withZoom ? ctx.getImageZoomProps() : { style: undefined };

  return (
    <img
      {...ctx.getStyles('slideImage', { ...stylesApiProps, style: zoomStyle })}
      src={slide.src}
      alt={slide.alt ?? ''}
      srcSet={slide.srcSet}
      sizes={slide.sizes}
      loading={slide.loading ?? (active ? 'eager' : 'lazy')}
      draggable={false}
      data-reduce-motion="true"
      {...zoomProps}
    />
  );
}

ImageSlide.displayName = '@mantine/lightbox/ImageSlide';
