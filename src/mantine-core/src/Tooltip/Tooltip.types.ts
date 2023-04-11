import { DefaultProps, Selectors, MantineNumberSize, MantineColor } from '@mantine/styles';
import { FloatingPosition } from '../Floating';
import { PortalProps } from '../Portal';
import useStyles, { TooltipStylesParams } from './Tooltip.styles';

export type TooltipStylesNames = Selectors<typeof useStyles>;

export interface TooltipBaseProps
  extends DefaultProps<TooltipStylesNames, TooltipStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Target element */
  children: React.ReactNode;

  /** Tooltip position relative to target element (default) or mouse (floating) */
  position?: FloatingPosition;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;

  /** Tooltip label */
  label: React.ReactNode;

  /** Determines whether tooltip should be rendered within Portal */
  withinPortal?: boolean;

  /** Props to pass down to the portal when withinPortal is true */
  portalProps?: Omit<PortalProps, 'children' | 'withinPortal'>;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: MantineNumberSize;

  /** Key of theme.colors */
  color?: MantineColor;

  /** Defines whether content should be wrapped on to the next line */
  multiline?: boolean;

  /** Tooltip width */
  width?: number | 'auto';

  /** Tooltip z-index */
  zIndex?: React.CSSProperties['zIndex'];

  /** Disables tooltip */
  disabled?: boolean;
}
