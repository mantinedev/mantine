import React, { useContext } from 'react';
import { Button, Group, Box, ButtonProps } from '@mantine/core';
import { ModalsContext } from './context';

export interface ConfirmModalProps {
  onCancel?(): void;
  onConfirm?(): void;
  closeOnConfirm?: boolean;
  closeOnCancel?: boolean;
  description?: React.ReactNode;
  cancelProps?: ButtonProps<'button'>;
  confirmProps?: ButtonProps<'button'>;
}

export function ConfirmModal({
  cancelProps,
  confirmProps,
  description,
  closeOnConfirm = true,
  closeOnCancel = true,
  onCancel,
  onConfirm,
}: ConfirmModalProps) {
  const ctx = useContext(ModalsContext);
  const labels = ctx?.labels || { confirm: '', cancel: '' };

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof cancelProps?.onClick === 'function' && cancelProps?.onClick(event);
    typeof onCancel === 'function' && onCancel();
    closeOnCancel && ctx?.close();
  };

  const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof confirmProps?.onClick === 'function' && confirmProps?.onClick(event);
    typeof onConfirm === 'function' && onConfirm();
    closeOnConfirm && ctx?.close();
  };

  return (
    <>
      {description && <Box mb="md">{description}</Box>}

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
