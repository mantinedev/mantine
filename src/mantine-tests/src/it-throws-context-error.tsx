/* eslint-disable no-console */
import React from 'react';
import { render } from '@testing-library/react';
import { patchConsoleError } from './patch-console-error';

export function itThrowsContextError<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  errorMessage: string
) {
  it('throws error when rendered outside of context', async () => {
    patchConsoleError();
    expect(() => render(<Component {...requiredProps} />)).toThrow(new Error(errorMessage));
    patchConsoleError.release();
  });
}
