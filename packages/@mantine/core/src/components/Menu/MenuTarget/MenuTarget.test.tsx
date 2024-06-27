import { createContextContainer, patchConsoleError, render, tests } from '@mantine-tests/core';
import { Menu } from '../Menu';
import { MenuTarget, MenuTargetProps } from './MenuTarget';

const defaultProps: MenuTargetProps = {
  children: <div>test</div>,
};

const TestContainer = createContextContainer(MenuTarget, Menu, { opened: true });

describe('@mantine/core/MenuTarget', () => {
  tests.itThrowsContextError({
    component: MenuTarget,
    props: defaultProps,
    error: 'Menu component was not found in the tree',
  });

  it('throws error if children cannot be processed', () => {
    const error = new Error(
      'Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
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
    expect(MenuTarget.displayName).toEqual('@mantine/core/MenuTarget');
  });
});
