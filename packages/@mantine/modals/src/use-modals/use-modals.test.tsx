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

  describe('multiple modals with modal manager', () => {
    it('maintains backward compatibility - single modal by default', () => {
      const wrapper = ({ children }: any) => (
        <MantineProvider>
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
      );

      const Component = () => {
        const modals = useModals();

        useEffect(() => {
          modals.openModal({
            title: 'Modal 1',
            children: <div>Content 1</div>,
            transitionProps: { duration: 0 },
          });
          modals.openModal({
            title: 'Modal 2',
            children: <div>Content 2</div>,
            transitionProps: { duration: 0 },
          });
        }, []);

        return <div>Empty</div>;
      };

      render(<Component />, { wrapper });

      // Only Modal 2 should be visible (Modal 1 replaced)
      expect(screen.queryByText('Modal 1')).not.toBeInTheDocument();
      expect(screen.getByText('Modal 2')).toBeInTheDocument();
      expect(screen.getByText('Content 2')).toBeInTheDocument();
    });

    it('multiple modals when shouldReplaceExistingModal is false', () => {
      const wrapper = ({ children }: any) => (
        <MantineProvider>
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
      );

      const Component = () => {
        const modals = useModals();

        useEffect(() => {
          modals.openModal({
            title: 'Modal 1',
            children: <div>Content 1</div>,
            shouldReplaceExistingModal: false,
            transitionProps: { duration: 0 },
          });
          modals.openModal({
            title: 'Modal 2',
            children: <div>Content 2</div>,
            shouldReplaceExistingModal: false,
            transitionProps: { duration: 0 },
          });
        }, []);

        return <div>Empty</div>;
      };

      render(<Component />, { wrapper });

      // Both modals should be visible
      expect(screen.getByText('Modal 1')).toBeInTheDocument();
      expect(screen.getByText('Content 1')).toBeInTheDocument();
      expect(screen.getByText('Modal 2')).toBeInTheDocument();
      expect(screen.getByText('Content 2')).toBeInTheDocument();
    });

    it('stacks confirm modals', () => {
      const wrapper = ({ children }: any) => (
        <MantineProvider>
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
      );

      const Component = () => {
        const modals = useModals();

        useEffect(() => {
          modals.openConfirmModal({
            title: 'Confirm 1',
            children: <div>Confirm Content 1</div>,
            shouldReplaceExistingModal: false,
            transitionProps: { duration: 0 },
          });
          modals.openConfirmModal({
            title: 'Confirm 2',
            children: <div>Confirm Content 2</div>,
            shouldReplaceExistingModal: false,
            transitionProps: { duration: 0 },
          });
        }, []);

        return <div>Empty</div>;
      };

      render(<Component />, { wrapper });

      // Both confirm modals should be visible
      expect(screen.getByText('Confirm 1')).toBeInTheDocument();
      expect(screen.getByText('Confirm Content 1')).toBeInTheDocument();
      expect(screen.getByText('Confirm 2')).toBeInTheDocument();
      expect(screen.getByText('Confirm Content 2')).toBeInTheDocument();
    });

    it('stacks context modals', () => {
      const ContextModal1 = ({ innerProps }: ContextModalProps<{ text: string }>) => (
        <div>{innerProps.text}</div>
      );
      const ContextModal2 = ({ innerProps }: ContextModalProps<{ text: string }>) => (
        <div>{innerProps.text}</div>
      );

      const wrapper = ({ children }: any) => (
        <MantineProvider>
          <ModalsProvider modals={{ modal1: ContextModal1, modal2: ContextModal2 }}>
            {children}
          </ModalsProvider>
        </MantineProvider>
      );

      const Component = () => {
        const modals = useModals();

        useEffect(() => {
          modals.openContextModal('modal1', {
            innerProps: { text: 'Context 1' },
            shouldReplaceExistingModal: false,
            transitionProps: { duration: 0 },
          });
          modals.openContextModal('modal2', {
            innerProps: { text: 'Context 2' },
            shouldReplaceExistingModal: false,
            transitionProps: { duration: 0 },
          });
        }, []);

        return <div>Empty</div>;
      };

      render(<Component />, { wrapper });

      // Both context modals should be visible
      expect(screen.getByText('Context 1')).toBeInTheDocument();
      expect(screen.getByText('Context 2')).toBeInTheDocument();
    });

    it('can mix different modal types in stack', () => {
      const ContextModal = ({ innerProps }: ContextModalProps<{ text: string }>) => (
        <div>{innerProps.text}</div>
      );

      const wrapper = ({ children }: any) => (
        <MantineProvider>
          <ModalsProvider modals={{ contextTest: ContextModal }}>{children}</ModalsProvider>
        </MantineProvider>
      );

      const Component = () => {
        const modals = useModals();

        useEffect(() => {
          modals.openModal({
            title: 'Regular Modal',
            children: <div>Regular Content</div>,
            shouldReplaceExistingModal: false,
            transitionProps: { duration: 0 },
          });
          modals.openConfirmModal({
            title: 'Confirm Modal',
            children: <div>Confirm Content</div>,
            shouldReplaceExistingModal: false,
            transitionProps: { duration: 0 },
          });
          modals.openContextModal('contextTest', {
            innerProps: { text: 'Context Content' },
            shouldReplaceExistingModal: false,
            transitionProps: { duration: 0 },
          });
        }, []);

        return <div>Empty</div>;
      };

      render(<Component />, { wrapper });

      // All three different types should be visible
      expect(screen.getByText('Regular Modal')).toBeInTheDocument();
      expect(screen.getByText('Regular Content')).toBeInTheDocument();
      expect(screen.getByText('Confirm Modal')).toBeInTheDocument();
      expect(screen.getByText('Confirm Content')).toBeInTheDocument();
      expect(screen.getByText('Context Content')).toBeInTheDocument();
    });
  });
});
