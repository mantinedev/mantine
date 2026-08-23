import { useMergedRef } from '@mantine/hooks';
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
  /** Embla carousel ref callback */
  emblaRef?: React.RefCallback<HTMLDivElement>;

  /** Slide components */
  children: React.ReactNode;
}

export type LightboxSlidesFactory = Factory<{
  props: LightboxSlidesProps;
  ref: HTMLDivElement;
  stylesNames: LightboxSlidesStylesNames;
  compound: true;
}>;

export const LightboxSlides = factory<LightboxSlidesFactory>((props) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    emblaRef,
    children,
    onTouchStart,
    onTouchEnd,
    ...others
  } = useProps('LightboxSlides', null, props);

  const ctx = useLightboxContext();
  const stylesApiProps = { classNames, styles };

  const viewportRef = useMergedRef(ctx.emblaRef, emblaRef);

  const { handleTouchStart, handleTouchEnd } = useLightboxSwipeClose({
    enabled: ctx.closeOnSwipeDown,
    onClose: ctx.onClose,
    isZoomed: ctx.zoomState.isZoomed,
  });

  return (
    <Box
      {...ctx.getStyles('slides', { className, style, classNames, styles })}
      role="region"
      aria-roledescription="carousel"
      aria-label={ctx.labels.slidesLabel}
      {...others}
      onTouchStart={(event) => {
        onTouchStart?.(event);
        handleTouchStart(event);
      }}
      onTouchEnd={(event) => {
        onTouchEnd?.(event);
        handleTouchEnd(event);
      }}
    >
      <div {...ctx.getStyles('slidesViewport', stylesApiProps)} ref={viewportRef}>
        <div {...ctx.getStyles('slidesContainer', stylesApiProps)}>{children}</div>
      </div>
    </Box>
  );
});

LightboxSlides.classes = classes;
LightboxSlides.displayName = '@mantine/lightbox/LightboxSlides';
