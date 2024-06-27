import { createContextContainer, patchConsoleError, render, tests } from '@mantine-tests/core';
import { Combobox } from '../Combobox';
import { ComboboxTarget, ComboboxTargetProps } from './ComboboxTarget';

const defaultProps: ComboboxTargetProps = {
  children: <div>test</div>,
};

const TestContainer = createContextContainer(ComboboxTarget, Combobox, {});

describe('@mantine/core/ComboboxTarget', () => {
  tests.itHasExtend({ component: ComboboxTarget });
  tests.itThrowsContextError({
    component: ComboboxTarget,
    props: defaultProps,
    error: 'Combobox component was not found in tree',
  });

  it('throws error if children cannot be processed', () => {
    const error = new Error(
      'Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
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
    expect(ComboboxTarget.displayName).toBe('@mantine/core/ComboboxTarget');
  });
});
