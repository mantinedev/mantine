import React from 'react';
import { render } from '@testing-library/react';
import { itThrowsContextError, patchConsoleError, createContextContainer } from '@mantine/tests';
import { PopoverTarget, PopoverTargetProps } from './PopoverTarget';
import { POPOVER_ERRORS } from '../Popover.errors';
import { Popover } from '../Popover';

const defaultProps: PopoverTargetProps = {
  children: <div>test</div>,
};

const TestContainer = createContextContainer(PopoverTarget, Popover, { opened: true });

describe('@mantine/core/PopoverTarget', () => {
  itThrowsContextError(PopoverTarget, defaultProps, POPOVER_ERRORS.context);

  it('throws error if children cannot be processed', () => {
    const error = new Error(POPOVER_ERRORS.children);
    patchConsoleError();
    expect(() => render(<TestContainer>Hello</TestContainer>)).toThrow(error);
    expect(() => render(<TestContainer>{2}</TestContainer>)).toThrow(error);
    expect(() =>
      render(
        <TestContainer>
          <>fragment</>
        </TestContainer>
      )
    ).toThrow(error);
    expect(() =>
      render(
        <TestContainer>
          <div>node 1</div>
          <div>node 2</div>
        </TestContainer>
      )
    ).toThrow(error);
    patchConsoleError.release();
  });

  it('has correct displayName', () => {
    expect(PopoverTarget.displayName).toEqual('@mantine/core/PopoverTarget');
  });
});
