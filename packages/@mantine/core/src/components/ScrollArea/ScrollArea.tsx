import { useEffect, useRef, useState } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './ScrollArea.module.css';
import { ScrollAreaCorner } from './ScrollAreaCorner/ScrollAreaCorner';
import { ScrollAreaRoot } from './ScrollAreaRoot/ScrollAreaRoot';
import { ScrollAreaScrollbar } from './ScrollAreaScrollbar/ScrollAreaScrollbar';
import { ScrollAreaThumb } from './ScrollAreaThumb/ScrollAreaThumb';
import { ScrollAreaViewport } from './ScrollAreaViewport/ScrollAreaViewport';

export type ScrollAreaStylesNames =
  | 'root'
  | 'viewport'
  | 'scrollbar'
  | 'thumb'
  | 'corner'
  | 'content';

export type ScrollAreaCssVariables = {
  root: '--scrollarea-scrollbar-size';
};

export interface ScrollAreaProps
  extends BoxProps, StylesApiProps<ScrollAreaFactory>, ElementProps<'div'> {
  /** Scrollbar size, any valid CSS value for width/height, numbers are converted to rem, default value is 12px (0.75rem) */
  scrollbarSize?: number | string;

  /**
   * Defines scrollbars behavior
   * - `'hover'` – scrollbars visible on hover (default)
   * - `'scroll'` – scrollbars visible during scrolling
   * - `'auto'` – scrollbars visible only when content overflows (like CSS overflow: auto)
   * - `'always'` – scrollbars always visible, even when content doesn't overflow
   * - `'never'` – scrollbars always hidden
   * @default 'hover'
   * */
  type?: 'auto' | 'always' | 'scroll' | 'hover' | 'never';

  /** Scroll hide delay in ms, applicable only when type is set to `hover` or `scroll` @default 1000 */
  scrollHideDelay?: number;

  /**
   * Axis at which scrollbars must be rendered
   * - `'x'` - horizontal scrollbar only
   * - `'y'` - vertical scrollbar only
   * - `'xy'` - both scrollbars
   * - `false` - no scrollbars rendered (content remains scrollable via mouse/touch)
   * @default 'xy'
   */
  scrollbars?: 'x' | 'y' | 'xy' | false;

  /**
   * Determines whether scrollbars should be offset with padding on given axis
   * - `true` - adds padding to offset both scrollbars (always)
   * - `'x'` - adds padding to offset horizontal scrollbar (always)
   * - `'y'` - adds padding to offset vertical scrollbar (always)
   * - `'present'` - adds padding only when scrollbars are visible (dynamic)
   * @default false
   */
  offsetScrollbars?: boolean | 'x' | 'y' | 'present';

  /** Assigns viewport element (scrollable container) ref */
  viewportRef?: React.Ref<HTMLDivElement>;

  /** Props passed down to the viewport element */
  viewportProps?: React.ComponentProps<'div'>;

  /** Called with current position (`x` and `y` coordinates) when viewport is scrolled */
  onScrollPositionChange?: (position: { x: number; y: number }) => void;

  /**
   * Called when scrollarea is scrolled to the bottom (within 0.8px tolerance for sub-pixel rendering)
   */
  onBottomReached?: () => void;

  /** Called when scrollarea is scrolled all the way to the top */
  onTopReached?: () => void;

  /** Called when scrollarea is scrolled to the left (within 0.8px tolerance for sub-pixel rendering) */
  onLeftReached?: () => void;

  /** Called when scrollarea is scrolled to the right (within 0.8px tolerance for sub-pixel rendering) */
  onRightReached?: () => void;

  /** Defines `overscroll-behavior` of the viewport */
  overscrollBehavior?: React.CSSProperties['overscrollBehavior'];
}

export interface ScrollAreaAutosizeProps extends ScrollAreaProps {
  /** Called when content overflows due to max-height, making the container scrollable */
  onOverflowChange?: (overflowing: boolean) => void;
}

export type ScrollAreaFactory = Factory<{
  props: ScrollAreaProps;
  ref: HTMLDivElement;
  stylesNames: ScrollAreaStylesNames;
  vars: ScrollAreaCssVariables;
  staticComponents: {
    Autosize: typeof ScrollAreaAutosize;
  };
}>;

export type ScrollAreaAutosizeFactory = Factory<{
  props: ScrollAreaAutosizeProps;
  ref: HTMLDivElement;
  stylesNames: ScrollAreaStylesNames;
  vars: ScrollAreaCssVariables;
}>;

