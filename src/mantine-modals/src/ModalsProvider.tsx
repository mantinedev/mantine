import React, { useState } from 'react';
import { Modal } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { ModalsContext, ModalSettings, ConfirmLabels } from './context';

export interface ModalsProviderProps {
  children: React.ReactNode;
  modals?: Record<string, React.ReactNode>;
  modalProps?: ModalSettings;
  labels?: ConfirmLabels;
}

interface ModalState {
  modal: string;
  props: ModalSettings;
}

export function ModalsProvider({ children, modals, modalProps, labels }: ModalsProviderProps) {
  const [opened, handlers] = useListState<ModalState>([]);
  const [currentModal, setCurrentModal] = useState<ModalState>({ modal: null, props: null });
  const closeAll = () => handlers.setState([]);

  const handleClose = (id: string) => {
    if (opened.length <= 1) {
      closeAll();
    } else {
      const index = opened.findIndex((item) => item.modal === id);
      index !== -1 && handlers.remove(index);
      setCurrentModal(opened[opened.length - 2]);
    }
  };

  const handleOpen = (modal: string, props: ModalSettings) => {
    handlers.append({ modal, props });
    setCurrentModal({ modal, props });
  };

  const content = modals[currentModal?.modal] || null;

  return (
    <ModalsContext.Provider
      value={{
        labels,
        opened: currentModal?.modal || null,
        open: handleOpen,
        close: handleClose,
        closeAll,
        modals: Object.keys(modals),
      }}
    >
      <Modal
        opened={opened.length > 0}
        onClose={() => handleClose(currentModal?.modal)}
        {...modalProps}
        {...currentModal?.props}
      >
        {content || currentModal?.props?.children}
      </Modal>

      {children}
    </ModalsContext.Provider>
  );
}
