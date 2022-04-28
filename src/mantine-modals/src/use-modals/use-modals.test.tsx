import React, { useEffect, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import { renderHook, WrapperComponent } from '@testing-library/react-hooks';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { useModals } from './use-modals';
import { ModalsProvider } from '../ModalsProvider';
import { ContextModalProps } from '../context';

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

    expect(hook.result.error).toStrictEqual(
      Error(
        '[@mantine/modals] useModals hook was called outside of context, wrap your app with ModalsProvider component'
      )
    );
  });

  it('returns context value of ModalsProvider', () => {
    const wrapper = ({ children }: PropsWithChildren<unknown>) => (
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

  it('correctly passes innerProps to a context modal', () => {
    const ContextModal = ({ innerProps }: ContextModalProps<{ text: string }>) => (
      <div>{innerProps.text}</div>
    );

    const wrapper: WrapperComponent<unknown> = ({ children }) => (
      <MantineProvider>
        <ModalsProvider modals={{ contextTest: ContextModal }}>{children}</ModalsProvider>
      </MantineProvider>
    );

    const testContent = 'context-modal-test-content';
    const Component = () => {
      const modals = useModals();

      useEffect(() => {
        modals.openContextModal('contextTest', { innerProps: { text: testContent } });
      }, []);

      return <div>Empty</div>;
    };

    render(<Component />, { wrapper });
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('correctly renders a confirm modal with labels from the provider', () => {
    const wrapper: WrapperComponent<unknown> = ({ children }) => (
      <MantineProvider>
        <ModalsProvider labels={{ cancel: 'ProviderCancel', confirm: 'ProviderConfirm' }}>
          {children}
        </ModalsProvider>
      </MantineProvider>
    );

    const Component = () => {
      const modals = useModals();

      useEffect(() => {
        modals.openConfirmModal({});
      }, []);

      return <div>Empty</div>;
    };

    render(<Component />, { wrapper });
    expect(screen.getByText('ProviderCancel')).toBeInTheDocument();
    expect(screen.getByText('ProviderConfirm')).toBeInTheDocument();
  });

  it('correctly renders a confirm modal with overwritten provider labels', () => {
    const wrapper: WrapperComponent<unknown> = ({ children }) => (
      <MantineProvider>
        <ModalsProvider labels={{ cancel: 'ProviderCancel', confirm: 'ProviderConfirm' }}>
          {children}
        </ModalsProvider>
      </MantineProvider>
    );

    const Component = () => {
      const modals = useModals();

      useEffect(() => {
        modals.openConfirmModal({
          labels: { confirm: 'Confirm', cancel: 'Cancel' },
        });
      }, []);

      return <div>Empty</div>;
    };

    render(<Component />, { wrapper });
    expect(screen.getByText('Confirm')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('correctly renders a confirm modal with labels as HTMLElement', async () => {
    const wrapper: WrapperComponent<unknown> = ({ children }) => (
      <MantineProvider>
        <ModalsProvider>{children}</ModalsProvider>
      </MantineProvider>
    );

    const Component = () => {
      const modals = useModals();

      useEffect(() => {
        modals.openConfirmModal({
          labels: {
            confirm: <span>Confirm</span>,
            cancel: <span>Cancel</span>,
          },
        });
      }, []);

      return <div>Empty</div>;
    };

    render(<Component />, { wrapper });

    expect(screen.getByText('Confirm')).toContainHTML('span');
    expect(screen.getByText('Cancel')).toContainHTML('span');
  });

  it('correctly renders a regular modal with children and a title', () => {
    const wrapper: WrapperComponent<unknown> = ({ children }) => (
      <MantineProvider>
        <ModalsProvider>{children}</ModalsProvider>
      </MantineProvider>
    );

    const Component = () => {
      const modals = useModals();

      useEffect(() => {
        modals.openModal({
          title: 'Test title',
          children: <h1>Children</h1>,
        });
      }, []);

      return <div>Empty</div>;
    };

    render(<Component />, { wrapper });
    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
