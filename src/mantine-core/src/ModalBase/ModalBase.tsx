/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useComponentDefaultProps } from '@mantine/styles';
import { ModalBaseProvider } from './ModalBase.context';
import { ModalBaseCloseButton } from './ModalBaseCloseButton/ModalBaseCloseButton';
import { ModalBaseOverlay } from './ModalBaseOverlay/ModalBaseOverlay';

interface ModalBaseProps {
  /** Base component name for styles and components default props */
  __staticSelector: string;

  /** Determines whether modal is opened */
  opened: boolean;

  /** Called when modal is closed */
  onClose(): void;

  /** Child component */
  children?: React.ReactNode;

  /** Determines whether the modal should be closed when user clicks on the overlay, true by default */
  closeOnClickOutside?: boolean;
}

const defaultProps: Partial<ModalBaseProps> = {
  closeOnClickOutside: true,
};

export function ModalBase(props: ModalBaseProps) {
  const { opened, onClose, children, closeOnClickOutside, __staticSelector } =
    useComponentDefaultProps(props.__staticSelector, defaultProps, props);

  return (
    <ModalBaseProvider value={{ __staticSelector, opened, onClose, closeOnClickOutside }}>
      {children}
    </ModalBaseProvider>
  );
}

ModalBase.CloseButton = ModalBaseCloseButton;
ModalBase.Overlay = ModalBaseOverlay;
