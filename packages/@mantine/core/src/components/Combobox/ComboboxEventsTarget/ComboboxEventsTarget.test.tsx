import { createContextContainer, patchConsoleError, render, tests } from '@mantine-tests/core';
import { Combobox } from '../Combobox';
import { ComboboxEventsTarget, ComboboxEventsTargetProps } from './ComboboxEventsTarget';

const defaultProps: ComboboxEventsTargetProps = {
  children: <div>test</div>,
};

const TestContainer = createContextContainer(ComboboxEventsTarget, Combobox, {});

describe('@mantine/core/ComboboxEventsTarget', () => {
  tests.itHasExtend({ component: ComboboxEventsTarget });
  tests.itThrowsContextError({
    component: ComboboxEventsTarget,
    props: defaultProps,
    error: 'Combobox component was not found in tree',
  });

  it('throws error if children cannot be processed', () => {
    const error = new Error(
      'Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
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
    expect(ComboboxEventsTarget.displayName).toBe('@mantine/core/ComboboxEventsTarget');
  });
});
