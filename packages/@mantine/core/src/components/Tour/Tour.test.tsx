import { act } from '@testing-library/react';
import { renderWithAct, screen, userEvent } from '@mantine-tests/core';
import { Tour } from './Tour';

function DefaultTour(props: Partial<Tour.Props>) {
  return (
    <Tour active withOverlay={false} {...props}>
      <Tour.Step target="#target-1" title="Step 1 Title">
        Step 1 Content
      </Tour.Step>
      <Tour.Step target="#target-2" title="Step 2 Title">
        Step 2 Content
      </Tour.Step>
      <Tour.Step target="#target-3" title="Step 3 Title">
        Step 3 Content
      </Tour.Step>
    </Tour>
  );
}

describe('@mantine/core/Tour', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    for (let i = 1; i <= 3; i++) {
      const button = document.createElement('button');
      button.id = `target-${i}`;
      button.textContent = `Target ${i}`;
      container.appendChild(button);
    }
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('renders nothing when active is false', async () => {
    await renderWithAct(<DefaultTour active={false} />);
    expect(screen.queryByText('Step 1 Title')).not.toBeInTheDocument();
  });

  it('renders tooltip when active is true', async () => {
    await renderWithAct(<DefaultTour />);
    expect(screen.getByText('Step 1 Title')).toBeInTheDocument();
  });

  it('does not trigger React warnings while positioning the tooltip', async () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { rerender } = await renderWithAct(<DefaultTour step={0} />);

    await act(async () => {
      rerender(<DefaultTour step={1} />);
    });

    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('displays current step title and content', async () => {
    await renderWithAct(<DefaultTour />);
    expect(screen.getByText('Step 1 Title')).toBeInTheDocument();
    expect(screen.getByText('Step 1 Content')).toBeInTheDocument();
  });

  it('displays correct step when step prop changes', async () => {
    const { rerender } = await renderWithAct(<DefaultTour step={0} />);
    expect(screen.getByText('Step 1 Title')).toBeInTheDocument();

    await act(async () => {
      rerender(<DefaultTour step={1} />);
    });
    expect(screen.getByText('Step 2 Title')).toBeInTheDocument();
  });

  it('calls onStepChange when next button is clicked', async () => {
    const onStepChange = jest.fn();
    await renderWithAct(<DefaultTour step={0} onStepChange={onStepChange} />);

    await userEvent.click(screen.getByText('Next'));
    expect(onStepChange).toHaveBeenCalledWith(1);
  });

  it('calls onStepChange when back button is clicked', async () => {
    const onStepChange = jest.fn();
    await renderWithAct(<DefaultTour step={1} onStepChange={onStepChange} />);

    await userEvent.click(screen.getByText('Back'));
    expect(onStepChange).toHaveBeenCalledWith(0);
  });

  it('does not render back button on first step', async () => {
    await renderWithAct(<DefaultTour step={0} />);
    expect(screen.queryByText('Back')).not.toBeInTheDocument();
  });

  it('renders close label instead of next on last step', async () => {
    await renderWithAct(<DefaultTour step={2} />);
    expect(screen.queryByText('Next')).not.toBeInTheDocument();
    expect(screen.getAllByText('Close').length).toBeGreaterThanOrEqual(1);
  });

  it('calls onClose when skip button is clicked', async () => {
    const onClose = jest.fn();
    await renderWithAct(<DefaultTour onClose={onClose} />);

    await userEvent.click(screen.getByText('Skip'));
    expect(onClose).toHaveBeenCalled();
  });

  it('hides close button when withCloseButton is false', async () => {
    await renderWithAct(<DefaultTour withCloseButton={false} />);
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument();
  });

  it('displays step counter', async () => {
    await renderWithAct(<DefaultTour step={1} />);
    expect(screen.getByText('2 of 3')).toBeInTheDocument();
  });

  it('uses custom labels', async () => {
    await renderWithAct(
      <DefaultTour
        step={1}
        labels={{
          skip: 'Saltar',
          back: 'Atrás',
          next: 'Siguiente',
          close: 'Cerrar',
          stepCounter: (current, total) => `${current} de ${total}`,
        }}
      />
    );
    expect(screen.getByText('Saltar')).toBeInTheDocument();
    expect(screen.getByText('Atrás')).toBeInTheDocument();
    expect(screen.getByText('Siguiente')).toBeInTheDocument();
    expect(screen.getByText('2 de 3')).toBeInTheDocument();
  });

  it('renders centered tooltip when step has no target', async () => {
    await renderWithAct(
      <Tour active withOverlay={false} step={0}>
        <Tour.Step title="No Target Step">No target content</Tour.Step>
      </Tour>
    );
    expect(screen.getByText('No Target Step')).toBeInTheDocument();
    expect(screen.getByText('No target content')).toBeInTheDocument();
  });

  it('exposes all compound components', () => {
    expect(Tour.Root).toBeDefined();
    expect(Tour.Step).toBeDefined();
    expect(Tour.Overlay).toBeDefined();
    expect(Tour.Tooltip).toBeDefined();
    expect(Tour.Title).toBeDefined();
    expect(Tour.Body).toBeDefined();
    expect(Tour.Navigation).toBeDefined();
    expect(Tour.Beacon).toBeDefined();
    expect(Tour.CloseButton).toBeDefined();
  });

  it('has correct displayName', () => {
    expect(Tour.displayName).toBe('@mantine/core/Tour');
  });

  describe('keyboard navigation', () => {
    it('navigates to next step with ArrowRight', async () => {
      const onStepChange = jest.fn();
      await renderWithAct(<DefaultTour step={0} onStepChange={onStepChange} />);

      await userEvent.keyboard('{ArrowRight}');
      expect(onStepChange).toHaveBeenCalledWith(1);
    });

    it('navigates to previous step with ArrowLeft', async () => {
      const onStepChange = jest.fn();
      await renderWithAct(<DefaultTour step={1} onStepChange={onStepChange} />);

      await userEvent.keyboard('{ArrowLeft}');
      expect(onStepChange).toHaveBeenCalledWith(0);
    });

    it('does not go below step 0 with ArrowLeft', async () => {
      const onStepChange = jest.fn();
      await renderWithAct(<DefaultTour step={0} onStepChange={onStepChange} />);

      await userEvent.keyboard('{ArrowLeft}');
      expect(onStepChange).not.toHaveBeenCalled();
    });

    it('does not go beyond last step with ArrowRight', async () => {
      const onStepChange = jest.fn();
      await renderWithAct(<DefaultTour step={2} onStepChange={onStepChange} />);

      await userEvent.keyboard('{ArrowRight}');
      expect(onStepChange).not.toHaveBeenCalled();
    });

    it('closes tour with Escape', async () => {
      const onClose = jest.fn();
      await renderWithAct(<DefaultTour onClose={onClose} />);

      await userEvent.keyboard('{Escape}');
      expect(onClose).toHaveBeenCalled();
    });

    it('does not respond to keyboard when withKeyboardNavigation is false', async () => {
      const onStepChange = jest.fn();
      const onClose = jest.fn();
      await renderWithAct(
        <DefaultTour
          step={0}
          onStepChange={onStepChange}
          onClose={onClose}
          withKeyboardNavigation={false}
        />
      );

      await userEvent.keyboard('{ArrowRight}');
      expect(onStepChange).not.toHaveBeenCalled();
    });

    it('does not close with Escape when closeOnEscape is false', async () => {
      const onClose = jest.fn();
      await renderWithAct(<DefaultTour onClose={onClose} closeOnEscape={false} />);

      await userEvent.keyboard('{Escape}');
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('lifecycle callbacks', () => {
    it('calls onStepOpen on initial mount', async () => {
      const onStepOpen = jest.fn();
      await renderWithAct(<DefaultTour onStepOpen={onStepOpen} />);
      expect(onStepOpen).toHaveBeenCalledWith(0);
    });

    it('calls onStepOpen with new step index when step changes via rerender', async () => {
      const onStepOpen = jest.fn();
      const { rerender } = await renderWithAct(<DefaultTour step={0} onStepOpen={onStepOpen} />);

      onStepOpen.mockClear();

      await act(async () => {
        rerender(<DefaultTour step={1} onStepOpen={onStepOpen} />);
      });
      expect(onStepOpen).toHaveBeenCalledWith(1);
    });

    it('calls onStepClose for active step when tour closes', async () => {
      const onStepClose = jest.fn();
      await renderWithAct(<DefaultTour step={1} onStepClose={onStepClose} />);

      onStepClose.mockClear();

      await userEvent.click(screen.getByText('Skip'));
      expect(onStepClose).toHaveBeenCalledWith(1);
    });

    it('calls per-step onStepOpen callback', async () => {
      const stepOpen = jest.fn();
      await renderWithAct(
        <Tour active withOverlay={false} step={0}>
          <Tour.Step target="#target-1" title="S1" onStepOpen={stepOpen}>
            Content
          </Tour.Step>
        </Tour>
      );
      expect(stepOpen).toHaveBeenCalled();
    });
  });

  describe('overlay', () => {
    it('renders overlay when withOverlay is true', async () => {
      const { container: renderContainer } = await renderWithAct(<DefaultTour withOverlay />);
      expect(renderContainer.querySelector('svg[role="presentation"]')).toBeInTheDocument();
    });

    it('does not render overlay when withOverlay is false', async () => {
      const { container: renderContainer } = await renderWithAct(
        <DefaultTour withOverlay={false} />
      );
      expect(renderContainer.querySelector('svg[role="presentation"]')).not.toBeInTheDocument();
    });

    it('sets data-with-overlay-interaction when withOverlayInteraction is true', async () => {
      const { container: renderContainer } = await renderWithAct(
        <DefaultTour withOverlay withOverlayInteraction />
      );
      const overlay = renderContainer.querySelector('svg[role="presentation"]')!;
      expect(overlay).toHaveAttribute('data-with-overlay-interaction');
    });
  });

  describe('scrolling', () => {
    it('calls scrollIntoView on target element by default', async () => {
      const scrollIntoView = jest.fn();
      const targetEl = document.getElementById('target-1')!;
      targetEl.scrollIntoView = scrollIntoView;

      await renderWithAct(<DefaultTour />);
      expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'center' });
    });

    it('uses custom scrollToHandler when provided', async () => {
      const scrollToHandler = jest.fn();
      const targetEl = document.getElementById('target-1')!;
      targetEl.scrollIntoView = jest.fn();

      await renderWithAct(<DefaultTour scrollToHandler={scrollToHandler} />);
      expect(scrollToHandler).toHaveBeenCalledWith(targetEl);
      expect(targetEl.scrollIntoView).not.toHaveBeenCalled();
    });

    it('does not scroll when withScrollIntoView is false', async () => {
      const scrollIntoView = jest.fn();
      const targetEl = document.getElementById('target-1')!;
      targetEl.scrollIntoView = scrollIntoView;

      await renderWithAct(<DefaultTour withScrollIntoView={false} />);
      expect(scrollIntoView).not.toHaveBeenCalled();
    });
  });

  describe('per-step overrides', () => {
    it('hides overlay for step with withOverlay={false}', async () => {
      const { container: renderContainer } = await renderWithAct(
        <Tour active withOverlay step={0}>
          <Tour.Step target="#target-1" title="S1" withOverlay={false}>
            Content
          </Tour.Step>
        </Tour>
      );
      expect(renderContainer.querySelector('svg[role="presentation"]')).not.toBeInTheDocument();
    });
  });
});
