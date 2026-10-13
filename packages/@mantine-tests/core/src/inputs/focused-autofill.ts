import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * Simulates picking a browser autofill suggestion in the focused input. Chrome and Safari dispatch
 * an `input` event without `inputType`, Firefox and datalist suggestions dispatch it with
 * `insertReplacementText`. Pass any other `inputType` to simulate regular editing.
 */
export async function focusedAutofill(input: HTMLElement, value: string, inputType?: string) {
  if (document.activeElement !== input) {
    await userEvent.click(input);
  }

  const setValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!;

  act(() => {
    setValue.call(input, value);
    input.dispatchEvent(
      inputType
        ? new InputEvent('input', { bubbles: true, inputType })
        : new Event('input', { bubbles: true })
    );
  });
}
