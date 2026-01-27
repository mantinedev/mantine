import { Ref, useCallback, useEffect, useRef, useState } from 'react';
import { useMergedRef, useResizeObserver } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { AccordionChevron } from '../Accordion';
import { UnstyledButton } from '../UnstyledButton';
import classes from './Scroller.module.css';

export type ScrollerStylesNames = 'root' | 'container' | 'content' | 'control';
export type ScrollerCssVariables = {
  root: '--scroller-control-size' | '--scroller-background-color';
};

export interface ScrollerProps
  extends BoxProps, StylesApiProps<ScrollerFactory>, ElementProps<'div'> {
  /** Content to display */
  children: React.ReactNode;

  /** Amount of pixels to scroll when clicking the control buttons, `200` by default */
  scrollAmount?: number;

  /** Size of the control buttons, `'sm'` by default */
  controlSize?: MantineSize | (string & {}) | number;

  /** Background color for the gradient fade on controls, `'var(--mantine-color-body)'` by default */
  backgroundColor?: string;

  /** Props passed to the start control button */
  startControlProps?: React.ComponentPropsWithoutRef<'button'>;

  /** Props passed to the end control button */
  endControlProps?: React.ComponentPropsWithoutRef<'button'>;

  /** Icon component for the start control, AccordionChevron by default */
  startControlIcon?: React.ReactNode;

  /** Icon component for the end control, AccordionChevron by default */
  endControlIcon?: React.ReactNode;

  /** Determines whether start control should always be visible regardless of scroll position, `false` by default */
  showStartControl?: boolean;

  /** Determines whether end control should always be visible regardless of scroll position, `false` by default */
  showEndControl?: boolean;

  /** Determines whether content can be scrolled by dragging with mouse, `true` by default */
  draggable?: boolean;

  /** Ref for the scroll container element */
  ref?: Ref<HTMLDivElement>;
}

export type ScrollerFactory = Factory<{
  props: ScrollerProps;
  ref: HTMLDivElement;
  stylesNames: ScrollerStylesNames;
  vars: ScrollerCssVariables;
}>;

const defaultProps: Partial<ScrollerProps> = {
  scrollAmount: 200,
  controlSize: 'sm',
  draggable: true,
};

const varsResolver = createVarsResolver<ScrollerFactory>((_, { controlSize, backgroundColor }) => {
  const size =
    typeof controlSize === 'number'
      ? `${controlSize}px`
      : `var(--mantine-spacing-${controlSize}, ${controlSize})`;

  return {
    root: {
      '--scroller-control-size': size,
      '--scroller-background-color': backgroundColor,
    },
  };
});

export const Scroller = factory<ScrollerFactory>((_props) => {
  const props = useProps('Scroller', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    scrollAmount,
    controlSize,
    backgroundColor,
    startControlProps,
    endControlProps,
    startControlIcon,
    endControlIcon,
    showStartControl,
    showEndControl,
    draggable,
    mod,
    ref,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<ScrollerFactory>({
    name: 'Scroller',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    attributes,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const [resizeRef] = useResizeObserver();
  const scrollContainerRef = useMergedRef(containerRef, resizeRef);

  const [canScrollStart, setCanScrollStart] = useState(false);
  const [canScrollEnd, setCanScrollEnd] = useState(false);

  const updateScrollState = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isRtl = getComputedStyle(container).direction === 'rtl';

      if (isRtl) {
        // In RTL, scrollLeft is 0 at the right edge and negative when scrolling left
        setCanScrollStart(scrollLeft < 0);
        setCanScrollEnd(scrollLeft > -(scrollWidth - clientWidth));
      } else {
        setCanScrollStart(scrollLeft > 0);
        setCanScrollEnd(scrollLeft < scrollWidth - clientWidth - 1);
      }
    }
  }, []);

  useEffect(() => {
    updateScrollState();
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollState);
      return () => container.removeEventListener('scroll', updateScrollState);
    }
    return undefined;
  }, [updateScrollState]);

  const scroll = useCallback(
    (direction: 'start' | 'end') => {
      const container = containerRef.current;
      if (container) {
        const isRtl = getComputedStyle(container).direction === 'rtl';
        const amount = scrollAmount || 200;
        const scrollBy = direction === 'end' ? amount : -amount;
        const adjustedScrollBy = isRtl ? -scrollBy : scrollBy;

        container.scrollBy({
          left: adjustedScrollBy,
          behavior: 'smooth',
        });
      }
    },
    [scrollAmount]
  );

  const handleScrollStart = useCallback(() => scroll('start'), [scroll]);
  const handleScrollEnd = useCallback(() => scroll('end'), [scroll]);

  // Mouse drag scrolling
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!draggable) {
        return;
      }
      const container = containerRef.current;
      if (container) {
        isDragging.current = true;
        startX.current = e.pageX - container.offsetLeft;
        scrollLeftStart.current = container.scrollLeft;
        container.style.cursor = 'grabbing';
        container.style.userSelect = 'none';
      }
    },
    [draggable]
  );

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) {
      return;
    }
    e.preventDefault();
    const container = containerRef.current;
    if (container) {
      const x = e.pageX - container.offsetLeft;
      const walk = x - startX.current;
      container.scrollLeft = scrollLeftStart.current - walk;
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    const container = containerRef.current;
    if (container) {
      container.style.cursor = '';
      container.style.userSelect = '';
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (isDragging.current) {
      handleMouseUp();
    }
  }, [handleMouseUp]);

  const showStart = showStartControl || canScrollStart;
  const showEnd = showEndControl || canScrollEnd;

  return (
    <Box {...getStyles('root')} ref={ref} mod={mod} {...others}>
      <UnstyledButton
        {...getStyles('control')}
        onClick={handleScrollStart}
        data-position="start"
        data-hidden={!showStart || undefined}
        aria-label="Scroll left"
        tabIndex={showStart ? 0 : -1}
        {...startControlProps}
      >
        {startControlIcon || <AccordionChevron size={20} />}
      </UnstyledButton>

      <div
        {...getStyles('container')}
        ref={scrollContainerRef}
        role="presentation"
        data-draggable={draggable || undefined}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div {...getStyles('content')}>{children}</div>
      </div>

      <UnstyledButton
        {...getStyles('control')}
        onClick={handleScrollEnd}
        data-position="end"
        data-hidden={!showEnd || undefined}
        aria-label="Scroll right"
        tabIndex={showEnd ? 0 : -1}
        {...endControlProps}
      >
        {endControlIcon || <AccordionChevron size={20} />}
      </UnstyledButton>
    </Box>
  );
});

Scroller.classes = classes;
Scroller.displayName = '@mantine/core/Scroller';
