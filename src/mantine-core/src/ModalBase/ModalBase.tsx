/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useComponentDefaultProps } from '@mantine/styles';
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
}

interface ModalBaseProps extends ModalBaseSettings {
  /** Base component name for styles and components default props */
  __staticSelector: string;
}

const defaultProps: Partial<ModalBaseProps> = {
  closeOnClickOutside: true,
  transitionProps: { duration: 300, transition: 'pop' },
};

export function ModalBase(props: ModalBaseProps) {
  const { opened, onClose, children, closeOnClickOutside, __staticSelector, transitionProps } =
    useComponentDefaultProps(props.__staticSelector, defaultProps, props);

  return (
    <ModalBaseProvider
      value={{ __staticSelector, opened, onClose, closeOnClickOutside, transitionProps }}
    >
      {children}
    </ModalBaseProvider>
  );
}

ModalBase.CloseButton = ModalBaseCloseButton;
ModalBase.Overlay = ModalBaseOverlay;
