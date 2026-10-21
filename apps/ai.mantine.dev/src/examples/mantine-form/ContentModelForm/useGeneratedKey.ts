import { useRef, type ChangeEvent } from 'react';
import type { UseFormReturnType } from '@mantine/form';
import { slugify } from './utils';

// Fills keyPath with the slug of sourcePath until the user types a key by hand;
// clearing the key resumes the auto-fill
export function useGeneratedKey(
  form: UseFormReturnType<any>,
  sourcePath: string,
  keyPath: string,
  editedByDefault = false
) {
  const edited = useRef(editedByDefault);

  form.watch(sourcePath, ({ value }) => {
    if (!edited.current) {
      form.setFieldValue(keyPath, slugify(value), { forceUpdate: false });
    }
  });

  const keyProps = form.getInputProps(keyPath);

  return {
    ...keyProps,
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      edited.current = event.currentTarget.value !== '';
      keyProps.onChange(event);
    },
  };
}
