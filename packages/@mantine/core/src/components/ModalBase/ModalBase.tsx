import { forwardRef } from 'react';
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
import { OptionalPortal, PortalProps } from '../Portal';
import { TransitionOverride } from '../Transition';
import { ModalBaseProvider } from './ModalBase.context';
import { useModal } from './use-modal';

type RemoveScrollProps = Omit<React.ComponentProps<typeof RemoveScroll>, 'children'>;

export interface ModalBaseProps extends BoxProps, ElementProps<'div', 'title'> {
  unstyled?: boolean;

  /** If set modal/drawer will not be unmounted from the DOM when it is hidden, `display: none` styles will be added instead, `false` by default */
  keepMounted?: boolean;

  /** Determines whether modal/drawer is opened */
  opened: boolean;

  /** Called when modal/drawer is closed */
  onClose: () => void;

  /** Id used to connect modal/drawer with body and title */
  id?: string;

  /** Determines whether scroll should be locked when `opened={true}`, `true` by default */
  lockScroll?: boolean;

  /** Determines whether focus should be trapped, `true` by default */
  trapFocus?: boolean;

  /** Determines whether the component should be rendered inside `Portal`, `true` by default */
  withinPortal?: boolean;

  /** Props passed down to the Portal component when `withinPortal` is set */
  portalProps?: Omit<PortalProps, 'children'>;

  /** Modal/drawer content */
  children?: React.ReactNode;

  /** Determines whether the modal/drawer should be closed when user clicks on the overlay, `true` by default */
  closeOnClickOutside?: boolean;

  /** Props added to the `Transition` component that used to animate overlay and body, use to configure duration and animation type, `{ duration: 200, transition: 'fade-down' }` by default */
  transitionProps?: TransitionOverride;

  /** Called when exit transition ends */
  onExitTransitionEnd?: () => void;

  /** Called when enter transition ends */
  onEnterTransitionEnd?: () => void;

  /** Determines whether `onClose` should be called when user presses the escape key, `true` by default */
  closeOnEscape?: boolean;

  /** Determines whether focus should be returned to the last active element when `onClose` is called, `true` by default */
  returnFocus?: boolean;

  /** `z-index` CSS property of the root element, `200` by default */
  zIndex?: string | number;

  /** Key of `theme.shadows` or any valid CSS box-shadow value, 'xl' by default */
  shadow?: MantineShadow;

  /** Key of `theme.spacing` or any valid CSS value to set content, header and footer padding, `'md'` by default */
  padding?: MantineSpacing;

  /** Controls width of the content area, `'md'` by default */
  size?: MantineSize | (string & {}) | number;

  /** Props passed down to react-remove-scroll, can be used to customize scroll lock behavior */
  removeScrollProps?: RemoveScrollProps;
}

export const ModalBase = forwardRef<HTMLDivElement, ModalBaseProps>(
  (
    {
      keepMounted,
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
      ...others
    },
    ref
  ) => {
    const { _id, titleMounted, bodyMounted, shouldLockScroll, setTitleMounted, setBodyMounted } =
      useModal({ id, transitionProps, opened, trapFocus, closeOnEscape, onClose, returnFocus });

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
            transitionProps: { ...transitionProps, keepMounted },
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
              ref={ref}
              {...others}
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
);

ModalBase.displayName = '@mantine/core/ModalBase';
