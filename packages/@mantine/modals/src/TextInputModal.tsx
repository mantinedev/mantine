import React, { useState } from 'react';
import { TextInput, TextInputProps } from '@mantine/core';
import { ConfirmModal, ConfirmModalProps } from './ConfirmModal';

export interface TextInputModalProps extends ConfirmModalProps {
  inputProps?: TextInputProps & React.ComponentPropsWithoutRef<'input'>;
  onInputChange?: (value: string) => void;
  initialValue?: string;
}

export function TextInputModal({
  inputProps,
  onInputChange,
  initialValue = '',
  ...confirmModalProps
}: TextInputModalProps) {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    typeof onInputChange === 'function' && onInputChange(value);
  };

  return (
    <ConfirmModal
      {...confirmModalProps}
      onConfirm={() => {
        confirmModalProps.onConfirm?.();
      }}
    >
      <>
        <TextInput value={value} onChange={handleInputChange} {...inputProps} />
        {confirmModalProps.children}
      </>
    </ConfirmModal>
  );
}
