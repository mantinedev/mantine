import React, { useState } from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  rem,
  createVarsResolver,
  Factory,
} from '../../core';
import { ScrollAreaScrollbar } from './ScrollAreaScrollbar/ScrollAreaScrollbar';
import { ScrollAreaCorner } from './ScrollAreaCorner/ScrollAreaCorner';
import { ScrollAreaRoot } from './ScrollAreaRoot/ScrollAreaRoot';
import { ScrollAreaViewport } from './ScrollAreaViewport/ScrollAreaViewport';
import classes from './ScrollArea.module.css';
import { ScrollAreaThumb } from './ScrollAreaThumb/ScrollAreaThumb';

export type ScrollAreaStylesNames = 'root' | 'viewport' | 'scrollbar' | 'thumb' | 'corner';
export type ScrollAreaCssVariables = {
  root: '--scrollarea-scrollbar-size';
};

export interface ScrollAreaProps
  extends BoxProps,
    StylesApiProps<ScrollAreaFactory>,
    ElementProps<'div'> {
  /** Scrollbar size, any valid CSS value for width/height, numbers are converted to rem, default value is 0.75rem */
  scrollbarSize?: number | string;

  /**
   * Defines scrollbars behavior, `hover` by default
   * - `hover` – scrollbars are visible when mouse is over the scroll area
   * - `scroll` – scrollbars are visible when the scroll area is scrolled
   * - `always` – scrollbars are always visible
   * - `never` – scrollbars are always hidden
   * - `auto` – similar to `overflow: auto` – scrollbars are always visible when the content is overflowing
   * */
  type?: 'auto' | 'always' | 'scroll' | 'hover' | 'never';

  /** Scroll hide delay in ms, applicable only when type is set to `hover` or `scroll`, `1000` by default */
  scrollHideDelay?: number;

  /** Determines whether scrollbars should be offset with padding on given axis, `false` by default */
  offsetScrollbars?: boolean | 'x' | 'y';

  /** Assigns viewport element (scrollable container) ref */
  viewportRef?: React.ForwardedRef<HTMLDivElement>;

  /** Props passed down to the viewport element */
  viewportProps?: React.ComponentPropsWithRef<'div'>;

  /** Called with current position (`x` and `y` coordinates) when viewport is scrolled */
  onScrollPositionChange?(position: { x: number; y: number }): void;
}

export interface ScrollAreaAutosizeProps extends ScrollAreaProps {}

export type ScrollAreaFactory = Factory<{
  props: ScrollAreaProps;
  ref: HTMLDivElement;
  stylesNames: ScrollAreaStylesNames;
  vars: ScrollAreaCssVariables;
  staticComponents: {
    Autosize: typeof ScrollAreaAutosize;
  };
}>;

const defaultProps: Partial<ScrollAreaProps> = {
  scrollHideDelay: 1000,
  type: 'hover',
};

const varsResolver = createVarsResolver<ScrollAreaFactory>((_, { scrollbarSize }) => ({
  root: {
    '--scrollarea-scrollbar-size': rem(scrollbarSize),
  },
}));

export const ScrollArea = factory<ScrollAreaFactory>((_props, ref) => {
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
    ...others
  } = props;

  const [scrollbarHovered, setScrollbarHovered] = useState(false);

  const getStyles = useStyles<ScrollAreaFactory>({
    name: 'ScrollArea',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <ScrollAreaRoot
      type={type === 'never' ? 'always' : type}
      scrollHideDelay={scrollHideDelay}
      ref={ref}
      {...getStyles('root')}
      {...others}
    >
      <ScrollAreaViewport
        {...viewportProps}
        {...getStyles('viewport')}
        ref={viewportRef}
        data-offset-scrollbars={offsetScrollbars === true ? 'xy' : offsetScrollbars || undefined}
        onScroll={
          typeof onScrollPositionChange === 'function'
            ? ({ currentTarget }) =>
                onScrollPositionChange({
                  x: currentTarget.scrollLeft,
                  y: currentTarget.scrollTop,
                })
            : undefined
        }
      >
        {children}
      </ScrollAreaViewport>
      <ScrollAreaScrollbar
        {...getStyles('scrollbar')}
        orientation="horizontal"
        data-hidden={type === 'never' || undefined}
        forceMount
        onMouseEnter={() => setScrollbarHovered(true)}
        onMouseLeave={() => setScrollbarHovered(false)}
      >
        <ScrollAreaThumb {...getStyles('thumb')} />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar
        {...getStyles('scrollbar')}
        orientation="vertical"
        data-hidden={type === 'never' || undefined}
        forceMount
        onMouseEnter={() => setScrollbarHovered(true)}
        onMouseLeave={() => setScrollbarHovered(false)}
      >
        <ScrollAreaThumb {...getStyles('thumb')} />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner
        {...getStyles('corner')}
        data-hovered={scrollbarHovered || undefined}
        data-hidden={type === 'never' || undefined}
      />
    </ScrollAreaRoot>
  );
});

ScrollArea.displayName = '@mantine/core/ScrollArea';

export const ScrollAreaAutosize = factory<ScrollAreaFactory>((props, ref) => {
  const {
    children,
    classNames,
    styles,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    variant,
    viewportProps,
    style,
    vars,
    ...others
  } = useProps('ScrollAreaAutosize', defaultProps, props);

  return (
    <Box {...others} ref={ref} style={[{ display: 'flex' }, style]}>
      <Box style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <ScrollArea
          classNames={classNames}
          styles={styles}
          scrollHideDelay={scrollHideDelay}
          scrollbarSize={scrollbarSize}
          type={type}
          dir={dir}
          offsetScrollbars={offsetScrollbars}
          viewportRef={viewportRef}
          onScrollPositionChange={onScrollPositionChange}
          unstyled={unstyled}
          variant={variant}
          viewportProps={viewportProps}
          vars={vars}
        >
          {children}
        </ScrollArea>
      </Box>
    </Box>
  );
});

ScrollArea.classes = classes;
ScrollAreaAutosize.displayName = '@mantine/core/ScrollAreaAutosize';
ScrollAreaAutosize.classes = classes;
ScrollArea.Autosize = ScrollAreaAutosize;
