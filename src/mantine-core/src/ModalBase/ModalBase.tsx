import React from 'react';
import { ModalBaseProvider } from './ModalBase.context';

interface ModalBaseProps {
  /** Determines whether modal is opened */
  opened: boolean;

  /** Called when modal is closed */
  onClose(): void;

  /** Child component */
  children?: React.ReactNode;
}

export function ModalBase({ opened, onClose, children }: ModalBaseProps) {
  return <ModalBaseProvider value={{ opened, onClose }}>{children}</ModalBaseProvider>;
}
