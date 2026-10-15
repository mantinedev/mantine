import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  BoxProps,
  Collapse,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  UnstyledButton,
  useDirection,
  useProps,
} from '@mantine/core';
import { useLightboxContext } from '../lightbox.context';
import { getSlideThumbSrc } from '../slide-utils';
import classes from '../Lightbox.module.css';

export type LightboxThumbnailsStylesNames =
  | 'thumbnails'
  | 'thumbnailsViewport'
  | 'thumbnailsContainer'
  | 'thumbnail'
  | 'thumbnailImage';

export interface LightboxThumbnailsProps
  extends
    BoxProps,
    CompoundStylesApiProps<LightboxThumbnailsFactory>,
    ElementProps<'div', 'onTransitionEnd' | 'onTransitionStart'> {}

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
  const stylesApiProps = { classNames, styles };

  const { dir } = useDirection();

  const [thumbsRef, thumbsEmbla] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    direction: dir,
    active: ctx.withThumbnails,
  });

  useEffect(() => {
    if (thumbsEmbla) {
      thumbsEmbla.scrollTo(ctx.currentIndex);
    }
  }, [ctx.currentIndex, thumbsEmbla]);

  if (!ctx.withThumbnails) {
    return null;
  }

  const thumbnails = ctx.slides.map((slide, index) => {
    const active = index === ctx.currentIndex;
    const thumbSrc = getSlideThumbSrc(slide);

    return (
      <UnstyledButton
        key={index}
        {...ctx.getStyles('thumbnail', stylesApiProps)}
        mod="reduce-motion"
        tabIndex={0}
        data-active={active || undefined}
        aria-label={ctx.labels.thumbnailLabel(index + 1, ctx.slides.length)}
        aria-current={active || undefined}
        onClick={() => ctx.setIndex(index)}
      >
        {slide.renderThumb ? (
          slide.renderThumb({ active })
        ) : thumbSrc ? (
          <img
            {...ctx.getStyles('thumbnailImage', stylesApiProps)}
            src={thumbSrc}
            alt=""
            loading="lazy"
            draggable={false}
          />
        ) : null}
      </UnstyledButton>
    );
  });

  return (
    <Collapse
      expanded={ctx.thumbnailsVisible}
      transitionDuration={ctx.transitionDuration}
      keepMounted={false}
      id={ctx.thumbnailsId}
      data-lightbox-backdrop
      {...ctx.getStyles('thumbnails', { className, style, classNames, styles })}
      {...others}
    >
      <div
        {...ctx.getStyles('thumbnailsViewport', stylesApiProps)}
        ref={thumbsRef}
        data-lightbox-backdrop
      >
        <div {...ctx.getStyles('thumbnailsContainer', stylesApiProps)} data-lightbox-backdrop>
          {thumbnails}
        </div>
      </div>
    </Collapse>
  );
});

LightboxThumbnails.classes = classes;
LightboxThumbnails.displayName = '@mantine/lightbox/LightboxThumbnails';
