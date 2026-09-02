import { useState } from 'react';
import { act, fireEvent } from '@testing-library/react';
import { renderWithAct, screen, userEvent, wait } from '@mantine-tests/core';
import { DirectionProvider } from '../../../core';
import { Tour } from '../Tour';
import { TourRoot, TourRootProps } from './TourRoot';

const STEPS = [
  { target: 'target-1', title: 'Step 1 Title', body: 'Step 1 Content' },
  { target: 'target-2', title: 'Step 2 Title', body: 'Step 2 Content' },
];

function CompoundTour({ step: stepProp, onStepChange, ...props }: Partial<TourRootProps>) {
  const [uncontrolledStep, setUncontrolledStep] = useState(0);
  const step = stepProp ?? uncontrolledStep;
  const current = STEPS[step] || STEPS[0];

  return (
    <Tour.Root
      active
      step={step}
      onStepChange={(value) => {
        setUncontrolledStep(value);
        onStepChange?.(value);
      }}
      {...props}
    >
      <Tour.Overlay targetRect={null} />
      <Tour.Tooltip targetElement={document.getElementById(current.target)} mounted>
        <Tour.CloseButton />
        <Tour.Title>{current.title}</Tour.Title>
        <Tour.Body>{current.body}</Tour.Body>
        <Tour.Navigation />
      </Tour.Tooltip>
    </Tour.Root>
  );
}

