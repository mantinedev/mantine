import { flip, offset, shift, useFloating } from '@floating-ui/react';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import type { FloatingPosition } from '../../utils/Floating';
import { Transition, type TransitionOverride } from '../Transition';
import { useTourContext } from './Tour.context';

export type TourTooltipStylesNames = 'tooltip';

export interface TourTooltipProps
  extends BoxProps, CompoundStylesApiProps<TourTooltipFactory>, ElementProps<'div'> {
  /** Target element to position against */
  targetElement?: HTMLElement | null;

  /** Tooltip position @default 'bottom' */
  position?: FloatingPosition;

  /** Whether the tooltip is visible */
  mounted?: boolean;

  /** Transition props for the tooltip */
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
    ref: _ref,
    ...others
  } = props;

  const ctx = useTourContext();

  const { refs, floatingStyles } = useFloating({
    elements: { reference: targetElement },
    placement: position,
    middleware: [offset(12), flip(), shift({ padding: 8 })],
  });

  return (
    <Transition
      mounted={!!mounted}
      duration={transitionProps?.duration ?? 200}
      transition={transitionProps?.transition ?? 'fade'}
      timingFunction={transitionProps?.timingFunction}
    >
      {(transitionStyles) => (
        <Box
          ref={refs.setFloating}
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

TourTooltip.displayName = '@mantine/core/TourTooltip';

export namespace TourTooltip {
  export type Props = TourTooltipProps;
}
