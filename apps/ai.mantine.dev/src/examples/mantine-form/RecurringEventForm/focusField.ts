import type { RecurringEventFormType } from './types';

// Groups (radios, chips, masked date fields) carry data-path on their wrapper
export function focusField(form: RecurringEventFormType, path: string) {
  const node = form.getInputNode(path);
  const target = node?.matches('input, textarea, button')
    ? node
    : node?.querySelector<HTMLElement>('input:not([type="hidden"]), button');
  (target ?? node)?.focus();
}
