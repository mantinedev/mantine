import {
  MantineNumberSize,
  PolymorphicComponentProps,
  PolymorphicRef,
  useMantineDefaultProps,
  ClassNames,
} from '@mantine/styles';
import React, { Children, forwardRef, useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { filterChildrenByType } from '../../utils';
import { Paper, SharedPaperProps } from '../Paper';
import { Box } from '../Box';
import { CarouselItem, CarouselItemStylesName } from './CarouselItem/CarouselItem';
import useStyles from './Carousel.styles';
import { CarouselControlProps, DefaultItem } from './DefaultItem/DefaultItem';

export type CarouselStylesName = ClassNames<typeof useStyles> | CarouselItemStylesName;

interface _CarouselProps extends SharedPaperProps {
  /** Scroll axis of the Carousel items */
  axis?: 'x' | 'y';

  /** Carousel Items */
  children: React.ReactNode;

  /** Enables scrolling the carousel through touch or mouse */
  draggable?: boolean;

  /** If true, the   */
  scrollOverflow?: boolean;

  /** Group slides together, defaults to 1 */
  slidesToScroll?: number;

  /** To set the initial scroll item, defaults to the first item i.e 0 */
  startIndex?: number;

  /** Enable infinite looping the carousel items */
  shouldLoop?: boolean;

  /** To set the height of the carousel container */
  height?: MantineNumberSize;

  /** To navigate the carousel */
  withIndicators?: boolean;

  /** To show/hide the prev and next buttons */
  withControls?: boolean;

  /** Change prev button component */
  prevButtonComponent?: React.FC<CarouselControlProps>;

  /** Change next button component */
  nextButtonComponent?: React.FC<CarouselControlProps>;

  /** Change navigation indicator component */
  indicatorButtonComponent?: React.FC<CarouselControlProps>;
}

export type CarouselProps<C> = C extends React.ElementType
  ? PolymorphicComponentProps<C, _CarouselProps>
  : never;

type CarouselCompoent = (<C = 'div'>(props: CarouselProps<C>) => React.ReactElement) & {
  displayName?: string;
  Item?: typeof CarouselItem;
};

const defaultProps: Partial<CarouselProps<any>> = {
  prevButtonComponent: DefaultItem,
  nextButtonComponent: DefaultItem,
  indicatorButtonComponent: DefaultItem,
  padding: 'md',
  scrollOverflow: false,
  height: 'md',
  axis: 'x',
  draggable: false,
  slidesToScroll: 1,
  withControls: true,
  withIndicators: false,
  shouldLoop: false,
  startIndex: 0,
};

export const Carousel: CarouselCompoent = forwardRef(
  <C extends React.ElementType = 'div'>(props: CarouselProps<C>, ref: PolymorphicRef<C>) => {
    const {
      prevButtonComponent: PrevButton,
      nextButtonComponent: NextButton,
      indicatorButtonComponent: IndicatorButton,
      navigation,
      axis,
      component,
      className,
      padding,
      radius,
      draggable,
      slidesToScroll,
      scrollOverflow,
      startIndex,
      withIndicators,
      shouldLoop,
      height,
      children,
      classNames,
      withControls,
      styles,
      ...others
    } = useMantineDefaultProps('Carousel', defaultProps, props);
    const { classes, cx } = useStyles(
      { scrollOverflow, axis, height, padding, draggable },
      { classNames, styles, name: 'Carousel' }
    );
    const _children = Children.toArray(children);

    const content = filterChildrenByType(_children, CarouselItem).map((child, index) =>
      React.cloneElement(child, {
        padding,
        key: index,
      })
    );

    const [emblaRef, embla] = useEmblaCarousel({
      skipSnaps: false,
      axis,
      draggable,
      slidesToScroll,
      startIndex,
      loop: shouldLoop,
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const onSelect = useCallback(() => {
      if (!embla) return;
      setSelectedIndex(embla.selectedScrollSnap());
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
      if (!embla) return;
      onSelect();
      setScrollSnaps(embla.scrollSnapList());
      embla.on('select', onSelect);
    }, [embla, setScrollSnaps, onSelect]);

    return (
      <Paper
        className={cx(classes.root, className)}
        radius={radius}
        padding={padding}
        ref={ref}
        component={component as any}
        {...others}
      >
        <div ref={emblaRef} className={classes.viewport}>
          <Box<any> component="div" className={classes.container}>
            {content}
          </Box>
        </div>
        {withControls && (
          <>
            <PrevButton
              buttonType="prev"
              className={cx(classes.controlButton, classes.prevButton)}
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            />
            <NextButton
              buttonType="next"
              className={cx(classes.controlButton, classes.nextButton)}
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            />
          </>
        )}
        {withIndicators && (
          <div className={classes.indicatorsContainer}>
            {scrollSnaps.map((_, index) => (
              <IndicatorButton
                buttonType="indicator"
                className={cx(classes.indicatorButton, {
                  [classes.indicatorButtonActive]: index === selectedIndex,
                })}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        )}
      </Paper>
    );
  }
);

Carousel.Item = CarouselItem;
Carousel.displayName = '@mantine/core/Carousel';
