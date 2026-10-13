import { ArrowCounterClockwiseIcon } from '@phosphor-icons/react';
import { ActionIcon, TextInput, TextInputProps } from '@mantine/core';
import { ProfileForm, ProfileValues } from './types';
import classes from './DirtyField.module.css';

interface DirtyFieldProps extends Omit<TextInputProps, 'label' | 'form'> {
  form: ProfileForm;
  field: keyof ProfileValues;
  label: string;
}

export function DirtyField({ form, field, label, ...others }: DirtyFieldProps) {
  const dirty = form.useDirty(field);

  return (
    <TextInput
      size="md"
      label={label}
      classNames={classes}
      mod={{ dirty }}
      rightSectionPointerEvents="all"
      rightSection={
        dirty && (
          <ActionIcon
            variant="subtle"
            color="gray"
            aria-label={`Reset ${label.toLowerCase()}`}
            onClick={() => form.resetField(field)}
          >
            <ArrowCounterClockwiseIcon size={16} />
          </ActionIcon>
        )
      }
      {...others}
      {...form.getInputProps(field)}
    />
  );
}
