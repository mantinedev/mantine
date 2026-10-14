import { Ref, useEffect, useRef, useState } from 'react';
import { useIsomorphicEffect, useMergedRef, useScroller } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  getSize,
  StylesApiProps,
  useDirection,
  useProps,
  useStyles,
} from '../../core';
import { AccordionChevron } from '../Accordion';
import { UnstyledButton } from '../UnstyledButton';
import classes from './Scroller.module.css';

export type ScrollerStylesNames = 'root' | 'container' | 'content' | 'control' | 'chevron';
export type ScrollerCssVariables = {
  root: '--scroller-control-size' | '--scroller-background-color';
};

export interface ScrollerProps
  extends BoxProps, StylesApiProps<ScrollerFactory>, ElementProps<'div'> {
  /** Content to display @category appearance */
  children: React.ReactNode;

  /** Amount of pixels to scroll when clicking the control buttons @default 200 @category behavior */
  scrollAmount?: number;

  /** Width of the control buttons and their edge gradients, `xs`, `sm`, `md`, `lg`, `xl` or any valid CSS value @default 'md' @category appearance */
  controlSize?: string | number;

  /** Background color for the gradient fade on controls, sets `--scroller-background-color` @default 'var(--mantine-color-body)' @category appearance */
  edgeGradientColor?: string;

  /** Props passed to the start control button */
  startControlProps?: React.ComponentProps<'button'>;

  /** Props passed to the end control button */
  endControlProps?: React.ComponentProps<'button'>;

  /** Icon for the start control, AccordionChevron by default @category appearance */
  startControlIcon?: React.ReactNode;

  /** Icon for the end control, AccordionChevron by default @category appearance */
  endControlIcon?: React.ReactNode;

  /** Determines whether start control should always be visible regardless of scroll position @default false @category appearance */
  showStartControl?: boolean;

  /** Determines whether end control should always be visible regardless of scroll position @default false @category appearance */
  showEndControl?: boolean;

  /** Determines whether content can be scrolled by dragging with mouse @default true @category behavior */
  draggable?: boolean;

  /** Determines whether the start and end control buttons with edge gradients are rendered @default true @category appearance */
  withControls?: boolean;

  /** Ref for the root element */
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
  draggable: true,
  withControls: true,
};

const varsResolver = createVarsResolver<ScrollerFactory>(
  (theme, { controlSize, edgeGradientColor }) => ({
    root: {
      '--scroller-control-size': getSize(controlSize, 'scroller-control-size'),
      '--scroller-background-color': edgeGradientColor
        ? getThemeColor(edgeGradientColor, theme)
        : undefined,
    },
  })
);

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
    edgeGradientColor,
    startControlProps,
    endControlProps,
    startControlIcon,
    endControlIcon,
    showStartControl,
    showEndControl,
    draggable,
    withControls,
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

  const scroller = useScroller({
    scrollAmount,
    draggable,
  });

  const { dir } = useDirection();
  const [isRtl, setIsRtl] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const startControlRef = useRef<HTMLButtonElement>(null);
  const endControlRef = useRef<HTMLButtonElement>(null);
  const mergedRootRef = useMergedRef(rootRef, ref);
  const mergedStartControlRef = useMergedRef(startControlRef, startControlProps?.ref);
  const mergedEndControlRef = useMergedRef(endControlRef, endControlProps?.ref);

  const showStart = showStartControl || scroller.canScrollStart;
  const showEnd = showEndControl || scroller.canScrollEnd;

  useIsomorphicEffect(() => {
    if (rootRef.current) {
      setIsRtl(getComputedStyle(rootRef.current).direction === 'rtl');
    }
  }, [dir]);

  useEffect(() => {
    const activeElement = document.activeElement;
    const hiddenFocusedControl =
      (!showStart && activeElement === startControlRef.current) ||
      (!showEnd && activeElement === endControlRef.current);

    if (!hiddenFocusedControl) {
      return;
    }

    const visibleControl = showStart
      ? startControlRef.current
      : showEnd
        ? endControlRef.current
        : null;

    if (visibleControl) {
      visibleControl.focus();
    } else {
      (activeElement as HTMLElement).blur();
    }
  }, [showStart, showEnd]);

  const handleContainerFocus = (event: React.FocusEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const target = event.target;

    if (target === container || !target.matches(':focus-visible')) {
      return;
    }

    const inset = startControlRef.current?.offsetWidth ?? 0;
    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const visibleStart = containerRect.left + inset;
    const visibleEnd = containerRect.right - inset;

    if (targetRect.left < visibleStart) {
      container.scrollBy({ left: targetRect.left - visibleStart });
    } else if (targetRect.right > visibleEnd) {
      container.scrollBy({
        left: Math.min(targetRect.right - visibleEnd, targetRect.left - visibleStart),
      });
    }
  };

  return (
    <Box {...getStyles('root')} ref={mergedRootRef} mod={mod} {...others}>
      {withControls && (
        <UnstyledButton
          {...getStyles('control')}
          onClick={scroller.scrollStart}
          data-position="start"
          data-hidden={!showStart || undefined}
          aria-label={isRtl ? 'Scroll right' : 'Scroll left'}
          aria-hidden={!showStart || undefined}
          tabIndex={showStart ? 0 : -1}
          {...startControlProps}
          ref={mergedStartControlRef}
        >
          {startControlIcon || <AccordionChevron {...getStyles('chevron')} />}
        </UnstyledButton>
      )}

      <div
        {...getStyles('container')}
        ref={scroller.ref}
        role="presentation"
        data-draggable={draggable || undefined}
        data-dragging={scroller.isDragging || undefined}
        onFocus={handleContainerFocus}
        {...scroller.dragHandlers}
      >
        <div {...getStyles('content')}>{children}</div>
      </div>

      {withControls && (
        <UnstyledButton
          {...getStyles('control')}
          onClick={scroller.scrollEnd}
          data-position="end"
          data-hidden={!showEnd || undefined}
          aria-label={isRtl ? 'Scroll left' : 'Scroll right'}
          aria-hidden={!showEnd || undefined}
          tabIndex={showEnd ? 0 : -1}
          {...endControlProps}
          ref={mergedEndControlRef}
        >
          {endControlIcon || <AccordionChevron {...getStyles('chevron')} />}
        </UnstyledButton>
      )}
    </Box>
  );
});

Scroller.classes = classes;
Scroller.varsResolver = varsResolver;
Scroller.displayName = '@mantine/core/Scroller';

export namespace Scroller {
  export type Props = ScrollerProps;
  export type StylesNames = ScrollerStylesNames;
  export type CssVariables = ScrollerCssVariables;
  export type Factory = ScrollerFactory;
}
