import React, { useContext } from 'react';
import { useId } from '@mantine/hooks';
import { ModalsContext, ModalSettings } from './context';
import { ConfirmModal, ConfirmModalProps } from './ConfirmModal';

function useModalsContext(hook: string) {
  const ctx = useContext(ModalsContext);

  if (!ctx) {
    throw new Error(
      `[@mantine/modals] ${hook} hook was called outside of context, wrap your app with ModalsProvider component`
    );
  }

  return ctx;
}

export function useModal(modal: string, props?: ModalSettings) {
  const ctx = useModalsContext('useModal');

  if (!ctx.modals.includes(modal)) {
    throw new Error(
      '[@mantine/modals] useModal hook was called with modal name that was not defined on ModalsProvider'
    );
  }

  return {
    opened: ctx.opened === modal,
    open: () => ctx.open(modal, props || {}),
    close: ctx.close,
  };
}

export function useContentModal(children: React.ReactNode, props?: ModalSettings) {
  const ctx = useModalsContext('useContentModal');
  const id = useId(props?.id);

  return {
    id,
    opened: ctx.opened === id,
    open: () => ctx.open(id, { ...props, children }),
    close: ctx.close,
  };
}

export function useConfirmModal(modalProps: ConfirmModalProps, props?: ModalSettings) {
  const ctx = useModalsContext('useContentModal');
  const id = useId(props?.id);

  return {
    id,
    opened: ctx.opened === id,
    open: () => ctx.open(id, { ...props, children: <ConfirmModal {...modalProps} /> }),
    close: ctx.close,
  };
}
