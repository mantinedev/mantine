import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '@mantine/core';
import { useLightboxContext } from '../lightbox.context';
import { useLightboxSwipeClose } from '../hooks/use-lightbox-swipe-close';
import classes from '../Lightbox.module.css';

export type LightboxSlidesStylesNames = 'slides' | 'slidesViewport' | 'slidesContainer';

export interface LightboxSlidesProps
  extends BoxProps, CompoundStylesApiProps<LightboxSlidesFactory>, ElementProps<'div'> {
  emblaRef?: React.RefCallback<HTMLDivElement>;
  children: React.ReactNode;
}

export type LightboxSlidesFactory = Factory<{
  props: LightboxSlidesProps;
  ref: HTMLDivElement;
  stylesNames: LightboxSlidesStylesNames;
  compound: true;
}>;

export const LightboxSlides = factory<LightboxSlidesFactory>((props) => {
  const { classNames, className, style, styles, vars, emblaRef, children, ...others } = useProps(
    'LightboxSlides',
    null,
    props
  );

  const ctx = useLightboxContext();

  const { handleTouchStart, handleTouchEnd } = useLightboxSwipeClose({
    enabled: ctx.closeOnSwipeDown,
    onClose: ctx.onClose,
    isZoomed: ctx.zoomState.isZoomed,
  });

  return (
    <Box
      {...ctx.getStyles('slides', { className, style, classNames, styles })}
      {...others}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div {...ctx.getStyles('slidesViewport')} ref={emblaRef ?? ctx.emblaRef}>
        <div
          {...ctx.getStyles('slidesContainer')}
          data-slide-transition={ctx.slideTransitionActive || undefined}
        >
          {children}
        </div>
      </div>
    </Box>
  );
});

LightboxSlides.classes = classes;
LightboxSlides.displayName = '@mantine/lightbox/LightboxSlides';
