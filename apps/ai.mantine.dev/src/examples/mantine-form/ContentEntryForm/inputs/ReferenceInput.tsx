import { useState } from 'react';
import { Combobox, InputBase, Pill, PillsInput, useModal } from '@mantine/core';
import { useFormField } from '@mantine/hooks';
import type { ReferenceModel } from '../types';
import { ReferencePicker } from './ReferencePicker';

interface ReferenceInputProps {
  label: string;
  description?: string;
  withAsterisk?: boolean;
  targetModel: ReferenceModel | null;
  multiple: boolean;
  value?: string[];
  onChange?: (value: string[]) => void;
  error?: React.ReactNode;
  'data-path'?: string;
}

const OPEN_KEYS = ['Enter', ' ', 'ArrowDown'];

export function ReferenceInput({
  label,
  description,
  withAsterisk,
  targetModel,
  multiple,
  value,
  onChange,
  error,
  'data-path': dataPath,
}: ReferenceInputProps) {
  const field = useFormField<string[]>(onChange);
  const selected = (field.subscribed ? field.value : value) ?? [];
  // Remounts the picker on every open so its draft starts from the current value
  const [session, setSession] = useState(0);
  const placeholder = multiple ? 'Select entries' : 'Select entry';

  const modal = useModal({
    title: `${placeholder}: ${label}`,
    children: (
      <ReferencePicker
        key={session}
        initialValue={selected}
        targetModel={targetModel}
        multiple={multiple}
        onApply={(keys) => {
          onChange?.(keys);
          modal.close();
        }}
        onCancel={() => modal.close()}
      />
    ),
  });

  const openPicker = () => {
    setSession((current) => current + 1);
    modal.open();
  };

  const removeKey = (key: string) => onChange?.(selected.filter((item) => item !== key));

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && selected.length > 0) {
      event.preventDefault();
      removeKey(selected[selected.length - 1]);
    }
    if (OPEN_KEYS.includes(event.key)) {
      event.preventDefault();
      openPicker();
    }
  };

  const wrapperProps = { label, description, withAsterisk, error };
  const fieldProps = {
    readOnly: true,
    pointer: true,
    'aria-haspopup': 'dialog' as const,
    'data-path': dataPath,
    onKeyDown: handleKeyDown,
  };
  const chevron = <Combobox.Chevron error={error} />;

  if (!multiple) {
    return (
      <InputBase
        {...wrapperProps}
        {...fieldProps}
        value={selected[0] ?? ''}
        placeholder={placeholder}
        onClick={openPicker}
        rightSection={chevron}
        rightSectionPointerEvents="none"
      />
    );
  }

  return (
    <PillsInput
      {...wrapperProps}
      pointer
      onClick={openPicker}
      rightSection={chevron}
      rightSectionPointerEvents="none"
    >
      <Pill.Group>
        {selected.map((key) => (
          <Pill
            key={key}
            withRemoveButton
            removeButtonProps={{ 'aria-label': `Remove ${key}` }}
            onRemove={() => removeKey(key)}
          >
            {key}
          </Pill>
        ))}
        <PillsInput.Field
          {...fieldProps}
          placeholder={selected.length === 0 ? placeholder : undefined}
        />
      </Pill.Group>
    </PillsInput>
  );
}
