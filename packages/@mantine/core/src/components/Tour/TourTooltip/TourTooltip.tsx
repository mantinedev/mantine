import { useEffect } from 'react';
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react';
import { useMergedRef } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useDirection,
  useProps,
} from '../../../core';
import { getFloatingPosition, type FloatingPosition } from '../../../utils/Floating';
import { Transition, type TransitionOverride } from '../../Transition';
import { useTourContext } from '../Tour.context';
import { useTooltipAutoFocus } from '../use-tooltip-auto-focus';
import classes from '../Tour.module.css';

export type TourTooltipStylesNames = 'tooltip';

export interface TourTooltipProps
  extends BoxProps, CompoundStylesApiProps<TourTooltipFactory>, ElementProps<'div'> {
  /** Target element to position against */
  targetElement?: HTMLElement | null;

  /** Tooltip position @default 'bottom' */
  position?: FloatingPosition;

  /** Whether the tooltip is visible */
  mounted?: boolean;

  /** Transition props for the tooltip, merged with `transitionProps` of `Tour.Root` */
  transitionProps?: TransitionOverride;
}

export type TourTooltipFactory = Factory<{
  props: TourTooltipProps;
  ref: HTMLDivElement;
  stylesNames: TourTooltipStylesNames;
  compound: true;
}>;

const defaultProps: Partial<TourTooltipProps> = {
  position: 'bottom',
};

export const TourTooltip = factory<TourTooltipFactory>((_props) => {
  const props = useProps('TourTooltip', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    targetElement,
    position,
    mounted,
    transitionProps,
    children,
    ref,
    role,
    tabIndex,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    ...others
  } = props;

  const ctx = useTourContext();
  const { dir } = useDirection();
  const { setTargetElement } = ctx;

  useEffect(() => {
    setTargetElement(targetElement ?? null);
    return () => setTargetElement(null);
  }, [targetElement, setTargetElement]);

  const { refs, floatingStyles } = useFloating({
    elements: { reference: targetElement },
    placement: getFloatingPosition(dir, position!),
    whileElementsMounted: autoUpdate,
    middleware: [offset(12), flip(), shift({ padding: 8 })],
  });

  const autoFocusRef = useTooltipAutoFocus({
    autoFocus: !!mounted,
    opened: !!mounted,
    step: ctx.step,
  });
  const transition = { ...ctx.transitionProps, ...transitionProps };
  const mergedRef = useMergedRef(refs.setFloating, autoFocusRef, ref);

  return (
    <Transition
      mounted={!!mounted}
      duration={transition.duration ?? 200}
      transition={transition.transition ?? 'fade'}
      timingFunction={transition.timingFunction}
    >
      {(transitionStyles) => (
        <Box
          ref={mergedRef}
          role={role ?? 'dialog'}
          tabIndex={tabIndex ?? -1}
          aria-labelledby={ariaLabelledBy ?? (ctx.titleMounted ? ctx.titleId : undefined)}
          aria-label={
            ariaLabel ??
            (ctx.titleMounted ? undefined : ctx.labels.stepCounter(ctx.step + 1, ctx.stepsCount))
          }
          aria-describedby={ariaDescribedBy ?? (ctx.bodyMounted ? ctx.bodyId : undefined)}
          {...ctx.getStyles('tooltip', { className, classNames, style, styles })}
          data-centered={!targetElement || undefined}
          style={{
            ...ctx.getStyles('tooltip').style,
            ...(targetElement ? floatingStyles : {}),
            ...transitionStyles,
          }}
          {...others}
        >
          {children}
        </Box>
      )}
    </Transition>
  );
});

TourTooltip.classes = classes;
TourTooltip.displayName = '@mantine/core/TourTooltip';

export namespace TourTooltip {
  export type Props = TourTooltipProps;
}
