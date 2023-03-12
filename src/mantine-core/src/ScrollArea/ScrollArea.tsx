import React, { useState, forwardRef } from 'react';
import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import {
  DefaultProps,
  Selectors,
  useMantineTheme,
  useComponentDefaultProps,
} from '@mantine/styles';
import { ForwardRefWithStaticComponents, packSx } from '@mantine/utils';
import { Box } from '../Box';
import useStyles, { ScrollAreaStylesParams } from './ScrollArea.styles';

export type ScrollAreaStylesNames = Selectors<typeof useStyles>;

export interface ScrollAreaProps
  extends DefaultProps<ScrollAreaStylesNames, ScrollAreaStylesParams>,
    React.ComponentPropsWithRef<'div'> {
  variant?: string;

  /** Scrollbar size */
  scrollbarSize?: number | string;

  /** Scrollbars type */
  type?: 'auto' | 'always' | 'scroll' | 'hover' | 'never';

  /** Scroll hide delay in ms, for scroll and hover types only */
  scrollHideDelay?: number;

  /** Reading direction of the scroll area */
  dir?: 'ltr' | 'rtl';

  /** Should scrollbars be offset with padding */
  offsetScrollbars?: boolean;

  /** Get viewport ref */
  viewportRef?: React.ForwardedRef<HTMLDivElement>;

  /** Props added to the viewport element */
  viewportProps?: React.ComponentPropsWithRef<'div'>;

  /** Subscribe to scroll position changes */
  onScrollPositionChange?(position: { x: number; y: number }): void;
}

const defaultProps: Partial<ScrollAreaProps> = {
  scrollbarSize: 12,
  scrollHideDelay: 1000,
  type: 'hover',
  offsetScrollbars: false,
};

export const _ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>((props, ref) => {
  const {
    children,
    className,
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
    ...others
  } = useComponentDefaultProps('ScrollArea', defaultProps, props);

  const [scrollbarHovered, setScrollbarHovered] = useState(false);
  const theme = useMantineTheme();
  const { classes, cx } = useStyles(
    { scrollbarSize, offsetScrollbars, scrollbarHovered, hidden: type === 'never' },
    { name: 'ScrollArea', classNames, styles, unstyled, variant }
  );

  return (
    <RadixScrollArea.Root
      type={type === 'never' ? 'always' : type}
      scrollHideDelay={scrollHideDelay}
      dir={dir || theme.dir}
      ref={ref}
      asChild
    >
      <Box className={cx(classes.root, className)} {...others}>
        <RadixScrollArea.Viewport
          {...viewportProps}
          className={classes.viewport}
          ref={viewportRef}
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
        </RadixScrollArea.Viewport>
        <RadixScrollArea.Scrollbar
          orientation="horizontal"
          className={classes.scrollbar}
          forceMount
          onMouseEnter={() => setScrollbarHovered(true)}
          onMouseLeave={() => setScrollbarHovered(false)}
        >
          <RadixScrollArea.Thumb className={classes.thumb} />
        </RadixScrollArea.Scrollbar>
        <RadixScrollArea.Scrollbar
          orientation="vertical"
          className={classes.scrollbar}
          forceMount
          onMouseEnter={() => setScrollbarHovered(true)}
          onMouseLeave={() => setScrollbarHovered(false)}
        >
          <RadixScrollArea.Thumb className={classes.thumb} />
        </RadixScrollArea.Scrollbar>
        <RadixScrollArea.Corner className={classes.corner} />
      </Box>
    </RadixScrollArea.Root>
  );
}) as any;

export interface ScrollAreaAutosizeProps extends ScrollAreaProps {}

const ScrollAreaAutosize = forwardRef<HTMLDivElement, ScrollAreaAutosizeProps>((props, ref) => {
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
    sx,
    variant,
    viewportProps,
    ...others
  } = useComponentDefaultProps<ScrollAreaAutosizeProps>('ScrollAreaAutosize', defaultProps, props);
  return (
    <Box {...others} ref={ref} sx={[{ display: 'flex' }, ...packSx(sx)]}>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <_ScrollArea
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
        >
          {children}
        </_ScrollArea>
      </Box>
    </Box>
  );
});

ScrollAreaAutosize.displayName = '@mantine/core/ScrollAreaAutosize';
_ScrollArea.displayName = '@mantine/core/ScrollArea';
_ScrollArea.Autosize = ScrollAreaAutosize;

export const ScrollArea: ForwardRefWithStaticComponents<
  ScrollAreaProps,
  {
    Autosize: typeof ScrollAreaAutosize;
  }
> = _ScrollArea;
