import { act, fireEvent } from '@testing-library/react';

/**
 * Simulates browser autofill, a password manager or a browser extension writing to an input.
 * Such agents set the input value without focusing the field first, which means that handlers
 * attached to focus events (`onBlur` in particular) never run for them.
 */
export async function externalInputFill(input: HTMLElement, value: string) {
  if (document.activeElement === input) {
    await act(async () => {
      (input as HTMLInputElement).blur();
    });
  }

  fireEvent.change(input, { target: { value } });
}
