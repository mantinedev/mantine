import { createContextContainer, patchConsoleError, render, tests } from '@mantine-tests/core';
import { Popover } from '../Popover';
import { PopoverTarget, PopoverTargetProps } from './PopoverTarget';

const defaultProps: PopoverTargetProps = {
  children: <div>test</div>,
};

const TestContainer = createContextContainer(PopoverTarget, Popover, { opened: true });

describe('@mantine/core/PopoverTarget', () => {
  tests.itHasExtend({ component: PopoverTarget });
  tests.itThrowsContextError({
    component: PopoverTarget,
    props: defaultProps,
    error: 'Popover component was not found in the tree',
  });

  it('throws error if children cannot be processed', () => {
    const error = new Error(
      'Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
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
    expect(PopoverTarget.displayName).toBe('@mantine/core/PopoverTarget');
  });
});
