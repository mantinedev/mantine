/* eslint-disable no-console */
import React from 'react';
import { render } from '@testing-library/react';

export function itThrowsContextError<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  errorMessage: string
) {
  it('throws error when rendered outside of context', async () => {
    // gets rid of testing library errors for this test
    const initialError = console.error;
    console.error = () => {};

    expect(() => render(<Component {...requiredProps} />)).toThrow(new Error(errorMessage));

    console.error = initialError;
  });
}
