import { createContextContainer, patchConsoleError, render, tests } from '@mantine-tests/core';
import { HoverCard } from '../HoverCard';
import { HoverCardTarget, HoverCardTargetProps } from './HoverCardTarget';

const defaultProps: HoverCardTargetProps = {
  children: <div>test</div>,
};

const TestContainer = createContextContainer(HoverCardTarget, HoverCard, { opened: true });

describe('@mantine/core/HoverCardTarget', () => {
  tests.itThrowsContextError({
    component: HoverCardTarget,
    props: defaultProps,
    error: 'HoverCard component was not found in the tree',
  });

  it('throws error if children cannot be processed', () => {
    const error = new Error(
      'HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
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
