import { useEffect, useRef, useState } from 'react';
import { useMergedRef } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSpacing,
  MantineSpacing,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { useDisableCopiesFocus } from './use-disable-copies-focus';
import classes from './Marquee.module.css';

export type MarqueeStylesNames = 'root' | 'content' | 'group';
export type MarqueeCssVariables = {
  root:
    | '--marquee-duration'
    | '--marquee-gap'
    | '--marquee-repeat'
    | '--marquee-fade-color'
    | '--marquee-fade-size';
};

export interface MarqueeProps
  extends BoxProps, StylesApiProps<MarqueeFactory>, ElementProps<'div'> {
  /** Reverses animation direction @default false @category appearance */
  reverse?: boolean;

  /** Pauses animation on hover and when focus is inside the marquee @default false @category behavior */
  pauseOnHover?: boolean;

  /** Controls whether the animation is running, set to `false` to pause it @default true @category behavior */
  playing?: boolean;

  /** Content to scroll @category appearance */
  children: React.ReactNode;

  /** Scroll orientation @default 'horizontal' @category appearance */
  orientation?: 'horizontal' | 'vertical';

  /** Minimum number of times children are repeated inline, more copies are rendered when needed to fill the container @default 4 @category appearance */
  repeat?: number;

  /** Animation duration in ms @default 100000 @category appearance */
  duration?: number;

  /** Gap between repeated children, key of `theme.spacing` or any valid CSS value @default 'md' @category appearance */
  gap?: MantineSpacing;

  /** Whether to show gradient fade on edges @default true @category appearance */
  fadeEdges?: boolean;

  /** Color of the fade gradient @default 'var(--mantine-color-body)' @category appearance */
  fadeEdgeColor?: string;

  /** Size of the fade gradient @default '5%' @category appearance */
  fadeEdgeSize?: string;
}

export interface MarqueeStylesCtx {
  copiesCount: number;
}

export type MarqueeFactory = Factory<{
  props: MarqueeProps;
  ref: HTMLDivElement;
  stylesNames: MarqueeStylesNames;
  vars: MarqueeCssVariables;
  ctx: MarqueeStylesCtx;
}>;

const defaultProps = {
  repeat: 4,
  duration: 100_000,
  orientation: 'horizontal',
  fadeEdges: true,
  playing: true,
} satisfies Partial<MarqueeProps>;

function normalizeRepeat(repeat: number | undefined) {
  return Number.isFinite(repeat) ? Math.max(1, Math.floor(repeat!)) : defaultProps.repeat;
}

function getSizes(root: HTMLElement, content: HTMLElement, vertical: boolean) {
  const group = content.firstElementChild as HTMLElement | null;
  const groupSize = group ? (vertical ? group.offsetHeight : group.offsetWidth) : 0;
  if (groupSize <= 0) {
    return null;
  }

  const rootStyles = window.getComputedStyle(root);
  const contentStyles = window.getComputedStyle(content);
  const padding = vertical
    ? (parseFloat(rootStyles.paddingTop) || 0) + (parseFloat(rootStyles.paddingBottom) || 0)
    : (parseFloat(rootStyles.paddingLeft) || 0) + (parseFloat(rootStyles.paddingRight) || 0);
  const gap = parseFloat(vertical ? contentStyles.rowGap : contentStyles.columnGap) || 0;

  return {
    available: (vertical ? root.clientHeight : root.clientWidth) - padding,
    content: vertical ? content.offsetHeight : content.offsetWidth,
    step: groupSize + gap,
  };
}

const varsResolver = createVarsResolver<MarqueeFactory>(
  (_, { duration, gap, fadeEdgeColor, fadeEdgeSize }, { copiesCount }) => ({
    root: {
      '--marquee-duration': `${duration}ms`,
      '--marquee-gap': getSpacing(gap),
      '--marquee-repeat': copiesCount.toString(),
      '--marquee-fade-color': fadeEdgeColor,
      '--marquee-fade-size': fadeEdgeSize,
    },
  })
);

export const Marquee = factory<MarqueeFactory>((_props) => {
  const props = useProps('Marquee', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    reverse,
    pauseOnHover,
    playing,
    orientation,
    repeat,
    duration,
    gap,
    fadeEdges,
    fadeEdgeColor,
    fadeEdgeSize,
    mod,
    attributes,
    ref,
    ...others
  } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(rootRef, ref);
  const [measuredCount, setMeasuredCount] = useState(0);
  const copiesCount = Math.max(normalizeRepeat(repeat), measuredCount);

  useEffect(() => {
    const root = rootRef.current;
    const content = contentRef.current;
    if (!root || !content || typeof ResizeObserver === 'undefined') {
      return undefined;
    }

    const vertical = orientation === 'vertical';
    let previous: { count: number; fillsRoot: boolean } | null = null;
    let sizedByContent = false;

    const observer = new ResizeObserver(() => {
      const sizes = getSizes(root, content, vertical);
      if (!sizes) {
        previous = null;
        sizedByContent = false;
        setMeasuredCount(0);
        return;
      }

      const count = content.childElementCount;
      const fillsRoot = Math.abs(sizes.available - sizes.content) <= 1;
      sizedByContent =
        fillsRoot && (sizedByContent || (!!previous?.fillsRoot && previous.count < count));
      previous = { count, fillsRoot };

      setMeasuredCount((current) =>
        sizedByContent ? current : Math.ceil(sizes.available / sizes.step) + 1
      );
    });
    observer.observe(root);
    observer.observe(content);
    if (content.firstElementChild) {
      observer.observe(content.firstElementChild);
    }

    return () => observer.disconnect();
  }, [orientation]);

  useDisableCopiesFocus(contentRef);

  const getStyles = useStyles<MarqueeFactory>({
    name: 'Marquee',
    classes,
    props,
    stylesCtx: { copiesCount },
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const repeatedChildren = Array(copiesCount)
    .fill(0)
    .map((_, index) => (
      <div key={index} {...getStyles('group')} aria-hidden={index > 0 || undefined}>
        {children}
      </div>
    ));

  return (
    <Box
      ref={mergedRef}
      {...getStyles('root')}
      mod={[{ orientation, reverse, pauseOnHover, paused: !playing, 'fade-edges': fadeEdges }, mod]}
      {...others}
    >
      <div ref={contentRef} {...getStyles('content')} data-reduce-motion>
        {repeatedChildren}
      </div>
    </Box>
  );
});

Marquee.classes = classes;
Marquee.varsResolver = varsResolver;
Marquee.displayName = '@mantine/core/Marquee';

export namespace Marquee {
  export type Props = MarqueeProps;
  export type StylesNames = MarqueeStylesNames;
  export type CssVariables = MarqueeCssVariables;
  export type Factory = MarqueeFactory;
}
