import { Children, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaCarouselType, EmblaPluginType } from 'embla-carousel-react';
import {
  AccordionChevron,
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSpacing,
  MantineSpacing,
  rem,
  StyleProp,
  StylesApiProps,
  UnstyledButton,
  useDirection,
  useProps,
  useRandomClassName,
  useStyles,
} from '@mantine/core';
import { clamp } from '@mantine/hooks';
import { CarouselProvider } from './Carousel.context';
import { CarouselSlide } from './CarouselSlide/CarouselSlide';
import {
  CarouselContainerVariables,
  CarouselVariables,
} from './CarouselVariables/CarouselVariables';
import { getChevronRotation } from './get-chevron-rotation';
import classes from './Carousel.module.css';

export type CarouselStylesNames =
  | 'slide'
  | 'root'
  | 'viewport'
  | 'container'
  | 'controls'
  | 'control'
  | 'indicators'
  | 'indicator';

export type CarouselCssVariables = {
  root: '--carousel-height' | '--carousel-control-size' | '--carousel-controls-offset';
};

export interface CarouselProps
  extends BoxProps,
    StylesApiProps<CarouselFactory>,
    ElementProps<'div'> {
  /** <Carousel.Slide /> components */
  children?: React.ReactNode;

  /** Called when next slide is shown */
  onNextSlide?: () => void;

  /** Called when previous slider is shown */
  onPreviousSlide?: () => void;

  /** Called with slide index when slide changes */
  onSlideChange?: (index: number) => void;

  /** Get embla API as ref */
  getEmblaApi?: (embla: EmblaCarouselType) => void;

  /** Props passed down to next control */
  nextControlProps?: React.ComponentPropsWithoutRef<'button'>;

  /** Props passed down to previous control */
  previousControlProps?: React.ComponentPropsWithoutRef<'button'>;

  /** Controls size of the next and previous controls, `26` by default */
  controlSize?: React.CSSProperties['width'];

  /** Controls position of the next and previous controls, key of `theme.spacing` or any valid CSS value, `'sm'` by default */
  controlsOffset?: MantineSpacing;

  /** Controls slide width based on viewport width, `'100%'` by default */
  slideSize?: StyleProp<string | number>;

  /** Key of theme.spacing or number to set gap between slides */
  slideGap?: StyleProp<MantineSpacing>;

  /** Carousel orientation, `'horizontal'` by default */
  orientation?: 'horizontal' | 'vertical';

  /** Determines type of queries used for responsive styles, `'media'` by default */
  type?: 'media' | 'container';

  /** Slides container `height`, required for vertical orientation */
  height?: React.CSSProperties['height'];

  /** Determines how slides will be aligned relative to the container. Use number between 0-1 to align slides based on percentage, where 0.5 is 50%, `'center'` by default */
  align?: 'start' | 'center' | 'end' | number;

  /** Number of slides that will be scrolled with next/previous buttons, `1` by default */
  slidesToScroll?: number | 'auto';

  /** Determines whether gap between slides should be treated as part of the slide size, `true` by default */
  includeGapInSize?: boolean;

  /** Determines whether the carousel can be scrolled with mouse and touch interactions, `true` by default */
  draggable?: boolean;

  /** Determines whether momentum scrolling should be enabled, `false` by default */
  dragFree?: boolean;

  /** Enables infinite looping. `true` by default, automatically falls back to `false` if slide content isn't enough to loop. */
  loop?: boolean;

  /** Adjusts scroll speed when triggered by any of the methods. Higher numbers enables faster scrolling. */
  speed?: number;

  /** Index of initial slide */
  initialSlide?: number;

  /** Choose a fraction representing the percentage portion of a slide that needs to be visible in order to be considered in view. For example, 0.5 equals 50%. */
  inViewThreshold?: number;

  /** Determines whether next/previous controls should be displayed, true by default */
  withControls?: boolean;

  /** Determines whether indicators should be displayed, `false` by default */
  withIndicators?: boolean;

  /** An array of embla plugins */
  plugins?: EmblaPluginType[];

  /** Icon of the next control */
  nextControlIcon?: React.ReactNode;

  /** Icon of the previous control */
  previousControlIcon?: React.ReactNode;

  /** Allow the carousel to skip scroll snaps if it is dragged vigorously. Note that this option will be ignored if the dragFree option is set to `true`, `false` by default */
  skipSnaps?: boolean;

  /** Clear leading and trailing empty space that causes excessive scrolling. Use `trimSnaps` to only use snap points that trigger scrolling or keepSnaps to keep them. */
  containScroll?: 'trimSnaps' | 'keepSnaps' | '';

  /** Determines whether arrow key should switch slides, `true` by default */
  withKeyboardEvents?: boolean;
}

