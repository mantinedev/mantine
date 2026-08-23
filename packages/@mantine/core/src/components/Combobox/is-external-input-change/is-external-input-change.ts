import { getRootElement } from '../../../core';

/**
 * Determines whether an input change was produced by something other than the user typing into the
 * input – browser autofill, password managers and browser extensions all write to inputs without
 * focusing them first. Combobox components reconcile the search value with the selected value on
 * blur, which never happens for such writes.
 */
export function isExternalInputChange(event: React.ChangeEvent<HTMLInputElement>) {
  const target = event.currentTarget;
  return getRootElement(target).activeElement !== target;
}
