import React, { useState } from 'react';
import { Box, TextInput, TextInputProps } from '@mantine/core';
import { ConfirmModal, ConfirmModalProps } from './ConfirmModal';

export interface TextInputModalProps extends Omit<ConfirmModalProps, 'onConfirm' | 'children'> {
  topSection?: React.ReactNode;
  bottomSection?: React.ReactNode;
  onConfirm?: (value: string) => void;
  inputProps?: TextInputProps & React.ComponentPropsWithoutRef<'input'>;
  onInputChange?: (value: string) => void;
  initialValue?: string;
  autofocus?: boolean;
}

export function TextInputModal({
  topSection,
  bottomSection,
  onConfirm,
  inputProps,
  onInputChange,
  initialValue = '',
  autofocus = true,
  ...confirmModalProps
}: TextInputModalProps) {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    typeof onInputChange === 'function' && onInputChange(value);
  };

  return (
    <ConfirmModal {...confirmModalProps} onConfirm={() => onConfirm?.(value)}>
      <>
        {topSection && <Box mb="md">{topSection}</Box>}
        <TextInput
          mb="sm"
          value={value}
          onChange={handleInputChange}
          {...(autofocus ? { 'data-autofocus': true } : {})}
          {...inputProps}
        />
        {bottomSection && <Box mb="md">{bottomSection}</Box>}
      </>
    </ConfirmModal>
  );
}
