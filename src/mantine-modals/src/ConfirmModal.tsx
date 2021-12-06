import React, { useContext } from 'react';
import { Button, Group, Box, ButtonProps, GroupProps } from '@mantine/core';
import { modalsContext, ConfirmLabels } from './context';

export interface ConfirmModalProps {
  id?: string;
  children?: React.ReactNode;
  onCancel?(): void;
  onConfirm?(): void;
  closeOnConfirm?: boolean;
  closeOnCancel?: boolean;
  cancelProps?: ButtonProps<'button'>;
  confirmProps?: ButtonProps<'button'>;
  groupProps?: GroupProps;
  labels?: ConfirmLabels;
}

export function ConfirmModal({
  id,
  cancelProps,
  confirmProps,
  labels,
  closeOnConfirm = true,
  closeOnCancel = true,
  groupProps,
  onCancel,
  onConfirm,
  children,
}: ConfirmModalProps) {
  const ctx = useContext(modalsContext);

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

      <Group position="right" {...groupProps}>
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
