import { PropsWithChildren, useEffect } from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { ContextModalProps } from '../context';
import { ModalsProvider } from '../ModalsProvider';
import { useModals } from './use-modals';

describe('@mantine/modals/use-modals', () => {
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
    expect(current.closeContextModal).toBeDefined();
    expect(current.modals).toBeDefined();
    expect(current.openConfirmModal).toBeDefined();
    expect(current.openContextModal).toBeDefined();
    expect(current.openModal).toBeDefined();
  });

  it('correctly passes innerProps to a context modal', () => {
    const ContextModal = ({ innerProps }: ContextModalProps<{ text: string }>) => (
      <div>{innerProps.text}</div>
    );

    const wrapper = ({ children }: any) => (
      <MantineProvider>
        <ModalsProvider modals={{ contextTest: ContextModal }}>{children}</ModalsProvider>
      </MantineProvider>
    );

    const testContent = 'context-modal-test-content';
    const Component = () => {
      const modals = useModals();

      useEffect(() => {
        modals.openContextModal('contextTest', {
          innerProps: { text: testContent },
          transitionProps: { duration: 0 },
        });
      }, []);

      return <div>Empty</div>;
    };

    render(<Component />, { wrapper });
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('correctly renders a confirm modal with labels from the provider', () => {
    const wrapper = ({ children }: any) => (
      <MantineProvider>
        <ModalsProvider labels={{ cancel: 'ProviderCancel', confirm: 'ProviderConfirm' }}>
          {children}
        </ModalsProvider>
      </MantineProvider>
    );

    const Component = () => {
      const modals = useModals();

      useEffect(() => {
        modals.openConfirmModal({ transitionProps: { duration: 0 } });
      }, []);

      return <div>Empty</div>;
    };

    render(<Component />, { wrapper });
    expect(screen.getByText('ProviderCancel')).toBeInTheDocument();
    expect(screen.getByText('ProviderConfirm')).toBeInTheDocument();
  });

  it('correctly renders a confirm modal with overwritten provider labels', () => {
    const wrapper = ({ children }: any) => (
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
          transitionProps: { duration: 0 },
        });
      }, []);

      return <div>Empty</div>;
    };

    render(<Component />, { wrapper });
    expect(screen.getByText('Confirm')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('correctly renders a confirm modal with labels as HTMLElement', () => {
    const wrapper = ({ children }: any) => (
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
          transitionProps: { duration: 0 },
        });
      }, []);

      return <div>Empty</div>;
    };

    render(<Component />, { wrapper });

    expect(screen.getByText('Confirm')).toContainHTML('span');
    expect(screen.getByText('Cancel')).toContainHTML('span');
  });

  it('correctly renders a regular modal with children and a title', () => {
    const wrapper = ({ children }: any) => (
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
          transitionProps: { duration: 0 },
        });
      }, []);

      return <div>Empty</div>;
    };

    render(<Component />, { wrapper });
    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
