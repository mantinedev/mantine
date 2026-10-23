import { useState } from 'react';
import { Combobox, Pill, PillsInput, useModal } from '@mantine/core';
import { fieldPath } from '../../entry';
import type { FieldInputProps } from '../../types';
import { customInputProps, labelProps } from '../field-props';
import { ReferencePicker } from './ReferencePicker';

const OPEN_KEYS = ['Enter', ' ', 'ArrowDown'];

export function ReferenceField({ form, field }: FieldInputProps<'reference'>) {
  const path = fieldPath(field);
  const selected = form.useWatchValue(path) as string[];
  const { onChange, onFocus, onBlur, error, 'data-path': dataPath } = customInputProps(form, field);

  // A new session remounts the picker so it starts from the current selection
  const [session, setSession] = useState(0);

  const modal = useModal({
    title: field.multiple ? 'Select entries' : 'Select entry',
    children: (
      <ReferencePicker
        key={session}
        field={field}
        initialSelection={selected}
        onConfirm={(keys) => {
          onChange(keys);
          modal.close();
        }}
        onCancel={() => modal.close()}
      />
    ),
  });

  const open = () => {
    setSession((current) => current + 1);
    modal.open();
  };

  const remove = (key: string) => onChange(selected.filter((item) => item !== key));

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (OPEN_KEYS.includes(event.key)) {
      event.preventDefault();
      open();
    } else if (event.key === 'Backspace' && selected.length > 0) {
      remove(selected[selected.length - 1]);
    }
  };

  return (
    <PillsInput
      {...labelProps(field)}
      error={error}
      pointer
      onClick={open}
      rightSection={<Combobox.Chevron error={error} />}
      rightSectionPointerEvents="none"
    >
      <Pill.Group>
        {selected.map((key) => (
          <Pill
            key={key}
            withRemoveButton
            removeButtonProps={{ 'aria-label': `Remove ${key}` }}
            onRemove={() => remove(key)}
          >
            {key}
          </Pill>
        ))}
        <PillsInput.Field
          readOnly
          pointer
          placeholder={
            selected.length === 0
              ? field.multiple
                ? 'Select entries'
                : 'Select an entry'
              : undefined
          }
          aria-haspopup="dialog"
          data-path={dataPath}
          onKeyDown={handleKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Pill.Group>
    </PillsInput>
  );
}