export type CarouselFactory = Factory<{
  props: CarouselProps;
  ref: HTMLDivElement;
  stylesNames: CarouselStylesNames;
  vars: CarouselCssVariables;
  staticComponents: {
    Slide: typeof CarouselSlide;
  };
}>;

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
  type: 'media',
};

const varsResolver = createVarsResolver<CarouselFactory>(
  (_, { height, controlSize, controlsOffset }) => ({
    root: {
      '--carousel-height': rem(height),
      '--carousel-control-size': rem(controlSize),
      '--carousel-controls-offset': getSpacing(controlsOffset),
    },
  })
);

export const Carousel = factory<CarouselFactory>((_props, ref) => {
  const props = useProps('Carousel', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    getEmblaApi,
    onNextSlide,
    onPreviousSlide,
    onSlideChange,
    nextControlProps,
    previousControlProps,
    controlSize,
    controlsOffset,
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
    skipSnaps,
    containScroll,
    withKeyboardEvents,
    mod,
    type,
    ...others
  } = props;

  const getStyles = useStyles<CarouselFactory>({
    name: 'Carousel',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const responsiveClassName = useRandomClassName();
  const { dir } = useDirection();

  const [emblaRefElement, embla] = useEmblaCarousel(
    {
      axis: orientation === 'horizontal' ? 'x' : 'y',
      direction: orientation === 'horizontal' ? dir : undefined,
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
    if (!embla) {
      return;
    }
    const slide = embla.selectedScrollSnap();
    setSelected(slide);
    slide !== selected && onSlideChange?.(slide);
  }, [embla, setSelected, onSlideChange, selected]);

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
  }, [embla, slidesToScroll, handleSelect]);

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
        {...getStyles('indicator')}
        key={index}
        data-active={index === selected || undefined}
        aria-hidden
        tabIndex={-1}
        onClick={() => handleScroll(index)}
        data-orientation={orientation}
        onMouseDown={(event) => event.preventDefault()}
      />
    ));

  return (
    <CarouselProvider value={{ getStyles, orientation }}>
      {type === 'container' ? (
        <CarouselContainerVariables {...props} selector={`.${responsiveClassName}`} />
      ) : (
        <CarouselVariables {...props} selector={`.${responsiveClassName}`} />
      )}

      <Box
        ref={ref}
        {...getStyles('root', { className: 'responsiveClassName' })}
        {...others}
        mod={[{ orientation, 'include-gap-in-size': includeGapInSize }, mod]}
        onKeyDownCapture={handleKeydown}
      >
        <div {...getStyles('viewport')} ref={emblaRefElement} data-type={type}>
          <div
            {...getStyles('container', { className: responsiveClassName })}
            data-orientation={orientation}
          >
            {children}
          </div>
        </div>

        {withIndicators && (
          <div {...getStyles('indicators')} data-orientation={orientation}>
            {indicators}
          </div>
        )}

        {withControls && (
          <div {...getStyles('controls')} data-orientation={orientation}>
            <UnstyledButton
              {...previousControlProps}
              {...getStyles('control', {
                className: previousControlProps?.className,
                style: previousControlProps?.style,
              })}
              onClick={(event) => {
                handlePrevious();
                previousControlProps?.onClick?.(event);
              }}
              data-inactive={!canScrollPrev || undefined}
              tabIndex={canScrollPrev ? 0 : -1}
            >
              {typeof previousControlIcon !== 'undefined' ? (
                previousControlIcon
              ) : (
                <AccordionChevron
                  style={{
                    transform: `rotate(${getChevronRotation({
                      dir,
                      orientation,
                      direction: 'previous',
                    })}deg)`,
                  }}
                />
              )}
            </UnstyledButton>

            <UnstyledButton
              {...getStyles('control', {
                className: nextControlProps?.className,
                style: nextControlProps?.style,
              })}
              {...nextControlProps}
              onClick={(event) => {
                handleNext();
                nextControlProps?.onClick?.(event);
              }}
              data-inactive={!canScrollNext || undefined}
              tabIndex={canScrollNext ? 0 : -1}
            >
              {typeof nextControlIcon !== 'undefined' ? (
                nextControlIcon
              ) : (
                <AccordionChevron
                  style={{
                    transform: `rotate(${getChevronRotation({
                      dir,
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
});

Carousel.classes = classes;
Carousel.displayName = '@mantine/carousel/Carousel';
Carousel.Slide = CarouselSlide;
