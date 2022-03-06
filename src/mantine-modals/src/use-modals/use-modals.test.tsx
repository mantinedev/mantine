import React from 'react';
import ReactDOM from 'react-dom';
import { renderHook } from '@testing-library/react-hooks';
import { MantineProvider } from '@mantine/core';
import { useModals } from './use-modals';
import { ModalsProvider } from '../ModalsProvider';

describe('@mantine/modals/use-modals', () => {
  beforeAll(() => {
    // @ts-ignore
    ReactDOM.createPortal = jest.fn((element) => element);
  });

  afterEach(() => {
    // @ts-ignore
    ReactDOM.createPortal.mockClear();
  });

  it('throws error if called outside of ModalsProvider', () => {
    const hook = renderHook(() => useModals());
    console.log(hook.result.error);

    expect(hook.result.error).toStrictEqual(
      Error(
        '[@mantine/modals] useModals hook was called outside of context, wrap your app with ModalsProvider component'
      )
    );
  });

  it('returns context value of ModalsProvider', () => {
    const wrapper = ({ children }) => (
      <MantineProvider>
        <ModalsProvider>{children}</ModalsProvider>
      </MantineProvider>
    );

    const hook = renderHook(() => useModals(), { wrapper });
    const { current } = hook.result;

    expect(current.closeAll).toBeDefined();
    expect(current.closeModal).toBeDefined();
    expect(current.modals).toBeDefined();
    expect(current.openConfirmModal).toBeDefined();
    expect(current.openContextModal).toBeDefined();
    expect(current.openModal).toBeDefined();
  });
});
