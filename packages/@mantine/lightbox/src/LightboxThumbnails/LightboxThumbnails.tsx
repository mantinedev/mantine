import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  UnstyledButton,
  useProps,
} from '@mantine/core';
import { useLightboxContext } from '../lightbox.context';
import classes from '../Lightbox.module.css';

export type LightboxThumbnailsStylesNames =
  | 'thumbnails'
  | 'thumbnailsViewport'
  | 'thumbnailsContainer'
  | 'thumbnail'
  | 'thumbnailImage';

export interface LightboxThumbnailsProps
  extends BoxProps, CompoundStylesApiProps<LightboxThumbnailsFactory>, ElementProps<'div'> {}

export type LightboxThumbnailsFactory = Factory<{
  props: LightboxThumbnailsProps;
  ref: HTMLDivElement;
  stylesNames: LightboxThumbnailsStylesNames;
  compound: true;
}>;

export const LightboxThumbnails = factory<LightboxThumbnailsFactory>((props) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    'LightboxThumbnails',
    null,
    props
  );

  const ctx = useLightboxContext();

  const [thumbsRef, thumbsEmbla] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  useEffect(() => {
    if (thumbsEmbla) {
      thumbsEmbla.scrollTo(ctx.currentIndex);
    }
  }, [ctx.currentIndex, thumbsEmbla]);

  if (!ctx.thumbnailsVisible) {
    return null;
  }

  const thumbnails = ctx.slides.map((slide, index) => {
    const hasCustomThumb = slide.type === 'custom' && slide.renderThumb;
    const thumbSrc =
      slide.thumbSrc ??
      (slide.type === 'video' ? slide.poster : undefined) ??
      (slide.type !== 'custom' ? slide.src : undefined);

    return (
      <UnstyledButton
        key={index}
        {...ctx.getStyles('thumbnail')}
        data-active={index === ctx.currentIndex || undefined}
        aria-label={`Go to slide ${index + 1}`}
        aria-current={index === ctx.currentIndex || undefined}
        onClick={() => ctx.setIndex(index)}
      >
        {hasCustomThumb ? (
          slide.renderThumb!()
        ) : thumbSrc ? (
          <img {...ctx.getStyles('thumbnailImage')} src={thumbSrc} alt="" draggable={false} />
        ) : null}
      </UnstyledButton>
    );
  });

  return (
    <Box {...ctx.getStyles('thumbnails', { className, style, classNames, styles })} {...others}>
      <div {...ctx.getStyles('thumbnailsViewport')} ref={thumbsRef}>
        <div {...ctx.getStyles('thumbnailsContainer')}>{thumbnails}</div>
      </div>
    </Box>
  );
});

LightboxThumbnails.classes = classes;
LightboxThumbnails.displayName = '@mantine/lightbox/LightboxThumbnails';
