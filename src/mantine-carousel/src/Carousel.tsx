/* eslint-disable react/no-unused-prop-types */
import {
  Box,
  ChevronIcon,
  DefaultProps,
  MantineNumberSize,
  Selectors,
  UnstyledButton,
  useComponentDefaultProps,
} from '@mantine/core';
import { clamp } from '@mantine/hooks';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
import useEmblaCarousel, { EmblaPluginType } from 'embla-carousel-react';
import React, { Children, forwardRef, useCallback, useEffect, useState } from 'react';
import { CarouselProvider } from './Carousel.context';
import useStyles, { CarouselStylesParams } from './Carousel.styles';
import { CarouselSlide, CarouselSlideStylesNames } from './CarouselSlide/CarouselSlide';
import { getChevronRotation } from './get-chevron-rotation';
import { CarouselBreakpoint, CarouselOrientation, Embla } from './types';

export type CarouselStylesNames = CarouselSlideStylesNames | Selectors<typeof useStyles>;

export interface CarouselProps
  extends DefaultProps<CarouselStylesNames, CarouselStylesParams>,
    React.ComponentPropsWithRef<'div'> {
  variant?: string;

  /** <Carousel.Slide /> components */
  children?: React.ReactNode;

  /** Called when user clicks next button */
  onNextSlide?(): void;

  /** Called when user clicks previous button */
  onPreviousSlide?(): void;

  /** Called with slide index when slide changes */
  onSlideChange?(index: number): void;

  /** Get embla API as ref */
  getEmblaApi?(embla: Embla): void;

  /** Next control aria-label */
  nextControlLabel?: string;

  /** Previous control aria-label */
  previousControlLabel?: string;

  /** Previous/next controls size */
  controlSize?: number;

  /** Key of theme.spacing or number to set space between next/previous control and carousel boundary */
  controlsOffset?: MantineNumberSize;

  /** Slide width, defaults to 100%, examples: 40rem 50% */
  slideSize?: string | number;

  /** Key of theme.spacing or number to set gap between slides */
  slideGap?: MantineNumberSize;

  /** Control slideSize and slideGap at different viewport sizes */
  breakpoints?: CarouselBreakpoint[];

  /** Carousel orientation, horizontal by default */
  orientation?: CarouselOrientation;

  /** Slides container height, required for vertical orientation */
  height?: React.CSSProperties['height'];

  /** Determines how slides will be aligned relative to the container. Use number between 0-1 to align slides based on percentage, where 0.5 equals 50% */
  align?: 'start' | 'center' | 'end' | number;

  /** Number of slides that should be scrolled with next/previous buttons */
  slidesToScroll?: number | 'auto';

  /** Determines whether gap should be treated as part of the slide size, true by default */
  includeGapInSize?: boolean;

  /** Determines whether carousel can be scrolled with mouse and touch interactions, true by default */
  draggable?: boolean;

  /** Determines whether momentum scrolling should be enabled, false by default */
  dragFree?: boolean;

  /** Enables infinite looping. Automatically falls back to false if slide content isn't enough to loop. */
  loop?: boolean;

  /** Adjusts scroll speed when triggered by any of the methods. Higher numbers enables faster scrolling. */
  speed?: number;

  /** Index of initial slide */
  initialSlide?: number;

  /** Choose a fraction representing the percentage portion of a slide that needs to be visible in order to be considered in view. For example, 0.5 equals 50%. */
  inViewThreshold?: number;

  /** Determines whether next/previous controls should be displayed, true by default */
  withControls?: boolean;

  /** Determines whether indicators should be displayed, false by default */
  withIndicators?: boolean;

  /** An array of embla plugins */
  plugins?: EmblaPluginType[];

  /** Icon of next control */
  nextControlIcon?: React.ReactNode;

  /** Previous control icon */
  previousControlIcon?: React.ReactNode;

  /** Allow the carousel to skip scroll snaps if it's dragged vigorously. Note that this option will be ignored if the dragFree option is set to true, false by default */
  skipSnaps?: boolean;

  /** Clear leading and trailing empty space that causes excessive scrolling. Use trimSnaps to only use snap points that trigger scrolling or keepSnaps to keep them. */
  containScroll?: 'trimSnaps' | 'keepSnaps' | '';

  /** Determines whether arrow key should switch slides, true by default */
  withKeyboardEvents?: boolean;
}

const defaultProps: Partial<CarouselProps> = {
  controlSize: 26,
  controlsOffset: 'sm',
  slideSize: '100%',
  slideGap: 0,
  orientation: 'horizontal',
  align: 'center',
  slidesToScroll: 1,
  includeGapInSize: true,
  draggable: true,
  dragFree: false,
  loop: false,
  speed: 10,
  initialSlide: 0,
  inViewThreshold: 0,
  withControls: true,
  withIndicators: false,
  skipSnaps: false,
  containScroll: '',
  withKeyboardEvents: true,
};

