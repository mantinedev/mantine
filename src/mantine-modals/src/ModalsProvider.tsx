import React, { useState } from 'react';
import { Modal } from '@mantine/core';
import { ModalsContext, ModalSettings, ConfirmLabels } from './context';

export interface ModalsProviderProps {
  children: React.ReactNode;
  modals?: Record<string, React.ReactNode>;
  modalProps?: ModalSettings;
  labels?: ConfirmLabels;
}

interface CurrentModal {
  modal: string;
  props: ModalSettings;
}

export function ModalsProvider({ children, modals, modalProps, labels }: ModalsProviderProps) {
  const [opened, setOpened] = useState(false);
  const [currentModal, setCurrentModal] = useState<CurrentModal>({ modal: null, props: {} });
  const handleClose = () => setOpened(false);
  const handleOpen = (modal: string, props: ModalSettings) => {
    setOpened(true);
    setCurrentModal({ modal, props });
  };

  const content = modals[currentModal.modal] || null;

  return (
    <ModalsContext.Provider
      value={{
        labels,
        opened: currentModal.modal,
        open: handleOpen,
        close: handleClose,
        modals: Object.keys(modals),
      }}
    >
      <Modal opened={opened} onClose={handleClose} {...modalProps} {...currentModal.props}>
        {content || currentModal.props?.children}
      </Modal>

      {children}
    </ModalsContext.Provider>
  );
}
