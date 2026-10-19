import { useCallback, useEffectEvent, useRef, useState } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { useIsomorphicEffect } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  rem,
  StylesApiProps,
  useDirection,
  useProps,
  useStyles,
} from '../../core';
import { ScrollAreaCorner } from './ScrollAreaCorner/ScrollAreaCorner';
import { ScrollAreaRoot } from './ScrollAreaRoot/ScrollAreaRoot';
import { ScrollAreaScrollbar } from './ScrollAreaScrollbar/ScrollAreaScrollbar';
import { ScrollAreaThumb } from './ScrollAreaThumb/ScrollAreaThumb';
import { ScrollAreaViewport } from './ScrollAreaViewport/ScrollAreaViewport';
import { useResizeObserver } from './use-resize-observer';
import classes from './ScrollArea.module.css';

export type ScrollAreaStylesNames =
  | 'root'
  | 'viewport'
  | 'scrollbar'
  | 'thumb'
  | 'corner'
  | 'content';

export type ScrollAreaCssVariables = {
  root: '--scrollarea-scrollbar-size' | '--scrollarea-fade-size' | '--scrollarea-offset-size';
};

export interface ScrollAreaProps
  extends BoxProps, StylesApiProps<ScrollAreaFactory>, ElementProps<'div'> {
  /** Scrollbar size, any valid CSS value for width/height, numbers are converted to rem, default value is 12px (0.75rem) @category appearance */
  scrollbarSize?: number | string;

  /**
   * Defines scrollbars behavior
   * - `'hover'` – scrollbars visible on hover (default)
   * - `'scroll'` – scrollbars visible during scrolling
   * - `'auto'` – scrollbars visible only when content overflows (like CSS overflow: auto)
   * - `'always'` – scrollbars always visible, even when content doesn't overflow
   * - `'never'` – scrollbars always hidden
   * @default 'hover' @category appearance
   * */
  type?: 'auto' | 'always' | 'scroll' | 'hover' | 'never';

  /** Scroll hide delay in ms, applicable only when type is set to `hover` or `scroll` @default 1000 @category appearance */
  scrollHideDelay?: number;

  /**
   * Axis at which scrollbars must be rendered
   * - `'x'` - horizontal scrollbar only
   * - `'y'` - vertical scrollbar only
   * - `'xy'` - both scrollbars
   * - `false` - no scrollbars rendered (content remains scrollable via mouse/touch)
   * @default 'xy' @category appearance
   */
  scrollbars?: 'x' | 'y' | 'xy' | false;

  /**
   * Determines whether scrollbars should be offset with padding on given axis
   * - `true` - adds padding to offset both scrollbars (always)
   * - `'x'` - adds padding to offset horizontal scrollbar (always)
   * - `'y'` - adds padding to offset vertical scrollbar (always)
   * - `'present'` - adds padding only when scrollbars are visible (dynamic)
   * @default false @category appearance
   */
  offsetScrollbars?: boolean | 'x' | 'y' | 'present';

  /**
   * Fades out the content at the scrollable edges to indicate that there is more content to scroll.
   * The fade at a given edge is shown only when there is hidden content past it.
   * - `true` – fades both axes, bounded by `scrollbars`
   * - `'x'` – fades the horizontal edges only
   * - `'y'` – fades the vertical edges only
   * @default false @category appearance
   */
  scrollFade?: boolean | 'x' | 'y';

  /** Length of the edge fade gradient, numbers are converted to rem @default '2rem' @category appearance */
  scrollFadeSize?: number | string;

  /** Assigns viewport element (scrollable container) ref */
  viewportRef?: React.Ref<HTMLDivElement>;

  /** Props passed down to the viewport element */
  viewportProps?: React.ComponentProps<'div'>;

  /** Called with current position (`x` and `y` coordinates) when viewport is scrolled @category behavior */
  onScrollPositionChange?: (position: { x: number; y: number }) => void;

  /**
   * Called when scrollarea is scrolled to the bottom (within 0.8px tolerance for sub-pixel rendering) @category behavior
   */
  onBottomReached?: () => void;

  /** Called when scrollarea is scrolled all the way to the top @category behavior */
  onTopReached?: () => void;

  /** Called when scrollarea is scrolled to the left (within 0.8px tolerance for sub-pixel rendering) @category behavior */
  onLeftReached?: () => void;

  /** Called when scrollarea is scrolled to the right (within 0.8px tolerance for sub-pixel rendering) @category behavior */
  onRightReached?: () => void;

  /** Defines `overscroll-behavior` of the viewport @category behavior */
  overscrollBehavior?: React.CSSProperties['overscrollBehavior'];

  /** Initial scroll position set on mount @category state */
  startScrollPosition?: { x?: number; y?: number };

  /**
   * Pins the vertical scrollbar to a physical side (`left` or `right`) regardless of direction.
   * By default, the scrollbar follows the inline-end edge (right in LTR, left in RTL). @category appearance
   */
  verticalScrollbarPosition?: 'left' | 'right';
}

