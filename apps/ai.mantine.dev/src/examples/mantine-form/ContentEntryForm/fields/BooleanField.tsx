import { Checkbox } from '@mantine/core';
import type { BooleanModelField, FieldInputProps } from '../types';
import classes from './BooleanField.module.css';

export function BooleanField({ form, field }: FieldInputProps<BooleanModelField>) {
  return (
    <Checkbox
      label={
        <>
          {field.label}
          {field.required && (
            <span className={classes.required} aria-hidden>
              *
            </span>
          )}
        </>
      }
      description={field.description || undefined}
      {...form.getInputProps(`fields.${field.key}`, { type: 'checkbox' })}
    />
  );
}
