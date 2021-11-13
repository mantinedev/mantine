import React, { useContext } from 'react';
import { Button, Group, Box, ButtonProps } from '@mantine/core';
import { ModalsContext, ConfirmLabels } from './context';

export interface ConfirmModalProps {
  id?: string;
  children?: React.ReactNode;
  onCancel?(): void;
  onConfirm?(): void;
  closeOnConfirm?: boolean;
  closeOnCancel?: boolean;
  description?: React.ReactNode;
  cancelProps?: ButtonProps<'button'>;
  confirmProps?: ButtonProps<'button'>;
  labels?: ConfirmLabels;
}

export function ConfirmModal({
  id,
  cancelProps,
  confirmProps,
  labels,
  closeOnConfirm = true,
  closeOnCancel = true,
  onCancel,
  onConfirm,
  children,
}: ConfirmModalProps) {
  const ctx = useContext(ModalsContext);

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof cancelProps?.onClick === 'function' && cancelProps?.onClick(event);
    typeof onCancel === 'function' && onCancel();
    closeOnCancel && ctx?.closeModal(id);
  };

  const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof confirmProps?.onClick === 'function' && confirmProps?.onClick(event);
    typeof onConfirm === 'function' && onConfirm();
    closeOnConfirm && ctx?.closeModal(id);
  };

  return (
    <>
      {children && <Box mb="md">{children}</Box>}

      <Group position="right">
        <Button variant="default" {...cancelProps} onClick={handleCancel}>
          {cancelProps?.children || labels.cancel}
        </Button>
        <Button {...confirmProps} onClick={handleConfirm}>
          {confirmProps?.children || labels.confirm}
        </Button>
      </Group>
    </>
  );
}
