import React from 'react';
import { render } from '@testing-library/react';
import { itThrowsContextError, patchConsoleError, createContextContainer } from '@mantine/tests';
import { HoverCardTarget, HoverCardTargetProps } from './HoverCardTarget';
import { HOVER_CARD_ERRORS } from '../HoverCard.errors';
import { HoverCard } from '../HoverCard';

const defaultProps: HoverCardTargetProps = {
  children: <div>test</div>,
};

const TestContainer = createContextContainer(HoverCardTarget, HoverCard, { opened: true });

describe('@mantine/core/HoverCardTarget', () => {
  itThrowsContextError(HoverCardTarget, defaultProps, HOVER_CARD_ERRORS.context);

  it('throws error if children cannot be processed', () => {
    const error = new Error(HOVER_CARD_ERRORS.children);
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
    expect(HoverCardTarget.displayName).toEqual('@mantine/core/HoverCardTarget');
  });
});