export const _Carousel = forwardRef<HTMLDivElement, CarouselProps>((props, ref) => {
  const {
    children,
    className,
    getEmblaApi,
    onNextSlide,
    onPreviousSlide,
    onSlideChange,
    nextControlLabel,
    previousControlLabel,
    controlSize,
    controlsOffset,
    classNames,
    styles,
    unstyled,
    slideSize,
    slideGap,
    orientation,
    height,
    align,
    slidesToScroll,
    includeGapInSize,
    draggable,
    dragFree,
    loop,
    speed,
    initialSlide,
    inViewThreshold,
    withControls,
    withIndicators,
    plugins,
    nextControlIcon,
    previousControlIcon,
    breakpoints,
    skipSnaps,
    containScroll,
    withKeyboardEvents,
    variant,
    ...others
  } = useComponentDefaultProps('Carousel', defaultProps, props);

  const { classes, cx, theme } = useStyles(
    { controlSize, controlsOffset, orientation, height, includeGapInSize, breakpoints, slideGap },
    { name: 'Carousel', classNames, styles, unstyled, variant }
  );

  const [emblaRefElement, embla] = useEmblaCarousel(
    {
      axis: orientation === 'horizontal' ? 'x' : 'y',
      // keep direction undefined for vertical orientation if the current theme is RTL
      direction: orientation === 'horizontal' ? theme.dir : undefined,
      startIndex: initialSlide,
      loop,
      align,
      slidesToScroll,
      draggable,
      dragFree,
      speed,
      inViewThreshold,
      skipSnaps,
      containScroll,
    },
    plugins
  );

  const [selected, setSelected] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);

  const handleScroll = useCallback((index: number) => embla && embla.scrollTo(index), [embla]);

  const handleSelect = useCallback(() => {
    if (!embla) return;
    const slide = embla.selectedScrollSnap();
    setSelected(slide);
    onSlideChange?.(slide);
  }, [embla, setSelected]);

  const handlePrevious = useCallback(() => {
    embla?.scrollPrev();
    onPreviousSlide?.();
  }, [embla]);

  const handleNext = useCallback(() => {
    embla?.scrollNext();
    onNextSlide?.();
  }, [embla]);

  const handleKeydown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (withKeyboardEvents) {
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          handleNext();
        }

        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          handlePrevious();
        }
      }
    },
    [embla]
  );

  useEffect(() => {
    if (embla) {
      getEmblaApi?.(embla);
      handleSelect();
      setSlidesCount(embla.scrollSnapList().length);
      embla.on('select', handleSelect);

      return () => {
        embla.off('select', handleSelect);
      };
    }

    return undefined;
  }, [embla, slidesToScroll]);

  useEffect(() => {
    if (embla) {
      embla.reInit();
      setSlidesCount(embla.scrollSnapList().length);
      setSelected((currentSelected) =>
        clamp(currentSelected, 0, Children.toArray(children).length - 1)
      );
    }
  }, [Children.toArray(children).length, slidesToScroll]);

  const canScrollPrev = embla?.canScrollPrev() || false;
  const canScrollNext = embla?.canScrollNext() || false;

  const indicators = Array(slidesCount)
    .fill(0)
    .map((_, index) => (
      <UnstyledButton
        key={index}
        data-active={index === selected || undefined}
        className={classes.indicator}
        aria-hidden
        tabIndex={-1}
        onClick={() => handleScroll(index)}
      />
    ));

  return (
    <CarouselProvider
      value={{
        slideGap,
        slideSize,
        embla,
        orientation,
        includeGapInSize,
        breakpoints,
        classNames,
        styles,
        unstyled,
        variant,
      }}
    >
      <Box
        className={cx(classes.root, className)}
        ref={ref}
        onKeyDownCapture={handleKeydown}
        {...others}
      >
        <div className={classes.viewport} ref={emblaRefElement}>
          <div className={classes.container}>{children}</div>
        </div>

        {withIndicators && <div className={classes.indicators}>{indicators}</div>}

        {withControls && (
          <div className={classes.controls}>
            <UnstyledButton
              onClick={handlePrevious}
              className={classes.control}
              aria-label={previousControlLabel}
              data-inactive={!canScrollPrev || undefined}
              tabIndex={canScrollPrev ? 0 : -1}
            >
              {typeof previousControlIcon !== 'undefined' ? (
                previousControlIcon
              ) : (
                <ChevronIcon
                  style={{
                    transform: `rotate(${getChevronRotation({
                      dir: theme.dir,
                      orientation,
                      direction: 'previous',
                    })}deg)`,
                  }}
                />
              )}
            </UnstyledButton>

            <UnstyledButton
              onClick={handleNext}
              className={classes.control}
              aria-label={nextControlLabel}
              data-inactive={!canScrollNext || undefined}
              tabIndex={canScrollNext ? 0 : -1}
            >
              {typeof nextControlIcon !== 'undefined' ? (
                nextControlIcon
              ) : (
                <ChevronIcon
                  style={{
                    transform: `rotate(${getChevronRotation({
                      dir: theme.dir,
                      orientation,
                      direction: 'next',
                    })}deg)`,
                  }}
                />
              )}
            </UnstyledButton>
          </div>
        )}
      </Box>
    </CarouselProvider>
  );
}) as any;

_Carousel.Slide = CarouselSlide;
_Carousel.displayName = '@mantine/carousel/Carousel';

export const Carousel: ForwardRefWithStaticComponents<
  CarouselProps,
  { Slide: typeof CarouselSlide }
> = _Carousel;
