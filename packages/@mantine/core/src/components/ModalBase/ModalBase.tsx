import { RemoveScroll } from 'react-remove-scroll';
import {
  Box,
  BoxProps,
  ElementProps,
  getDefaultZIndex,
  getShadow,
  getSpacing,
  MantineShadow,
  MantineSize,
  MantineSpacing,
} from '../../core';
import { BasePortalProps, OptionalPortal } from '../Portal';
import { TransitionOverride } from '../Transition';
import { ModalBaseProvider } from './ModalBase.context';
import { useModal } from './use-modal';

type RemoveScrollProps = Omit<React.ComponentProps<typeof RemoveScroll>, 'children'>;

export interface ModalBaseProps extends BoxProps, ElementProps<'div', 'title'> {
  unstyled?: boolean | undefined;
  __handledEscapeEvents?: WeakSet<KeyboardEvent> | undefined;

  /** If set modal/drawer is not unmounted from the DOM when hidden. `display: none` styles are applied instead. @default false */
  keepMounted?: boolean | undefined;

  /** Controls how the modal/drawer is hidden when `keepMounted` is set:
   * `'activity'` - hidden with React 19 `Activity` component,
   * `'display-none'` - hidden with `display: none` styles
   * @default 'activity'
   */
  keepMountedMode?: 'activity' | 'display-none' | undefined;

  /** Controls opened state */
  opened: boolean;

  /** Called when modal/drawer is closed */
  onClose: () => void;

  /** Id used to connect modal/drawer with body and title */
  id?: string | undefined;

  /** If set, scroll is locked when `opened={true}` @default true */
  lockScroll?: boolean | undefined;

  /** If set, focus is trapped within the modal/drawer @default true */
  trapFocus?: boolean | undefined;

  /** If set, the component is rendered inside `Portal` @default true */
  withinPortal?: boolean | undefined;

  /** Props passed down to the Portal component when `withinPortal` is set */
  portalProps?: BasePortalProps | undefined;

  /** Modal/drawer content */
  children?: React.ReactNode;

  /** If set, the modal/drawer is closed when user clicks on the overlay @default true */
  closeOnClickOutside?: boolean | undefined;

  /** Props added to the `Transition` component that used to animate overlay and body, use to configure duration and animation type, `{ duration: 200, transition: 'fade-down' }` by default */
  transitionProps?: TransitionOverride | undefined;

  /** Called when exit transition ends */
  onExitTransitionEnd?: (() => void) | undefined;

  /** Called when enter transition ends */
  onEnterTransitionEnd?: (() => void) | undefined;

  /** If set, `onClose` is called when user presses the escape key @default true */
  closeOnEscape?: boolean | undefined;

  /** If set, focus is returned to the last active element when `onClose` is called @default true */
  returnFocus?: boolean | undefined;

  /** `z-index` CSS property of the root element @default 200 */
  zIndex?: string | number | undefined;

  /** Key of `theme.shadows` or any valid CSS box-shadow value @default 'xl' */
  shadow?: MantineShadow | undefined;

  /** Key of `theme.spacing` or any valid CSS value to set content, header and footer padding @default 'md' */
  padding?: MantineSpacing | undefined;

  /** Controls width of the content area @default 'md' */
  size?: MantineSize | (string & {}) | number | undefined;

  /** Props passed down to react-remove-scroll, can be used to customize scroll lock behavior */
  removeScrollProps?: RemoveScrollProps | undefined;
}

export function ModalBase({
  keepMounted,
  keepMountedMode = 'activity',
  opened,
  onClose,
  id,
  transitionProps,
  onExitTransitionEnd,
  onEnterTransitionEnd,
  trapFocus,
  closeOnEscape,
  returnFocus,
  closeOnClickOutside,
  withinPortal,
  portalProps,
  lockScroll,
  children,
  zIndex,
  shadow,
  padding,
  __vars,
  unstyled,
  removeScrollProps,
  __handledEscapeEvents,
  ...others
}: ModalBaseProps) {
  const { _id, titleMounted, bodyMounted, shouldLockScroll, setTitleMounted, setBodyMounted } =
    useModal({
      id,
      transitionProps,
      opened,
      trapFocus,
      closeOnEscape,
      onClose,
      returnFocus,
      handledEscapeEvents: __handledEscapeEvents,
    });

  const { key: removeScrollKey, ...otherRemoveScrollProps } = removeScrollProps || {};

  return (
    <OptionalPortal {...portalProps} withinPortal={withinPortal}>
      <ModalBaseProvider
        value={{
          opened,
          onClose,
          closeOnClickOutside,
          onExitTransitionEnd,
          onEnterTransitionEnd,
          transitionProps: { ...transitionProps, keepMounted, keepMountedMode },
          getTitleId: () => `${_id}-title`,
          getBodyId: () => `${_id}-body`,
          titleMounted,
          bodyMounted,
          setTitleMounted,
          setBodyMounted,
          trapFocus,
          closeOnEscape,
          zIndex,
          unstyled,
        }}
      >
        <RemoveScroll
          enabled={shouldLockScroll && lockScroll}
          key={removeScrollKey}
          {...otherRemoveScrollProps}
        >
          <Box
            {...others}
            id={_id}
            __vars={{
              ...__vars,
              '--mb-z-index': (zIndex || getDefaultZIndex('modal')).toString(),
              '--mb-shadow': getShadow(shadow),
              '--mb-padding': getSpacing(padding),
            }}
          >
            {children}
          </Box>
        </RemoveScroll>
      </ModalBaseProvider>
    </OptionalPortal>
  );
}

ModalBase.displayName = '@mantine/core/ModalBase';
