import React, { forwardRef } from 'react';
import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import { DefaultProps, useExtractedMargins, ClassNames } from '@mantine/styles';
import useStyles from './ScrollArea.styles';

export type ScrollAreaStylesNames = ClassNames<typeof useStyles>;

export interface ScrollAreaProps
  extends DefaultProps<ScrollAreaStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Scrollbar size in px */
  scrollbarSize?: number;

  /** Scrollbars type */
  type?: 'auto' | 'always' | 'scroll' | 'hover';

  /** Scroll hide delay in ms, for scroll and hover types only */
  scrollHideDelay?: number;

  /** Reading direction of the scroll area */
  dir?: 'ltr' | 'rtl';
}

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      children,
      style,
      className,
      classNames,
      styles,
      sx,
      scrollbarSize = 12,
      scrollHideDelay = 1000,
      type = 'hover',
      dir = 'ltr',
      ...others
    }: ScrollAreaProps,
    ref
  ) => {
    const { mergedStyles, rest } = useExtractedMargins({ style, others });
    const { classes, cx } = useStyles(
      { scrollbarSize },
      { name: 'ScrollArea', classNames, styles, sx }
    );

    return (
      <RadixScrollArea.Root
        type={type}
        scrollHideDelay={scrollHideDelay}
        dir={dir}
        className={cx(classes.root, className)}
        style={mergedStyles}
        ref={ref}
        {...rest}
      >
        <RadixScrollArea.Viewport className={classes.viewport}>{children}</RadixScrollArea.Viewport>
        <RadixScrollArea.Scrollbar
          orientation="horizontal"
          className={classes.scrollbar}
          forceMount
        >
          <RadixScrollArea.Thumb className={classes.thumb} />
        </RadixScrollArea.Scrollbar>
        <RadixScrollArea.Scrollbar orientation="vertical" className={classes.scrollbar} forceMount>
          <RadixScrollArea.Thumb className={classes.thumb} />
        </RadixScrollArea.Scrollbar>
        <RadixScrollArea.Corner className={classes.corner} />
      </RadixScrollArea.Root>
    );
  }
);

ScrollArea.displayName = '@mantine/core/ScrollArea';