const defaultProps = {
  scrollHideDelay: 1000,
  type: 'hover',
  scrollbars: 'xy',
} satisfies Partial<ScrollAreaProps>;

const varsResolver = createVarsResolver<ScrollAreaFactory>(
  (_, { scrollbarSize, overscrollBehavior, scrollbars }) => {
    let overrideOverscrollBehavior = overscrollBehavior;

    if (overscrollBehavior && scrollbars) {
      if (scrollbars === 'x') {
        overrideOverscrollBehavior = `${overscrollBehavior} auto`;
      } else if (scrollbars === 'y') {
        overrideOverscrollBehavior = `auto ${overscrollBehavior}`;
      }
    }

    return {
      root: {
        '--scrollarea-scrollbar-size': rem(scrollbarSize),
        '--scrollarea-over-scroll-behavior': overrideOverscrollBehavior,
      },
    };
  }
);

export const ScrollArea = factory<ScrollAreaFactory>((_props) => {
  const props = useProps('ScrollArea', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    scrollbarSize,
    vars,
    type,
    scrollHideDelay,
    viewportProps,
    viewportRef,
    onScrollPositionChange,
    children,
    offsetScrollbars,
    scrollbars,
    onBottomReached,
    onTopReached,
    onLeftReached,
    onRightReached,
    overscrollBehavior,
    attributes,
    ...others
  } = props;

  const [scrollbarHovered, setScrollbarHovered] = useState(false);
  const [verticalThumbVisible, setVerticalThumbVisible] = useState(false);
  const [horizontalThumbVisible, setHorizontalThumbVisible] = useState(false);

  // Refs to track previous boundary states
  const prevAtTopRef = useRef(true);
  const prevAtBottomRef = useRef(false);
  const prevAtLeftRef = useRef(true);
  const prevAtRightRef = useRef(false);

  const getStyles = useStyles<ScrollAreaFactory>({
    name: 'ScrollArea',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const localViewportRef = useRef<HTMLDivElement>(null);
  const combinedViewportRef = useMergeRefs([viewportRef, localViewportRef]);

  useEffect(() => {
    const element = localViewportRef.current;

    if (!element || offsetScrollbars !== 'present') {
      return;
    }

    const observer = new ResizeObserver(() => {
      const { scrollHeight, clientHeight, scrollWidth, clientWidth } = element;
      setVerticalThumbVisible(scrollHeight > clientHeight);
      setHorizontalThumbVisible(scrollWidth > clientWidth);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [offsetScrollbars]);

  return (
    <ScrollAreaRoot
      getStyles={getStyles}
      type={type === 'never' ? 'always' : type}
      scrollHideDelay={scrollHideDelay}
      scrollbars={scrollbars}
      {...getStyles('root')}
      {...others}
    >
      <ScrollAreaViewport
        {...viewportProps}
        {...getStyles('viewport', { style: viewportProps?.style })}
        ref={combinedViewportRef}
        data-offset-scrollbars={offsetScrollbars === true ? 'xy' : offsetScrollbars || undefined}
        data-scrollbars={scrollbars || undefined}
        data-horizontal-hidden={
          offsetScrollbars === 'present' && !horizontalThumbVisible ? 'true' : undefined
        }
        data-vertical-hidden={
          offsetScrollbars === 'present' && !verticalThumbVisible ? 'true' : undefined
        }
        onScroll={(e) => {
          viewportProps?.onScroll?.(e);
          onScrollPositionChange?.({ x: e.currentTarget.scrollLeft, y: e.currentTarget.scrollTop });
          const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } =
            e.currentTarget;

          // Vertical boundaries
          // threshold of -0.8 is required for some browsers that use sub-pixel rendering, specifically when zoomed out.
          const isAtBottom = scrollTop - (scrollHeight - clientHeight) >= -0.8;
          const isAtTop = scrollTop === 0;

          if (isAtBottom && !prevAtBottomRef.current) {
            onBottomReached?.();
          }
          if (isAtTop && !prevAtTopRef.current) {
            onTopReached?.();
          }

          prevAtBottomRef.current = isAtBottom;
          prevAtTopRef.current = isAtTop;

          // Horizontal boundaries
          const isAtRight = scrollLeft - (scrollWidth - clientWidth) >= -0.8;
          const isAtLeft = scrollLeft === 0;

          if (isAtRight && !prevAtRightRef.current) {
            onRightReached?.();
          }
          if (isAtLeft && !prevAtLeftRef.current) {
            onLeftReached?.();
          }

          prevAtRightRef.current = isAtRight;
          prevAtLeftRef.current = isAtLeft;
        }}
      >
        {children}
      </ScrollAreaViewport>

      {(scrollbars === 'xy' || scrollbars === 'x') && (
        <ScrollAreaScrollbar
          {...getStyles('scrollbar')}
          orientation="horizontal"
          data-hidden={
            type === 'never' || (offsetScrollbars === 'present' && !horizontalThumbVisible)
              ? true
              : undefined
          }
          forceMount
          onMouseEnter={() => setScrollbarHovered(true)}
          onMouseLeave={() => setScrollbarHovered(false)}
        >
          <ScrollAreaThumb {...getStyles('thumb')} />
        </ScrollAreaScrollbar>
      )}

      {(scrollbars === 'xy' || scrollbars === 'y') && (
        <ScrollAreaScrollbar
          {...getStyles('scrollbar')}
          orientation="vertical"
          data-hidden={
            type === 'never' || (offsetScrollbars === 'present' && !verticalThumbVisible)
              ? true
              : undefined
          }
          forceMount
          onMouseEnter={() => setScrollbarHovered(true)}
          onMouseLeave={() => setScrollbarHovered(false)}
        >
          <ScrollAreaThumb {...getStyles('thumb')} />
        </ScrollAreaScrollbar>
      )}

      <ScrollAreaCorner
        {...getStyles('corner')}
        data-hovered={scrollbarHovered || undefined}
        data-hidden={type === 'never' || undefined}
      />
    </ScrollAreaRoot>
  );
});

ScrollArea.displayName = '@mantine/core/ScrollArea';

export const ScrollAreaAutosize = factory<ScrollAreaAutosizeFactory>((props) => {
  const {
    children,
    classNames,
    styles,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    overscrollBehavior,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    variant,
    viewportProps,
    scrollbars,
    style,
    vars,
    onBottomReached,
    onTopReached,
    onOverflowChange,
    ...others
  } = useProps('ScrollAreaAutosize', defaultProps, props as ScrollAreaAutosizeProps);

  // Overflow detection (Autosize-only)
  const viewportObserverRef = useRef<HTMLDivElement>(null);
  const combinedViewportRef = useMergeRefs([viewportRef, viewportObserverRef]);

  const [overflowing, setOverflowing] = useState(false);
  const didMount = useRef(false);

  useEffect(() => {
    if (!onOverflowChange) {
      return;
    }

    const el = viewportObserverRef.current;

    if (!el) {
      return;
    }

    const update = () => {
      const isOverflowing = el.scrollHeight > el.clientHeight;

      if (isOverflowing !== overflowing) {
        if (didMount.current) {
          onOverflowChange?.(isOverflowing);
        } else {
          didMount.current = true;
          if (isOverflowing) {
            onOverflowChange?.(true);
          }
        }

        setOverflowing(isOverflowing);
      }
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [onOverflowChange, overflowing]);

  return (
    <Box {...others} variant={variant} style={[{ display: 'flex', overflow: 'hidden' }, style]}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          overflow: 'hidden',
          ...(scrollbars === 'y' && { minWidth: 0 }),
          ...(scrollbars === 'x' && { minHeight: 0 }),
          ...(scrollbars === 'xy' && { minWidth: 0, minHeight: 0 }),
          ...(scrollbars === false && { minWidth: 0, minHeight: 0 }),
        }}
      >
        <ScrollArea
          classNames={classNames}
          styles={styles}
          scrollHideDelay={scrollHideDelay}
          scrollbarSize={scrollbarSize}
          type={type}
          dir={dir}
          offsetScrollbars={offsetScrollbars}
          overscrollBehavior={overscrollBehavior}
          viewportRef={combinedViewportRef}
          onScrollPositionChange={onScrollPositionChange}
          unstyled={unstyled}
          variant={variant}
          viewportProps={viewportProps}
          vars={vars}
          scrollbars={scrollbars}
          onBottomReached={onBottomReached}
          onTopReached={onTopReached}
          data-autosize="true"
        >
          {children}
        </ScrollArea>
      </Box>
    </Box>
  );
});

ScrollArea.classes = classes;
ScrollArea.varsResolver = varsResolver;
ScrollAreaAutosize.displayName = '@mantine/core/ScrollAreaAutosize';
ScrollAreaAutosize.classes = classes;
ScrollArea.Autosize = ScrollAreaAutosize;
