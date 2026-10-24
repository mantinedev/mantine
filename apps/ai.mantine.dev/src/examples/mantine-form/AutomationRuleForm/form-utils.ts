import type { FormErrors } from '@mantine/form';
import { FORM_NAME } from './constants';

// Matches the data-path that getInputProps puts on inputs, so getInputNode finds list buttons too
export const getDataPath = (path: string) => `${FORM_NAME}-${path}`;

export function focusFirstError(errors: FormErrors) {
  const path = Object.keys(errors)[0];
  if (!path) {
    return;
  }
  const node = document.querySelector<HTMLElement>(`[data-path="${getDataPath(path)}"]`);
  const target = node?.matches('input, textarea, button')
    ? node
    : node?.querySelector<HTMLElement>('input, textarea, button');
  target?.focus();
}
