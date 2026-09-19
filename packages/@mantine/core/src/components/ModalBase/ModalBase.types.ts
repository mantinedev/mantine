import { RemoveScroll } from 'react-remove-scroll';
import {
  BoxProps,
  ElementProps,
  MantineRadius,
  MantineShadow,
  MantineSize,
  MantineSpacing,
} from '../../core';
import { OverlayProps } from '../Overlay';
import { BasePortalProps } from '../Portal';
import { TransitionOverride } from '../Transition';

export type RemoveScrollProps = Omit<React.ComponentProps<typeof RemoveScroll>, 'children'>;

export interface ModalBaseContentProps extends BoxProps, ElementProps<'div'> {
  /** Props passed down to the `Transition` component */
  transitionProps?: TransitionOverride;

  /** Key of `theme.shadows` or any valid CSS value to set `box-shadow` */
  shadow?: MantineShadow;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem @default theme.defaultRadius */
  radius?: MantineRadius;
}

export interface ModalBaseOverlayProps
  extends
    Omit<OverlayProps, 'styles' | 'classNames' | 'variant' | 'vars'>,
    ElementProps<'div', 'color'> {
  /** Props passed down to the `Transition` component */
  transitionProps?: TransitionOverride;

  /** Determines whether the overlay should be visible. By default, has the same value as `opened` state. */
  visible?: boolean;
}

export interface ModalBaseProps extends BoxProps, ElementProps<'div', 'title'> {
  unstyled?: boolean;
  __handledEscapeEvents?: WeakSet<KeyboardEvent>;

  /** If set modal/drawer is not unmounted from the DOM when hidden. `display: none` styles are applied instead. @default false */
  keepMounted?: boolean;

  /** Controls how the modal/drawer is hidden when `keepMounted` is set:
   * `'activity'` - hidden with React 19 `Activity` component,
   * `'display-none'` - hidden with `display: none` styles
   * @default 'activity'
   */
  keepMountedMode?: 'activity' | 'display-none';

  /** Controls opened state @category state */
  opened: boolean;

  /** Called when modal/drawer is closed @category state */
  onClose: () => void;

  /** Id used to connect modal/drawer with body and title */
  id?: string;

  /** If set, scroll is locked when `opened={true}` @default true @category behavior */
  lockScroll?: boolean;

  /** If set, focus is trapped within the modal/drawer @default true @category behavior */
  trapFocus?: boolean;

  /** If set, the component is rendered inside `Portal` @default true */
  withinPortal?: boolean;

  /** Props passed down to the Portal component when `withinPortal` is set */
  portalProps?: BasePortalProps;

  /** Modal/drawer content @category appearance */
  children?: React.ReactNode;

  /** If set, the modal/drawer is closed when user clicks on the overlay @default true @category behavior */
  closeOnClickOutside?: boolean;

  /** Props added to the `Transition` component that used to animate overlay and body, use to configure duration and animation type, `{ duration: 200, transition: 'fade-down' }` by default @category appearance */
  transitionProps?: TransitionOverride;

  /** Called when exit transition ends @category behavior */
  onExitTransitionEnd?: () => void;

  /** Called when enter transition ends @category behavior */
  onEnterTransitionEnd?: () => void;

  /** If set, `onClose` is called when user presses the escape key @default true @category behavior */
  closeOnEscape?: boolean;

  /** If set, focus is returned to the last active element when `onClose` is called @default true @category behavior */
  returnFocus?: boolean;

  /** `z-index` CSS property of the root element @default 200 */
  zIndex?: string | number;

  /** Key of `theme.shadows` or any valid CSS box-shadow value @default 'xl' @category appearance */
  shadow?: MantineShadow;

  /** Key of `theme.spacing` or any valid CSS value to set content, header and footer padding @default 'md' @category appearance */
  padding?: MantineSpacing;

  /** Controls width of the content area @default 'md' @category appearance */
  size?: MantineSize | (string & {}) | number;

  /** Props passed down to react-remove-scroll, can be used to customize scroll lock behavior */
  removeScrollProps?: RemoveScrollProps;
}
