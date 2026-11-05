import type { FlipOptions, InlineOptions, ShiftOptions, SizeOptions } from '@floating-ui/react';
import { BoxProps, ElementProps, MantineColor, MantineRadius, StylesApiProps } from '../../core';
import { FloatingPosition } from '../../utils/Floating';
import { BasePortalProps } from '../Portal';
import type { TooltipFactory } from './Tooltip';

export type TooltipStylesNames = 'tooltip' | 'arrow';
export type TooltipCssVariables = {
  tooltip: '--tooltip-radius' | '--tooltip-bg' | '--tooltip-color';
};

export interface TooltipMiddlewares {
  shift?: boolean | ShiftOptions | undefined;
  flip?: boolean | FlipOptions | undefined;
  inline?: boolean | InlineOptions | undefined;
  size?: boolean | SizeOptions | undefined;
}

export interface TooltipBaseProps
  extends BoxProps, StylesApiProps<TooltipFactory>, ElementProps<'div'> {
  /** Target element, must support `ref` prop and `...others` */
  children?: React.ReactNode;

  /** Tooltip position relative to target element (`Tooltip` component) or mouse (`Tooltip.Floating` component) */
  position?: FloatingPosition | undefined;

  /** Key of the prop that can be used to access element ref, `ref` by default */
  refProp?: string | undefined;

  /** Tooltip content */
  label: React.ReactNode;

  /** Determines whether tooltip should be rendered within `Portal`, `true` by default */
  withinPortal?: boolean | undefined;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem@default theme.defaultRadius */
  radius?: MantineRadius | undefined;

  /** Key of `theme.colors` or any valid CSS color, controls tooltip background, by default set based on current color scheme */
  color?: MantineColor | undefined;

  /** Determines whether content should be wrapped on to the next line, `false` by default */
  multiline?: boolean | undefined;

  /** Tooltip z-index, `300` by default */
  zIndex?: string | number | undefined;

  /** If set, tooltip element will not be rendered */
  disabled?: boolean | undefined;

  /** Props to pass down to the portal when withinPortal is true */
  portalProps?: Omit<BasePortalProps, 'withinPortal'> | undefined;

  /** Floating ui middlewares to configure position handling, `{ flip: true, shift: true, inline: false }` by default */
  middlewares?: TooltipMiddlewares | undefined;
}
