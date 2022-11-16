/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { Box, Button, ButtonProps, Group, GroupProps } from '@mantine/core';

import { useDrawers } from './use-drawers/use-drawers';
import { ConfirmLabels } from './context';

export interface ConfirmDrawerProps {
  id?: string;
  children?: React.ReactNode;
  onCancel?(): void;
  onConfirm?(): void;
  closeOnConfirm?: boolean;
  closeOnCancel?: boolean;
  cancelProps?: ButtonProps & React.ComponentPropsWithoutRef<'button'>;
  confirmProps?: ButtonProps & React.ComponentPropsWithoutRef<'button'>;
  groupProps?: GroupProps;
  labels?: ConfirmLabels;
}

export function ConfirmDrawer({
  id,
  cancelProps,
  confirmProps,
  labels = { cancel: '', confirm: '' },
  closeOnConfirm = true,
  closeOnCancel = true,
  groupProps,
  onCancel,
  onConfirm,
  children,
}: ConfirmDrawerProps) {
  const { cancel: cancelLabel, confirm: confirmLabel } = labels;
  const ctx = useDrawers();

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof cancelProps?.onClick === 'function' && cancelProps?.onClick(event);
    typeof onCancel === 'function' && onCancel();
    closeOnCancel && ctx.closeDrawer(id);
  };

  const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof confirmProps?.onClick === 'function' && confirmProps?.onClick(event);
    typeof onConfirm === 'function' && onConfirm();
    closeOnConfirm && ctx.closeDrawer(id);
  };

  return (
    <>
      {children && <Box mb="md">{children}</Box>}

      <Group position="right" {...groupProps}>
        <Button variant="default" {...cancelProps} onClick={handleCancel}>
          {cancelProps?.children || cancelLabel}
        </Button>

        <Button {...confirmProps} onClick={handleConfirm}>
          {confirmProps?.children || confirmLabel}
        </Button>
      </Group>
    </>
  );
}
