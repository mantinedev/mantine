import React from 'react';
import { Button, Group, Box, ButtonProps, GroupProps } from '@mantine/core';
import { ConfirmLabels } from './context';
import { useModals } from './use-modals/use-modals';

export interface ConfirmModalProps {
  id?: string;
  children?: React.ReactNode;
  onCancel?(): void;
  onConfirm?(): void;
  onConfirmPending?(): Promise<void>;
  closeOnConfirm?: boolean;
  closeOnCancel?: boolean;
  cancelProps?: ButtonProps & React.ComponentPropsWithoutRef<'button'>;
  confirmProps?: ButtonProps & React.ComponentPropsWithoutRef<'button'>;
  groupProps?: GroupProps;
  labels?: ConfirmLabels;
}

export function ConfirmModal({
  id,
  cancelProps,
  confirmProps,
  labels = { cancel: '', confirm: '' },
  closeOnConfirm = true,
  closeOnCancel = true,
  groupProps,
  onCancel,
  onConfirm,
  onConfirmPending,
  children,
}: ConfirmModalProps) {
  const { cancel: cancelLabel, confirm: confirmLabel } = labels;
  const ctx = useModals();
  const [loading, setLoading] = React.useState(false);
  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof cancelProps?.onClick === 'function' && cancelProps?.onClick(event);
    typeof onCancel === 'function' && onCancel();
    closeOnCancel && ctx.closeModal(id);
  };

  const handleConfirm = async (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof confirmProps?.onClick === 'function' && confirmProps?.onClick(event);
    if (typeof onConfirmPending === 'function') {
      setLoading(true);
      await onConfirmPending();
      setLoading(false);
    }
    typeof onConfirm === 'function' && onConfirm();
    closeOnConfirm && ctx.closeModal(id);
  };

  return (
    <>
      {children && <Box mb="md">{children}</Box>}

      <Group position="right" {...groupProps}>
        <Button variant="default" {...cancelProps} onClick={handleCancel}>
          {cancelProps?.children || cancelLabel}
        </Button>

        <Button {...confirmProps} onClick={handleConfirm} loading={loading}>
          {confirmProps?.children || confirmLabel}
        </Button>
      </Group>
    </>
  );
}
