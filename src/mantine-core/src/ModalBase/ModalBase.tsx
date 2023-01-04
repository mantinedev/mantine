/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { useComponentDefaultProps } from '@mantine/styles';
import { OptionalPortal } from '../Portal';
import { TransitionProps } from '../Transition';
import { ModalBaseProvider } from './ModalBase.context';
import { ModalBaseCloseButton } from './ModalBaseCloseButton/ModalBaseCloseButton';
import { ModalBaseOverlay } from './ModalBaseOverlay/ModalBaseOverlay';

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

  /** Props added to Transition component that used to animate overlay and body, use to configure duration and animation type, { duration: 300, transition: 'pop' } by default */
  transitionProps?: Partial<Omit<TransitionProps, 'mounted'>>;

  /** Determines whether component should be rendered inside Portal, true by default */
  withinPortal?: boolean;

  /** Target element or selector where Portal should be rendered, by default new element is created and appended to the document.body */
  target?: HTMLElement | string;

  /** Determines whether scroll should be locked when opened={true}, defaults to true */
  lockScroll?: boolean;
}

interface ModalBaseProps extends ModalBaseSettings {
  /** Base component name for styles and components default props */
  __staticSelector: string;
}

const defaultProps: Partial<ModalBaseProps> = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  transitionProps: { duration: 300, transition: 'pop' },
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
    lockScroll,
  } = useComponentDefaultProps(props.__staticSelector, defaultProps, props);

  return (
    <RemoveScroll enabled={opened && lockScroll}>
      <OptionalPortal withinPortal={withinPortal} target={target}>
        <ModalBaseProvider
          value={{ __staticSelector, opened, onClose, closeOnClickOutside, transitionProps }}
        >
          {children}
        </ModalBaseProvider>
      </OptionalPortal>
    </RemoveScroll>
  );
}

ModalBase.CloseButton = ModalBaseCloseButton;
ModalBase.Overlay = ModalBaseOverlay;
