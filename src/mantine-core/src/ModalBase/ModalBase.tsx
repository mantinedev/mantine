/* eslint-disable react/no-unused-prop-types */
import React, { useRef, useState, useEffect } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { useReducedMotion } from '@mantine/hooks';
import { getDefaultZIndex, useComponentDefaultProps } from '@mantine/styles';
import { OptionalPortal } from '../Portal';
import { TransitionOverride } from '../Transition';
import { ModalBaseProvider } from './ModalBase.context';
import { ModalBaseCloseButton } from './ModalBaseCloseButton/ModalBaseCloseButton';
import { ModalBaseOverlay } from './ModalBaseOverlay/ModalBaseOverlay';
import { ModalBaseContent } from './ModalBaseContent/ModalBaseContent';

export interface ModalBaseSettings {
  /** Determines whether modal is opened */
  opened: boolean;

  /** Called when modal is closed */
  onClose(): void;

  /** Child component */
  children?: React.ReactNode;

  /** Determines whether the modal should be closed when user clicks on the overlay, true by default */
  closeOnClickOutside?: boolean;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Props added to Transition component that used to animate overlay and body, use to configure duration and animation type, { duration: 200, transition: 'pop' } by default */
  transitionProps?: TransitionOverride;

  /** Determines whether component should be rendered inside Portal, true by default */
  withinPortal?: boolean;

  /** Target element or selector where Portal should be rendered, by default new element is created and appended to the document.body */
  target?: HTMLElement | string;

  /** Determines whether scroll should be locked when opened={true}, defaults to true */
  lockScroll?: boolean;

  /** z-index CSS property of root element, 200 by default */
  zIndex?: number;
}

interface ModalBaseProps extends ModalBaseSettings {
  /** Base component name for styles and components default props */
  __staticSelector: string;
}

const defaultProps: Partial<ModalBaseProps> = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  transitionProps: { duration: 200, transition: 'fade' },
  zIndex: getDefaultZIndex('modal'),
};

export function ModalBase(props: ModalBaseProps) {
  const {
    opened,
    onClose,
    children,
    closeOnClickOutside,
    __staticSelector,
    transitionProps,
    withinPortal,
    target,
    zIndex,
    lockScroll,
  } = useComponentDefaultProps(props.__staticSelector, defaultProps, props);

  const [shouldLockScroll, setShouldLockScroll] = useState(opened);
  const timeout = useRef<number>();
  const reduceMotion = useReducedMotion();
  const transitionDuration = reduceMotion ? 0 : transitionProps.duration;

  useEffect(() => {
    if (opened) {
      setShouldLockScroll(true);
      window.clearTimeout(timeout.current);
    } else if (transitionDuration === 0) {
      setShouldLockScroll(false);
    } else {
      timeout.current = window.setTimeout(() => setShouldLockScroll(false), transitionDuration);
    }

    return () => window.clearTimeout(timeout.current);
  }, [opened, transitionDuration]);

  return (
    <OptionalPortal withinPortal={withinPortal} target={target}>
      <ModalBaseProvider
        value={{
          __staticSelector,
          opened,
          onClose,
          closeOnClickOutside,
          transitionProps,
          zIndex,
        }}
      >
        <RemoveScroll enabled={shouldLockScroll && lockScroll}>{children}</RemoveScroll>
      </ModalBaseProvider>
    </OptionalPortal>
  );
}

ModalBase.CloseButton = ModalBaseCloseButton;
ModalBase.Overlay = ModalBaseOverlay;
ModalBase.Content = ModalBaseContent;