export interface ScrollAreaAutosizeProps extends ScrollAreaProps {
  /** Called when content overflows due to max-height, making the container scrollable @category behavior */
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
  (_, { scrollbarSize, overscrollBehavior, scrollbars, scrollFadeSize }) => {
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
        '--scrollarea-fade-size': rem(scrollFadeSize),
        '--scrollarea-offset-size': undefined,
      },
    };
  }
);

type ScrollFadeAxis = 'x' | 'y' | 'xy';

function resolveScrollFadeAxis(
  scrollFade: ScrollAreaProps['scrollFade'],
  scrollbars: ScrollAreaProps['scrollbars']
): ScrollFadeAxis | undefined {
  if (!scrollFade) {
    return undefined;
  }

  if (scrollFade === 'x' || scrollFade === 'y') {
    return scrollFade;
  }

  return scrollbars || undefined;
}

function setFadeAttribute(element: HTMLElement, name: string, active: boolean) {
  if (active) {
    element.setAttribute(name, 'true');
  } else {
    element.removeAttribute(name);
  }
}

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
    scrollFade,
    scrollFadeSize,
    onBottomReached,
    onTopReached,
    onLeftReached,
    onRightReached,
    overscrollBehavior,
    startScrollPosition,
    verticalScrollbarPosition,
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
  const [viewportElement, setViewportElement] = useState<HTMLDivElement | null>(null);
  const viewportCallbackRef = useCallback((node: HTMLDivElement | null) => {
    setViewportElement((current) => (current === node ? current : node));
  }, []);
  const combinedViewportRef = useMergeRefs([viewportRef, localViewportRef, viewportCallbackRef]);

  const { dir } = useDirection();
  const resolvedScrollFade = resolveScrollFadeAxis(scrollFade, scrollbars);

  const updateFadeState = () => {
    const element = localViewportRef.current;
    if (!element) {
      return;
    }

    const fadeY = resolvedScrollFade === 'y' || resolvedScrollFade === 'xy';
    const fadeX = resolvedScrollFade === 'x' || resolvedScrollFade === 'xy';

    if (!fadeY && !fadeX) {
      setFadeAttribute(element, 'data-fade-top', false);
      setFadeAttribute(element, 'data-fade-bottom', false);
      setFadeAttribute(element, 'data-fade-left', false);
      setFadeAttribute(element, 'data-fade-right', false);
      return;
    }

    const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = element;

    setFadeAttribute(element, 'data-fade-top', fadeY && scrollTop > 0);
    setFadeAttribute(
      element,
      'data-fade-bottom',
      fadeY && scrollTop - (scrollHeight - clientHeight) < -0.8
    );

    const maxScrollLeft = scrollWidth - clientWidth;
    const distanceFromStart = Math.abs(scrollLeft);
    const contentHiddenBeforeStart = distanceFromStart > 0;
    const contentHiddenAfterEnd = maxScrollLeft - distanceFromStart > 0.8;
    const contentHiddenLeft = dir === 'rtl' ? contentHiddenAfterEnd : contentHiddenBeforeStart;
    const contentHiddenRight = dir === 'rtl' ? contentHiddenBeforeStart : contentHiddenAfterEnd;

    setFadeAttribute(element, 'data-fade-left', fadeX && contentHiddenLeft);
    setFadeAttribute(element, 'data-fade-right', fadeX && contentHiddenRight);
  };

  useResizeObserver(
    offsetScrollbars === 'present' || resolvedScrollFade ? viewportElement : null,
    () => {
      const element = localViewportRef.current;
      if (element && offsetScrollbars === 'present') {
        setVerticalThumbVisible(element.scrollHeight > element.clientHeight);
        setHorizontalThumbVisible(element.scrollWidth > element.clientWidth);
      }
      updateFadeState();
    }
  );

  useResizeObserver(
    resolvedScrollFade && viewportElement
      ? (viewportElement.firstElementChild as HTMLElement | null)
      : null,
    updateFadeState
  );

  useIsomorphicEffect(() => {
    if (startScrollPosition && localViewportRef.current) {
      localViewportRef.current.scrollTo({
        left: startScrollPosition.x ?? 0,
        top: startScrollPosition.y ?? 0,
      });
    }
  }, []);

  useIsomorphicEffect(() => {
    updateFadeState();
  }, [resolvedScrollFade, dir]);

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
        data-scroll-fade={resolvedScrollFade || undefined}
        data-vertical-scrollbar-position={verticalScrollbarPosition || undefined}
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

          if (resolvedScrollFade) {
            updateFadeState();
          }
        }}
      >
        {children}
      </ScrollAreaViewport>

      {(scrollbars === 'xy' || scrollbars === 'x') && (
        <ScrollAreaScrollbar
          {...getStyles('scrollbar')}
          orientation="horizontal"
          data-vertical-scrollbar-position={verticalScrollbarPosition || undefined}
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
          data-vertical-scrollbar-position={verticalScrollbarPosition || undefined}
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
        data-vertical-scrollbar-position={verticalScrollbarPosition || undefined}
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
    scrollFade,
    scrollFadeSize,
    style,
    vars,
    onBottomReached,
    onTopReached,
    startScrollPosition,
    verticalScrollbarPosition,
    onOverflowChange,
    ...others
  } = useProps('ScrollAreaAutosize', defaultProps, props as ScrollAreaAutosizeProps);

  // Overflow detection (Autosize-only)
  const viewportObserverRef = useRef<HTMLDivElement>(null);
  const [viewportObserverElement, setViewportObserverElement] = useState<HTMLDivElement | null>(
    null
  );
  const viewportObserverCallbackRef = useCallback((node: HTMLDivElement | null) => {
    setViewportObserverElement((current) => (current === node ? current : node));
  }, []);
  const combinedViewportRef = useMergeRefs([
    viewportRef,
    viewportObserverRef,
    viewportObserverCallbackRef,
  ]);

  const overflowingRef = useRef(false);
  const didMountRef = useRef(false);

  const handleOverflowCheck = useEffectEvent(() => {
    const el = viewportObserverRef.current;
    if (!el || !onOverflowChange) {
      return;
    }

    const isOverflowing = el.scrollHeight > el.clientHeight;

    if (isOverflowing !== overflowingRef.current) {
      if (didMountRef.current) {
        onOverflowChange(isOverflowing);
      } else {
        didMountRef.current = true;
        if (isOverflowing) {
          onOverflowChange(true);
        }
      }

      overflowingRef.current = isOverflowing;
    }
  });

  useResizeObserver(onOverflowChange ? viewportObserverElement : null, handleOverflowCheck);

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
          scrollFade={scrollFade}
          scrollFadeSize={scrollFadeSize}
          onBottomReached={onBottomReached}
          onTopReached={onTopReached}
          startScrollPosition={startScrollPosition}
          verticalScrollbarPosition={verticalScrollbarPosition}
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

export namespace ScrollArea {
  export type Props = ScrollAreaProps;
  export type AutosizeProps = ScrollAreaAutosizeProps;
  export type StylesNames = ScrollAreaStylesNames;
  export type CssVariables = ScrollAreaCssVariables;
  export type Factory = ScrollAreaFactory;

  export namespace Autosize {
    export type Props = ScrollAreaAutosizeProps;
  }
}