describe('@mantine/core/TourRoot', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    for (let i = 1; i <= 2; i++) {
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

  it('has correct displayName', () => {
    expect(TourRoot.displayName).toBe('@mantine/core/TourRoot');
  });

  it('renders nothing when active is false', async () => {
    await renderWithAct(<CompoundTour active={false} />);
    expect(screen.queryByText('Step 1 Title')).not.toBeInTheDocument();
  });

  it('renders the compound tooltip with the current step content', async () => {
    await renderWithAct(<CompoundTour />);
    expect(screen.getByText('Step 1 Title')).toBeInTheDocument();
    expect(screen.getByText('Step 1 Content')).toBeInTheDocument();
    expect(screen.getByText('1 of 2')).toBeInTheDocument();
  });

  it('navigates with the Next and Back buttons', async () => {
    await renderWithAct(<CompoundTour />);

    await userEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Step 2 Title')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Back'));
    expect(screen.getByText('Step 1 Title')).toBeInTheDocument();
  });

  describe('keyboard navigation', () => {
    it('navigates to next step with ArrowRight', async () => {
      const onStepChange = jest.fn();
      await renderWithAct(<CompoundTour step={0} onStepChange={onStepChange} />);

      await userEvent.keyboard('{ArrowRight}');
      expect(onStepChange).toHaveBeenCalledWith(1);
    });

    it('navigates to previous step with ArrowLeft', async () => {
      const onStepChange = jest.fn();
      await renderWithAct(<CompoundTour step={1} onStepChange={onStepChange} />);

      await userEvent.keyboard('{ArrowLeft}');
      expect(onStepChange).toHaveBeenCalledWith(0);
    });

    it('does not go below step 0 with ArrowLeft', async () => {
      const onStepChange = jest.fn();
      await renderWithAct(<CompoundTour step={0} onStepChange={onStepChange} />);

      await userEvent.keyboard('{ArrowLeft}');
      expect(onStepChange).not.toHaveBeenCalled();
    });

    it('closes the tour with ArrowRight on the last step', async () => {
      const onStepChange = jest.fn();
      const onClose = jest.fn();
      await renderWithAct(<CompoundTour step={1} onStepChange={onStepChange} onClose={onClose} />);

      await userEvent.keyboard('{ArrowRight}');
      expect(onStepChange).not.toHaveBeenCalled();
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('closes tour with Escape', async () => {
      const onClose = jest.fn();
      await renderWithAct(<CompoundTour onClose={onClose} />);

      await userEvent.keyboard('{Escape}');
      expect(onClose).toHaveBeenCalled();
    });

    it('does not respond to arrow keys when withKeyboardNavigation is false', async () => {
      const onStepChange = jest.fn();
      await renderWithAct(
        <CompoundTour step={0} onStepChange={onStepChange} withKeyboardNavigation={false} />
      );

      await userEvent.keyboard('{ArrowRight}');
      expect(onStepChange).not.toHaveBeenCalled();
    });

    it('does not close with Escape when closeOnEscape is false', async () => {
      const onClose = jest.fn();
      await renderWithAct(<CompoundTour onClose={onClose} closeOnEscape={false} />);

      await userEvent.keyboard('{Escape}');
      expect(onClose).not.toHaveBeenCalled();
    });

    it('swaps ArrowLeft and ArrowRight in RTL direction', async () => {
      const onStepChange = jest.fn();
      await renderWithAct(
        <DirectionProvider initialDirection="rtl" detectDirection={false}>
          <CompoundTour step={0} onStepChange={onStepChange} />
        </DirectionProvider>
      );

      await userEvent.keyboard('{ArrowLeft}');
      expect(onStepChange).toHaveBeenLastCalledWith(1);
    });

    it('ignores arrow hotkeys fired from inside the Tour.Tooltip target element', async () => {
      const onStepChange = jest.fn();
      const slider = document.createElement('div');
      slider.setAttribute('role', 'slider');
      slider.tabIndex = 0;
      document.getElementById('target-1')!.appendChild(slider);

      await renderWithAct(<CompoundTour step={0} onStepChange={onStepChange} />);

      slider.focus();
      expect(fireEvent.keyDown(slider, { key: 'ArrowRight' })).toBe(true);
      expect(onStepChange).not.toHaveBeenCalled();

      fireEvent.keyDown(document.body, { key: 'ArrowRight' });
      expect(onStepChange).toHaveBeenCalledWith(1);
    });
  });

  describe('lifecycle callbacks', () => {
    it('calls onStepOpen once on mount', async () => {
      const onStepOpen = jest.fn();
      await renderWithAct(<CompoundTour onStepOpen={onStepOpen} />);
      expect(onStepOpen.mock.calls).toEqual([[0]]);
    });

    it('calls onStepClose and onStepOpen when step changes', async () => {
      const onStepOpen = jest.fn();
      const onStepClose = jest.fn();
      const { rerender } = await renderWithAct(
        <CompoundTour step={0} onStepOpen={onStepOpen} onStepClose={onStepClose} />
      );
      onStepOpen.mockClear();

      await act(async () => {
        rerender(
          <>
            <CompoundTour step={1} onStepOpen={onStepOpen} onStepClose={onStepClose} />
          </>
        );
      });
      expect(onStepClose.mock.calls).toEqual([[0]]);
      expect(onStepOpen.mock.calls).toEqual([[1]]);
    });

    it('calls onStepClose once when active becomes false', async () => {
      const onStepClose = jest.fn();
      const { rerender } = await renderWithAct(<CompoundTour step={1} onStepClose={onStepClose} />);

      await act(async () => {
        rerender(
          <>
            <CompoundTour active={false} step={1} onStepClose={onStepClose} />
          </>
        );
      });
      expect(onStepClose.mock.calls).toEqual([[1]]);
    });

    it('does not emit duplicate callbacks when reopened on another step', async () => {
      const onStepOpen = jest.fn();
      const onStepClose = jest.fn();
      const props = { onStepOpen, onStepClose };
      const { rerender } = await renderWithAct(<CompoundTour step={1} {...props} />);

      await userEvent.click(screen.getByText('Skip'));
      expect(onStepClose.mock.calls).toEqual([[1]]);

      await act(async () => {
        rerender(
          <>
            <CompoundTour active={false} step={1} {...props} />
          </>
        );
      });
      onStepOpen.mockClear();
      onStepClose.mockClear();

      await act(async () => {
        rerender(
          <>
            <CompoundTour active step={0} {...props} />
          </>
        );
      });
      expect(onStepOpen.mock.calls).toEqual([[0]]);
      expect(onStepClose).not.toHaveBeenCalled();
    });
  });

  describe('accessibility', () => {
    it('renders Tour.Tooltip as a dialog labelled by Tour.Title and described by Tour.Body', async () => {
      await renderWithAct(<CompoundTour />);
      const dialog = screen.getByRole('dialog', { name: 'Step 1 Title' });
      expect(dialog).toHaveAccessibleDescription('Step 1 Content');
    });

    it('moves focus to Tour.Tooltip when it opens', async () => {
      await renderWithAct(<CompoundTour />);
      await act(async () => {
        await wait(20);
      });
      expect(document.activeElement).toBe(screen.getByRole('dialog'));
    });
  });
});
