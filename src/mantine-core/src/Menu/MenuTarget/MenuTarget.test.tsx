import React from 'react';
import { render } from '@testing-library/react';
import { itThrowsContextError, patchConsoleError, createContextContainer } from '@mantine/tests';
import { MenuTarget, MenuTargetProps } from './MenuTarget';
import { MENU_ERRORS } from '../Menu.errors';
import { Menu } from '../Menu';

const defaultProps: MenuTargetProps = {
  children: <div>test</div>,
};

const TestContainer = createContextContainer(MenuTarget, Menu, { opened: true });

describe('@mantine/core/MenuTarget', () => {
  itThrowsContextError(MenuTarget, defaultProps, MENU_ERRORS.context);

  it('throws error if children cannot be processed', () => {
    const error = new Error(MENU_ERRORS.children);
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
