import { useEffect, PropsWithChildren } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from './ModalsProvider';
import { useModals } from './use-modals/use-modals';
import { openModal } from './events';

describe('@mantine/modals/ModalsProvider', () => {
  const renderWithModals = ({
    modalsCount,
    showAllModals,
    closeOnEscapeTopOnly,
  }: {
    modalsCount: number;
    showAllModals?: boolean;
    closeOnEscapeTopOnly?: boolean;
  }) => {
    const wrapper = ({ children }: PropsWithChildren<unknown>) => (
      <MantineProvider>
        <ModalsProvider showAllModals={showAllModals} closeOnEscapeTopOnly={closeOnEscapeTopOnly}>
          {children}
        </ModalsProvider>
      </MantineProvider>
    );
  
    const Component = () => {
      const modals = useModals();
  
      useEffect(() => {
        Array.from({ length: modalsCount }).forEach((_, index) => {
          modals.openModal({
            title: `Modal ${index + 1}`,
            children: <div>Content {index + 1}</div>,
            transitionProps: { duration: 0 },
          });
        });
      }, []);
  
      return <div>Empty</div>;
    };
  
    return render(<Component />, { wrapper });
  };

  describe('rendering', () => {
    it('handles empty modals array correctly', () => {
      const wrapper = ({ children }: PropsWithChildren<unknown>) => (
        <MantineProvider>
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
      );

      const Component = () => <div>Empty</div>;

      render(<Component />, { wrapper });
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('only renders the last modal when showAllModals is not specified (defaults to false)', () => {
      renderWithModals({ modalsCount: 3 });

      const modals = screen.getAllByRole('dialog');
      expect(screen.queryByText('Modal 1')).not.toBeInTheDocument();
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
      expect(screen.queryByText('Modal 2')).not.toBeInTheDocument();
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
      expect(screen.getByText('Modal 3')).toBeInTheDocument();
      expect(screen.getByText('Content 3')).toBeInTheDocument();

      expect(modals).toHaveLength(1);
      expect(modals[0]).toHaveTextContent('Modal 3');
      expect(modals[0]).toHaveTextContent('Content 3');

      const closeButton = screen.getAllByRole('button').find(
        (btn) => btn.className.includes('close')
      );
      if (closeButton) {
        fireEvent.click(closeButton);
        expect(screen.queryByText('Modal 3')).not.toBeInTheDocument();
        expect(screen.getByText('Modal 2')).toBeInTheDocument();
      }
    });

    it('renders multiple modals simultaneously with correct content', () => {
      renderWithModals({ modalsCount: 2, showAllModals: true });
      expect(screen.getByText('Modal 1')).toBeInTheDocument();
      expect(screen.getByText('Modal 2')).toBeInTheDocument();
      expect(screen.getByText('Content 1')).toBeInTheDocument();
      expect(screen.getByText('Content 2')).toBeInTheDocument();
    });

    it('renders multiple modals in correct order based on opening sequence', () => {
      renderWithModals({ modalsCount: 3, showAllModals: true });

      const modals = screen.getAllByRole('dialog');
      expect(modals[0]).toHaveTextContent('Modal 1');
      expect(modals[1]).toHaveTextContent('Modal 2');
      expect(modals[2]).toHaveTextContent('Modal 3');
    });

    it('maintains correct order when closing a modal in the middle', async () => {
      renderWithModals({ modalsCount: 2, showAllModals: true });

      const modals = screen.getAllByRole('dialog');
      expect(screen.getByText('Modal 1')).toBeInTheDocument();
      expect(screen.getByText('Content 1')).toBeInTheDocument();
      expect(screen.getByText('Modal 2')).toBeInTheDocument();
      expect(screen.getByText('Content 2')).toBeInTheDocument();
    
      fireEvent.keyDown(modals[1], { key: 'Escape' });

      expect(screen.queryByText('Modal 2')).not.toBeInTheDocument();
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument();

      openModal({
        title: 'Modal 3',
        children: 'Content 3',
        transitionProps: { duration: 0 },
      });

      await waitFor(() => {
        const modalsAfterOpen = screen.getAllByRole('dialog');
        expect(modalsAfterOpen[0]).toHaveTextContent('Modal 1');
        expect(modalsAfterOpen[1]).toHaveTextContent('Modal 3');
      });
    });
  });

  describe('escape key behavior', () => {
    it('closes only the top modal when closeOnEscapeTopOnly is not specified (defaults to true)', () => {
      renderWithModals({ modalsCount: 2, showAllModals: true });

      const modals = screen.getAllByRole('dialog');
      fireEvent.keyDown(modals[1], { key: 'Escape' });

      expect(screen.getByText('Modal 1')).toBeInTheDocument();
      expect(screen.getByText('Content 1')).toBeInTheDocument();
      expect(screen.queryByText('Modal 2')).not.toBeInTheDocument();
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    });

    it('closes all modals when closeOnEscapeTopOnly is false', () => {
      renderWithModals({ modalsCount: 2, showAllModals: true, closeOnEscapeTopOnly: false });
      
      const modals = screen.getAllByRole('dialog');
      fireEvent.keyDown(modals[1], { key: 'Escape' });
      
      expect(screen.queryByText('Modal 1')).not.toBeInTheDocument();
      expect(screen.queryByText('Modal 2')).not.toBeInTheDocument();
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    });
  });
});
