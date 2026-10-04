import { useState } from 'react';
import { act, createEvent, fireEvent } from '@testing-library/react';
import { flushSync } from 'react-dom';
import { render, renderWithAct, screen, userEvent, wait } from '@mantine-tests/core';
import { DirectionProvider } from '../../core';
import { Select } from '../Select';
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

function createRect(rect: Partial<DOMRect>) {
  return {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    right: 0,
    bottom: 0,
    x: 0,
    y: 0,
    toJSON: () => {},
    ...rect,
  } as DOMRect;
}

function stubRect(element: HTMLElement, rect: Partial<DOMRect>) {
  return jest.spyOn(element, 'getBoundingClientRect').mockReturnValue(createRect(rect));
}

const visibleRect = { top: 100, left: 100, width: 50, height: 20 };

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
    jest.restoreAllMocks();
  });

  it('renders nothing when active is false', async () => {
    await renderWithAct(<DefaultTour active={false} />);
    expect(screen.queryByText('Step 1 Title')).not.toBeInTheDocument();
  });

  it('does not observe the first step target while inactive', async () => {
    const target = document.getElementById('target-1')!;
    const getBoundingClientRect = jest.spyOn(target, 'getBoundingClientRect');
    const addEventListener = jest.spyOn(window, 'addEventListener');

    await renderWithAct(<DefaultTour active={false} />);

    expect(getBoundingClientRect).not.toHaveBeenCalled();
    expect(addEventListener.mock.calls.filter(([type]) => type === 'scroll')).toHaveLength(0);
  });

  it('renders tooltip when active is true', async () => {
    await renderWithAct(<DefaultTour />);
    expect(screen.getByText('Step 1 Title')).toBeInTheDocument();
  });

  it('does not trigger React warnings while positioning the tooltip', async () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { rerender } = await renderWithAct(<DefaultTour step={0} />);

    await act(async () => {
      rerender(
        <>
          <DefaultTour step={1} />
        </>
      );
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
    const tooltip = screen.getByText('Step 1 Title').parentElement;
    expect(screen.getByText('Step 1 Title')).toBeInTheDocument();

    await act(async () => {
      rerender(
        <>
          <DefaultTour step={1} />
        </>
      );
    });
    expect(screen.getByText('Step 2 Title')).toBeInTheDocument();
    expect(screen.getByText('Step 2 Title').parentElement).toBe(tooltip);
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

  it('navigates between steps when uncontrolled', async () => {
    await renderWithAct(<DefaultTour defaultStep={0} />);
    expect(screen.getByText('Step 1 Title')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Step 2 Title')).toBeInTheDocument();
    expect(screen.queryByText('Step 1 Title')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Back'));
    expect(screen.getByText('Step 1 Title')).toBeInTheDocument();
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

  it('sets --tour-z-index and --tour-overlay-color variables on the root element', async () => {
    const { container: renderContainer } = await renderWithAct(
      <DefaultTour zIndex={321} overlayColor="rgb(1, 2, 3)" />
    );
    const root = renderContainer.querySelector<HTMLElement>('.mantine-Tour-root')!;
    expect(root.style.getPropertyValue('--tour-z-index')).toBe('321');
    expect(root.style.getPropertyValue('--tour-overlay-color')).toBe('rgb(1, 2, 3)');
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

  it('sets --tour-color from color prop and passes color to the next button', async () => {
    const { container: renderContainer } = await renderWithAct(<DefaultTour color="teal" />);
    const root = renderContainer.querySelector<HTMLElement>('.mantine-Tour-root')!;
    expect(root.style.getPropertyValue('--tour-color')).toBe('var(--mantine-color-teal-filled)');
    expect(screen.getByRole('button', { name: 'Next' }).style.getPropertyValue('--button-bg')).toBe(
      'var(--mantine-color-teal-filled)'
    );
  });

  it('passes color from Tour.Root to the next button', async () => {
    await renderWithAct(
      <Tour.Root active stepsCount={2} color="teal" withOverlay={false}>
        <Tour.Tooltip mounted>
          <Tour.Navigation />
        </Tour.Tooltip>
      </Tour.Root>
    );
    expect(screen.getByRole('button', { name: 'Next' }).style.getPropertyValue('--button-bg')).toBe(
      'var(--mantine-color-teal-filled)'
    );
  });

  it('resolves tooltipShadow and does not map spotlightRadius to the tooltip radius', async () => {
    const { container: renderContainer } = await renderWithAct(
      <DefaultTour tooltipShadow="lg" spotlightRadius={20} withOverlay />
    );
    const root = renderContainer.querySelector<HTMLElement>('.mantine-Tour-root')!;
    expect(root.style.getPropertyValue('--tour-tooltip-shadow')).toBe('var(--mantine-shadow-lg)');
    expect(root.style.getPropertyValue('--tour-tooltip-radius')).toBe('');
    expect(root.style.getPropertyValue('--tour-spotlight-radius')).toBe('');
    expect(
      renderContainer.querySelector<SVGRectElement>('svg[role="presentation"] > rect')!.style.fill
    ).toBe('var(--tour-overlay-color)');
  });

  it('animates the tooltip position only while moving to another step target', async () => {
    stubRect(document.getElementById('target-1')!, visibleRect);
    stubRect(document.getElementById('target-2')!, { ...visibleRect, top: 200 });
    const { rerender } = await renderWithAct(
      <DefaultTour step={0} stepTransitionDuration={50} withOverlay />
    );
    await act(async () => {
      await wait(20);
    });
    expect(screen.getByRole('dialog').style.transition).not.toContain('top');

    await act(async () => {
      rerender(
        <>
          <DefaultTour step={1} stepTransitionDuration={50} withOverlay />
        </>
      );
    });
    expect(screen.getByRole('dialog').style.transition).toContain('top 50ms');

    await act(async () => {
      await wait(80);
    });
    expect(screen.getByRole('dialog').style.transition).not.toContain('top');
  });

  it('does not animate the tooltip position when the next step target has to be scrolled into view', async () => {
    const nextTarget = document.getElementById('target-2')!;
    stubRect(document.getElementById('target-1')!, visibleRect);
    stubRect(nextTarget, { ...visibleRect, top: window.innerHeight + 100 });
    nextTarget.scrollIntoView = jest.fn();

    const { rerender } = await renderWithAct(
      <DefaultTour step={0} stepTransitionDuration={50} withOverlay />
    );
    await act(async () => {
      await wait(20);
    });

    await act(async () => {
      rerender(
        <>
          <DefaultTour step={1} stepTransitionDuration={50} withOverlay />
        </>
      );
    });
    expect(nextTarget.scrollIntoView).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('dialog').style.transition).not.toContain('top');
  });

  describe('centered steps', () => {
    it('uses maxWidth for a centered step after a targeted step was constrained', async () => {
      stubRect(document.getElementById('target-1')!, {
        width: 20,
        height: 20,
        right: 20,
        bottom: 20,
      });
      jest.spyOn(document.documentElement, 'clientWidth', 'get').mockReturnValue(200);
      jest.spyOn(document.documentElement, 'clientHeight', 'get').mockReturnValue(800);
      const { rerender } = await renderWithAct(
        <Tour active step={0} withOverlay={false}>
          <Tour.Step target="#target-1">Targeted</Tour.Step>
          <Tour.Step>Centered</Tour.Step>
        </Tour>
      );
      await act(async () => {
        await wait(20);
      });
      expect(screen.getByRole('dialog').style.width).toBe('184px');

      await act(async () => {
        rerender(
          <>
            <Tour active step={1} withOverlay={false}>
              <Tour.Step target="#target-1">Targeted</Tour.Step>
              <Tour.Step>Centered</Tour.Step>
            </Tour>
          </>
        );
      });
      expect(screen.getByRole('dialog')).toHaveAttribute('data-centered');
      expect(screen.getByRole('dialog').style.width).toBe('360px');
    });

    function CenteredTour(props: Partial<Tour.Props>) {
      return (
        <Tour active withOverlay={false} {...props}>
          <Tour.Step title="No Target Step">No target content</Tour.Step>
        </Tour>
      );
    }

    it('renders centered tooltip when step has no target', async () => {
      await renderWithAct(<CenteredTour step={0} />);
      expect(screen.getByText('No Target Step')).toBeInTheDocument();
      expect(screen.getByText('No target content')).toBeInTheDocument();
    });

    it('centers the tooltip with CSS instead of measured inline coordinates on first open', async () => {
      const { rerender, container: renderContainer } = await renderWithAct(
        <CenteredTour active={false} />
      );

      await act(async () => {
        rerender(
          <>
            <CenteredTour active />
          </>
        );
      });

      const tooltip = renderContainer.querySelector<HTMLElement>('.mantine-Tour-tooltip')!;
      expect(tooltip).toHaveAttribute('data-centered');
      expect(tooltip.style.top).toBe('');
      expect(tooltip.style.left).toBe('');
    });
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

    it('closes the tour with ArrowRight on the last step', async () => {
      const onStepChange = jest.fn();
      const onClose = jest.fn();
      await renderWithAct(<DefaultTour step={2} onStepChange={onStepChange} onClose={onClose} />);

      await userEvent.keyboard('{ArrowRight}');
      expect(onStepChange).not.toHaveBeenCalled();
      expect(onClose).toHaveBeenCalledTimes(1);
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

    it('swaps ArrowLeft and ArrowRight in RTL direction', async () => {
      const onStepChange = jest.fn();
      await renderWithAct(
        <DirectionProvider initialDirection="rtl" detectDirection={false}>
          <DefaultTour step={1} onStepChange={onStepChange} />
        </DirectionProvider>
      );

      await userEvent.keyboard('{ArrowLeft}');
      expect(onStepChange).toHaveBeenLastCalledWith(2);

      await userEvent.keyboard('{ArrowRight}');
      expect(onStepChange).toHaveBeenLastCalledWith(0);
    });

    it('ignores arrow hotkeys fired from inside the current step target', async () => {
      const onStepChange = jest.fn();
      const interactiveTarget = document.createElement('div');
      interactiveTarget.id = 'interactive-target';
      const slider = document.createElement('div');
      slider.setAttribute('role', 'slider');
      slider.tabIndex = 0;
      interactiveTarget.appendChild(slider);
      container.appendChild(interactiveTarget);

      await renderWithAct(
        <Tour active withOverlay withOverlayInteraction step={0} onStepChange={onStepChange}>
          <Tour.Step target="#interactive-target" title="Slider">
            Use the slider
          </Tour.Step>
          <Tour.Step target="#target-2" title="Second">
            Second
          </Tour.Step>
        </Tour>
      );

      slider.focus();
      const notPrevented = fireEvent.keyDown(slider, { key: 'ArrowRight' });
      expect(notPrevented).toBe(true);
      expect(onStepChange).not.toHaveBeenCalled();

      fireEvent.keyDown(document.body, { key: 'ArrowRight' });
      expect(onStepChange).toHaveBeenCalledWith(1);
    });

    it('closes with Escape from an input and ignores arrow keys there', async () => {
      const onClose = jest.fn();
      const onStepChange = jest.fn();
      const input = document.createElement('input');
      container.appendChild(input);

      await renderWithAct(
        <DefaultTour withOverlayInteraction onClose={onClose} onStepChange={onStepChange} />
      );

      input.focus();
      fireEvent.keyDown(input, { key: 'ArrowRight' });
      expect(onStepChange).not.toHaveBeenCalled();

      fireEvent.keyDown(input, { key: 'Escape' });
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('does not close with Escape that closes an open dropdown', async () => {
      const onClose = jest.fn();
      await renderWithAct(
        <>
          <Select label="Country" data={['A', 'B']} comboboxProps={{ withinPortal: false }} />
          <DefaultTour withOverlayInteraction onClose={onClose} />
        </>
      );

      await userEvent.click(screen.getAllByLabelText('Country')[0]);
      expect(screen.getByRole('listbox')).toBeInTheDocument();

      const flushBetweenListeners = () => flushSync(() => {});
      document.body.addEventListener('keydown', flushBetweenListeners);
      await userEvent.keyboard('{Escape}');
      document.body.removeEventListener('keydown', flushBetweenListeners);
      expect(onClose).not.toHaveBeenCalled();

      await userEvent.keyboard('{Escape}');
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('lifecycle callbacks', () => {
    it('calls onStepOpen on initial mount', async () => {
      const onStepOpen = jest.fn();
      await renderWithAct(<DefaultTour onStepOpen={onStepOpen} />);
      expect(onStepOpen.mock.calls).toEqual([[0]]);
    });

    it('calls onStepClose and onStepOpen when step changes via rerender', async () => {
      const onStepOpen = jest.fn();
      const onStepClose = jest.fn();
      const { rerender } = await renderWithAct(
        <DefaultTour step={0} onStepOpen={onStepOpen} onStepClose={onStepClose} />
      );

      onStepOpen.mockClear();

      await act(async () => {
        rerender(
          <>
            <DefaultTour step={1} onStepOpen={onStepOpen} onStepClose={onStepClose} />
          </>
        );
      });
      expect(onStepClose.mock.calls).toEqual([[0]]);
      expect(onStepOpen.mock.calls).toEqual([[1]]);
    });

    it('calls onStepClose for active step when tour closes', async () => {
      const onStepClose = jest.fn();
      await renderWithAct(<DefaultTour step={1} onStepClose={onStepClose} />);

      onStepClose.mockClear();

      await userEvent.click(screen.getByText('Skip'));
      expect(onStepClose.mock.calls).toEqual([[1]]);
    });

    it('calls onStepClose once when active becomes false without close()', async () => {
      const onStepClose = jest.fn();
      const { rerender } = await renderWithAct(<DefaultTour step={1} onStepClose={onStepClose} />);

      await act(async () => {
        rerender(
          <>
            <DefaultTour active={false} step={1} onStepClose={onStepClose} />
          </>
        );
      });
      expect(onStepClose.mock.calls).toEqual([[1]]);
    });

    it('does not emit duplicate or phantom callbacks when reopened on another step', async () => {
      const onStepOpen = jest.fn();
      const onStepClose = jest.fn();
      const props = { onStepOpen, onStepClose };
      const { rerender } = await renderWithAct(<DefaultTour step={2} {...props} />);

      await userEvent.click(screen.getByText('Skip'));
      expect(onStepClose.mock.calls).toEqual([[2]]);

      await act(async () => {
        rerender(
          <>
            <DefaultTour active={false} step={2} {...props} />
          </>
        );
      });
      expect(onStepClose.mock.calls).toEqual([[2]]);

      onStepOpen.mockClear();
      onStepClose.mockClear();

      await act(async () => {
        rerender(
          <>
            <DefaultTour active step={0} {...props} />
          </>
        );
      });
      expect(onStepOpen.mock.calls).toEqual([[0]]);
      expect(onStepClose).not.toHaveBeenCalled();
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
      expect(stepOpen).toHaveBeenCalledTimes(1);
    });

    it('calls the latest per-step onStepClose when the tour is closed', async () => {
      const spy = jest.fn();
      const onClose = jest.fn();
      const ui = (value: string) => (
        <Tour active withOverlay={false} onClose={onClose}>
          <Tour.Step target="#target-1" title="S1" onStepClose={() => spy(value)}>
            Content
          </Tour.Step>
        </Tour>
      );
      const { rerender } = await renderWithAct(ui('a'));

      await act(async () => {
        rerender(<>{ui('b')}</>);
      });

      await userEvent.click(screen.getByText('Skip'));
      expect(spy).toHaveBeenCalledWith('b');
    });
  });

  describe('accessibility', () => {
    it('renders the tooltip as a dialog labelled by the title and described by the body', async () => {
      await renderWithAct(<DefaultTour />);
      const dialog = screen.getByRole('dialog', { name: 'Step 1 Title' });
      expect(dialog).toHaveAccessibleDescription('Step 1 Content');
      expect(dialog).not.toHaveAttribute('aria-modal');
    });

    it('updates the dialog name when the step changes', async () => {
      const { rerender } = await renderWithAct(<DefaultTour step={0} />);

      await act(async () => {
        rerender(
          <>
            <DefaultTour step={1} />
          </>
        );
      });
      expect(screen.getByRole('dialog', { name: 'Step 2 Title' })).toBeInTheDocument();
    });

    it('labels the dialog with the step counter when the step has no title', async () => {
      await renderWithAct(
        <Tour active withOverlay={false}>
          <Tour.Step target="#target-1">Content only</Tour.Step>
          <Tour.Step target="#target-2">Second</Tour.Step>
        </Tour>
      );
      expect(screen.getByRole('dialog', { name: '1 of 2' })).toBeInTheDocument();
    });

    it('moves focus inside the tooltip instead of the close button when focus is trapped', async () => {
      await renderWithAct(<DefaultTour withOverlay />);
      await act(async () => {
        await wait(20);
      });

      const dialog = screen.getByRole('dialog');
      expect(dialog).toContainElement(document.activeElement as HTMLElement);
      expect(document.activeElement).not.toBe(screen.getByLabelText('Close'));
    });

    it('focuses the tooltip when focus is not trapped', async () => {
      await renderWithAct(<DefaultTour withOverlay={false} />);
      await act(async () => {
        await wait(20);
      });

      expect(document.activeElement).toBe(screen.getByRole('dialog'));
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

    it('renders an even-odd hit path with a hole at the spotlight when withOverlayInteraction is set', async () => {
      stubRect(document.getElementById('target-1')!, {
        top: 100,
        left: 200,
        width: 50,
        height: 30,
      });

      const { container: renderContainer } = await renderWithAct(
        <DefaultTour withOverlay withOverlayInteraction spotlightPadding={10} spotlightRadius={6} />
      );

      const hitPath = renderContainer.querySelector('svg[role="presentation"] > path')!;
      expect(hitPath).toHaveAttribute('fill-rule', 'evenodd');
      expect(hitPath).toHaveStyle({ pointerEvents: 'auto' });
      expect(hitPath.getAttribute('d')).toBe(
        'M-100000 -100000H100000V100000H-100000Z' +
          'M196 90H254A6 6 0 0 1 260 96V134A6 6 0 0 1 254 140H196A6 6 0 0 1 190 134V96A6 6 0 0 1 196 90Z'
      );
    });

    it('does not render the hit path without withOverlayInteraction', async () => {
      const { container: renderContainer } = await renderWithAct(<DefaultTour withOverlay />);
      expect(
        renderContainer.querySelector('svg[role="presentation"] > path')
      ).not.toBeInTheDocument();
    });

    it('blocks the whole overlay when the step has no target rect', async () => {
      const { container: renderContainer } = await renderWithAct(
        <Tour active withOverlay withOverlayInteraction>
          <Tour.Step title="Centered">Centered</Tour.Step>
        </Tour>
      );
      expect(
        renderContainer.querySelector('svg[role="presentation"] > path')!.getAttribute('d')
      ).toBe('M-100000 -100000H100000V100000H-100000Z');
    });

    it('closes on overlay click with closeOnOverlayClick and withOverlayInteraction', async () => {
      const onClose = jest.fn();
      const { container: renderContainer } = await renderWithAct(
        <DefaultTour withOverlay withOverlayInteraction closeOnOverlayClick onClose={onClose} />
      );

      await userEvent.click(renderContainer.querySelector('svg[role="presentation"] > path')!);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('closes the tour on overlay click when closeOnOverlayClick is set', async () => {
      const onClose = jest.fn();
      const { container: renderContainer } = await renderWithAct(
        <DefaultTour withOverlay closeOnOverlayClick onClose={onClose} />
      );

      await userEvent.click(renderContainer.querySelector('svg[role="presentation"]')!);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('does not close the tour on overlay click by default', async () => {
      const onClose = jest.fn();
      const { container: renderContainer } = await renderWithAct(
        <DefaultTour withOverlay onClose={onClose} />
      );

      await userEvent.click(renderContainer.querySelector('svg[role="presentation"]')!);
      expect(onClose).not.toHaveBeenCalled();
    });

    it('cuts the spotlight out of the overlay using target rect, spotlightPadding and spotlightRadius', async () => {
      stubRect(document.getElementById('target-1')!, {
        top: 100,
        left: 200,
        width: 50,
        height: 30,
      });

      const { container: renderContainer } = await renderWithAct(
        <DefaultTour withOverlay spotlightPadding={10} spotlightRadius={6} />
      );

      const spotlight = renderContainer.querySelector('mask rect:nth-child(2)')!;
      expect(spotlight).toHaveAttribute('x', '190');
      expect(spotlight).toHaveAttribute('y', '90');
      expect(spotlight).toHaveAttribute('width', '70');
      expect(spotlight).toHaveAttribute('height', '50');
      expect(spotlight).toHaveAttribute('rx', '6');
    });

    it('updates the spotlight synchronously when the page scrolls', async () => {
      const rect = stubRect(document.getElementById('target-1')!, {
        top: 100,
        left: 200,
        width: 50,
        height: 30,
      });

      const { container: renderContainer } = await renderWithAct(
        <DefaultTour withOverlay spotlightPadding={10} />
      );

      const spotlight = renderContainer.querySelector('mask rect:nth-child(2)')!;
      expect(spotlight).toHaveAttribute('y', '90');

      rect.mockReturnValue(createRect({ top: 40, left: 200, width: 50, height: 30 }));
      act(() => {
        window.dispatchEvent(new Event('scroll'));
        expect(spotlight).toHaveAttribute('y', '30');
      });
    });

    it('freezes the spotlight and the tooltip while the target is pressed and syncs them after release', async () => {
      const target = document.getElementById('target-1')!;
      const rect = stubRect(target, { top: 100, left: 200, width: 50, height: 30 });

      const { container: renderContainer } = await renderWithAct(
        <DefaultTour withOverlay withOverlayInteraction spotlightPadding={10} />
      );

      const spotlight = renderContainer.querySelector('mask rect:nth-child(2)')!;
      const tooltipTop = screen.getByRole('dialog').style.top;
      expect(spotlight).toHaveAttribute('y', '90');

      fireEvent.pointerDown(target);
      rect.mockReturnValue(createRect({ top: 101, left: 200, width: 50, height: 30 }));
      await act(async () => {
        window.dispatchEvent(new Event('scroll'));
        await wait(20);
      });
      expect(spotlight).toHaveAttribute('y', '90');
      expect(screen.getByRole('dialog').style.top).toBe(tooltipTop);

      fireEvent.pointerUp(target);
      await act(async () => {
        await wait(50);
      });
      expect(spotlight).toHaveAttribute('y', '91');
      expect(screen.getByRole('dialog').style.top).not.toBe(tooltipTop);
    });

    it('removes the spotlight when switching to a step whose target is not mounted', async () => {
      stubRect(document.getElementById('target-1')!, { top: 10, left: 20, width: 30, height: 40 });
      const ui = (step: number) => (
        <Tour active withOverlay step={step}>
          <Tour.Step target="#target-1" title="Mounted">
            Mounted
          </Tour.Step>
          <Tour.Step target="#not-mounted-yet" title="Late">
            Late
          </Tour.Step>
        </Tour>
      );

      const { rerender, container: renderContainer } = await renderWithAct(ui(0));
      expect(renderContainer.querySelector('.mantine-Tour-spotlight')).toBeInTheDocument();

      await act(async () => {
        rerender(<>{ui(1)}</>);
      });
      expect(renderContainer.querySelector('.mantine-Tour-spotlight')).not.toBeInTheDocument();
    });

    it('keeps focus in place when the overlay is pressed', async () => {
      const { container: renderContainer } = await renderWithAct(<DefaultTour withOverlay />);
      const overlay = renderContainer.querySelector('svg[role="presentation"]')!;
      const event = createEvent.mouseDown(overlay);
      fireEvent(overlay, event);
      expect(event.defaultPrevented).toBe(true);
    });
  });

  describe('focus management', () => {
    function TourWithTrigger(props: Partial<Tour.Props>) {
      const [active, setActive] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setActive(true)}>
            Open tour
          </button>
          <DefaultTour withOverlay {...props} active={active} onClose={() => setActive(false)} />
        </>
      );
    }

    async function renderWithTransitions(ui: React.ReactNode) {
      let result: ReturnType<typeof render> | null = null;
      await act(async () => {
        result = render(ui, undefined, { env: 'default' });
      });
      return result!;
    }

    async function flush(ms: number) {
      await act(async () => {
        await wait(ms);
      });
    }

    it.each([
      ['Escape', () => userEvent.keyboard('{Escape}')],
      ['close button', () => userEvent.click(screen.getByLabelText('Close'))],
      ['skip button', () => userEvent.click(screen.getByText('Skip'))],
    ])('returns focus to the opener when closed with %s right after opening', async (_, action) => {
      await renderWithTransitions(<TourWithTrigger />);
      const trigger = screen.getByRole('button', { name: 'Open tour' });
      await userEvent.click(trigger);
      await flush(50);
      expect(screen.getByRole('dialog')).toContainElement(document.activeElement as HTMLElement);

      await action();
      await flush(400);

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(document.activeElement).toBe(trigger);
    });

    it('returns focus to the opener when closed with ArrowRight on the last step', async () => {
      await renderWithTransitions(<TourWithTrigger defaultStep={2} />);
      const trigger = screen.getByRole('button', { name: 'Open tour' });
      await userEvent.click(trigger);
      await flush(50);

      await userEvent.keyboard('{ArrowRight}');
      await flush(400);

      expect(document.activeElement).toBe(trigger);
    });

    it('keeps focus inside the tooltip when the focused Back button unmounts', async () => {
      await renderWithAct(<DefaultTour withOverlay defaultStep={1} />);
      await flush(20);

      await userEvent.click(screen.getByText('Back'));
      await flush(20);

      const dialog = screen.getByRole('dialog', { name: 'Step 1 Title' });
      expect(dialog).toContainElement(document.activeElement as HTMLElement);

      await userEvent.tab();
      expect(dialog).toContainElement(document.activeElement as HTMLElement);
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

    it('does not scroll again when the parent re-renders with a new inline scrollToHandler', async () => {
      const handler = jest.fn();
      const { rerender } = await renderWithAct(
        <DefaultTour scrollToHandler={(element) => handler(element)} />
      );

      await act(async () => {
        rerender(
          <>
            <DefaultTour scrollToHandler={(element) => handler(element)} />
          </>
        );
      });
      expect(handler).toHaveBeenCalledTimes(1);
    });

    it('does not scroll when withScrollIntoView is false', async () => {
      const scrollIntoView = jest.fn();
      const targetEl = document.getElementById('target-1')!;
      targetEl.scrollIntoView = scrollIntoView;

      await renderWithAct(<DefaultTour withScrollIntoView={false} />);
      expect(scrollIntoView).not.toHaveBeenCalled();
    });

    it('does not scroll when the target is fully visible in the viewport', async () => {
      const targetEl = document.getElementById('target-1')!;
      stubRect(targetEl, visibleRect);
      targetEl.scrollIntoView = jest.fn();

      await renderWithAct(<DefaultTour />);
      expect(targetEl.scrollIntoView).not.toHaveBeenCalled();
    });

    it('scrolls when the target is partially outside the viewport', async () => {
      const targetEl = document.getElementById('target-1')!;
      stubRect(targetEl, { ...visibleRect, top: window.innerHeight - 10 });
      targetEl.scrollIntoView = jest.fn();

      await renderWithAct(<DefaultTour />);
      expect(targetEl.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'center' });
    });

    it('scrolls when the target is clipped by a scrollable ancestor', async () => {
      const targetEl = document.getElementById('target-1')!;
      const scrollContainer = document.createElement('div');
      scrollContainer.style.overflow = 'auto';
      container.appendChild(scrollContainer);
      scrollContainer.appendChild(targetEl);
      stubRect(scrollContainer, { top: 300, left: 0, width: 500, height: 100 });
      stubRect(targetEl, visibleRect);
      targetEl.scrollIntoView = jest.fn();

      await renderWithAct(<DefaultTour />);
      expect(targetEl.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'center' });
    });

    it('calls scrollToHandler even when the target is fully visible', async () => {
      const scrollToHandler = jest.fn();
      const targetEl = document.getElementById('target-1')!;
      stubRect(targetEl, visibleRect);

      await renderWithAct(<DefaultTour scrollToHandler={scrollToHandler} />);
      expect(scrollToHandler).toHaveBeenCalledWith(targetEl);
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

  describe('beacon mode', () => {
    function BeaconTour(props: Partial<Tour.Props>) {
      return <DefaultTour mode="beacon" defaultStep={-1} {...props} />;
    }

    const getBeacons = () => screen.queryAllByRole('button', { name: /^Start tour/ });

    it('renders a beacon per step and no tooltip', async () => {
      await renderWithAct(<BeaconTour />);
      expect(getBeacons()).toHaveLength(3);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('resumes updates after release even when the target stops pointerup propagation', async () => {
      const target = document.getElementById('target-1')!;
      target.addEventListener('pointerup', (event) => event.stopPropagation());
      const rect = stubRect(target, { top: 100, left: 200, width: 50, height: 30 });
      await renderWithAct(<BeaconTour />);
      const beacon = getBeacons()[0];
      const beaconTransform = beacon.style.transform;

      fireEvent.pointerDown(target);
      fireEvent.pointerUp(target);
      rect.mockReturnValue(createRect({ top: 101, left: 200, width: 50, height: 30 }));
      await act(async () => {
        window.dispatchEvent(new Event('scroll'));
        await wait(50);
      });
      expect(beacon.style.transform).not.toBe(beaconTransform);
    });

    it('freezes the beacon while its target is pressed and syncs it after release', async () => {
      const target = document.getElementById('target-1')!;
      const rect = stubRect(target, { top: 100, left: 200, width: 50, height: 30 });
      await renderWithAct(<BeaconTour />);
      const beacon = getBeacons()[0];
      const beaconTop = beacon.style.transform;

      fireEvent.pointerDown(target);
      rect.mockReturnValue(createRect({ top: 101, left: 200, width: 50, height: 30 }));
      await act(async () => {
        window.dispatchEvent(new Event('scroll'));
        await wait(20);
      });
      expect(beacon.style.transform).toBe(beaconTop);

      fireEvent.pointerUp(target);
      await act(async () => {
        await wait(50);
      });
      expect(beacon.style.transform).not.toBe(beaconTop);
    });

    it('includes the step title in the beacon accessible name', async () => {
      await renderWithAct(<BeaconTour />);
      expect(screen.getByRole('button', { name: 'Start tour: Step 2 Title' })).toBeInTheDocument();
    });

    it('does not render a beacon for steps with withBeacon={false}', async () => {
      await renderWithAct(
        <Tour active withOverlay={false} mode="beacon" defaultStep={-1}>
          <Tour.Step target="#target-1" title="Step 1 Title">
            Step 1 Content
          </Tour.Step>
          <Tour.Step target="#target-2" title="Step 2 Title" withBeacon={false}>
            Step 2 Content
          </Tour.Step>
          <Tour.Step target="#target-3" title="Step 3 Title">
            Step 3 Content
          </Tour.Step>
        </Tour>
      );
      expect(getBeacons()).toHaveLength(2);
    });

    it('opens the clicked step and hides beacons', async () => {
      await renderWithAct(<BeaconTour />);
      await userEvent.click(getBeacons()[1]);

      expect(screen.getByText('Step 2 Title')).toBeInTheDocument();
      expect(getBeacons()).toHaveLength(0);
    });

    it('emits lifecycle callbacks only when a beacon step opens or closes', async () => {
      const onStepOpen = jest.fn();
      const onStepClose = jest.fn();
      const stepOpen = jest.fn();
      await renderWithAct(
        <Tour
          active
          withOverlay={false}
          mode="beacon"
          defaultStep={-1}
          onStepOpen={onStepOpen}
          onStepClose={onStepClose}
        >
          <Tour.Step target="#target-1" title="Step 1 Title">
            Step 1 Content
          </Tour.Step>
          <Tour.Step target="#target-2" title="Step 2 Title" onStepOpen={stepOpen}>
            Step 2 Content
          </Tour.Step>
        </Tour>
      );
      expect(onStepOpen).not.toHaveBeenCalled();
      expect(onStepClose).not.toHaveBeenCalled();

      await userEvent.click(getBeacons()[1]);
      expect(onStepOpen.mock.calls).toEqual([[1]]);
      expect(stepOpen).toHaveBeenCalledTimes(1);
      expect(onStepClose).not.toHaveBeenCalled();

      await userEvent.click(screen.getByText('Skip'));
      expect(onStepClose.mock.calls).toEqual([[1]]);
      expect(onStepOpen.mock.calls).toEqual([[1]]);
    });

    it('moves focus to the tooltip when a beacon is clicked', async () => {
      await renderWithAct(<BeaconTour />);
      await userEvent.click(getBeacons()[1]);
      await act(async () => {
        await wait(20);
      });

      expect(document.activeElement).toBe(screen.getByRole('dialog', { name: 'Step 2 Title' }));
    });

    it('returns focus to the beacon when the tooltip is closed and the tour stays active', async () => {
      await renderWithAct(<BeaconTour />);
      await userEvent.click(getBeacons()[1]);
      await userEvent.click(screen.getByText('Skip'));

      expect(getBeacons()).toHaveLength(3);
      expect(document.activeElement).toBe(getBeacons()[1]);
    });

    it('scrolls to the target again when the same beacon is reopened', async () => {
      const scrollToHandler = jest.fn();
      await renderWithAct(
        <BeaconTour scrollToHandler={scrollToHandler} transitionProps={{ duration: 20 }} />
      );

      await userEvent.click(getBeacons()[1]);
      await userEvent.click(screen.getByText('Skip'));
      await act(async () => {
        await wait(100);
      });
      await userEvent.click(getBeacons()[1]);

      expect(scrollToHandler).toHaveBeenCalledTimes(2);
      expect(scrollToHandler).toHaveBeenLastCalledWith(document.getElementById('target-2'));
    });

    it('does not animate the tooltip position when a beacon opens', async () => {
      await renderWithAct(<BeaconTour stepTransitionDuration={50} />);
      await act(async () => {
        await wait(20);
      });

      await userEvent.click(getBeacons()[1]);
      expect(screen.getByRole('dialog').style.transition).not.toContain('top');

      await userEvent.click(screen.getByText('Skip'));
      await userEvent.click(getBeacons()[2]);
      expect(screen.getByRole('dialog').style.transition).not.toContain('top');
    });

    it('ignores Escape while no beacon tooltip is open', async () => {
      const onClose = jest.fn();
      const onStepClose = jest.fn();
      await renderWithAct(<BeaconTour onClose={onClose} onStepClose={onStepClose} />);

      await userEvent.keyboard('{Escape}');
      expect(onClose).not.toHaveBeenCalled();
      expect(onStepClose).not.toHaveBeenCalled();
      expect(getBeacons()).toHaveLength(3);
    });

    it('closes the open beacon tooltip with Escape and calls onClose', async () => {
      const onClose = jest.fn();
      await renderWithAct(<BeaconTour onClose={onClose} />);
      await userEvent.click(getBeacons()[0]);
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      await userEvent.keyboard('{Escape}');
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('focus trap', () => {
    it('traps Tab inside the tooltip while the overlay blocks the page', async () => {
      await renderWithAct(<DefaultTour withOverlay />);
      await act(async () => {
        await wait(20);
      });

      const dialog = screen.getByRole('dialog');
      screen.getByRole('button', { name: 'Next' }).focus();
      await userEvent.tab();
      expect(dialog).toContainElement(document.activeElement as HTMLElement);

      screen.getByLabelText('Close').focus();
      await userEvent.tab({ shift: true });
      expect(dialog).toContainElement(document.activeElement as HTMLElement);
    });

    it.each([
      ['withOverlay={false}', { withOverlay: false }],
      ['withOverlayInteraction', { withOverlay: true, withOverlayInteraction: true }],
    ])('lets Tab leave the tooltip with %s', async (_, props) => {
      await renderWithAct(<DefaultTour {...props} />);
      await act(async () => {
        await wait(20);
      });

      screen.getByRole('button', { name: 'Next' }).focus();
      await userEvent.tab();
      expect(screen.getByRole('dialog')).not.toContainElement(
        document.activeElement as HTMLElement
      );
    });
  });

  describe('uncontrolled step', () => {
    function UncontrolledTour(props: Partial<Tour.Props>) {
      const [active, setActive] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setActive(true)}>
            Start tour
          </button>
          <DefaultTour active={active} onClose={() => setActive(false)} {...props} />
        </>
      );
    }

    it('restarts from the first step after the tour is closed', async () => {
      await renderWithAct(<UncontrolledTour />);
      await userEvent.click(screen.getByText('Start tour'));
      await userEvent.click(screen.getByText('Next'));
      expect(screen.getByText('Step 2 Title')).toBeInTheDocument();

      await userEvent.click(screen.getByText('Skip'));
      await act(async () => {
        await wait(300);
      });
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

      await userEvent.click(screen.getByText('Start tour'));
      expect(screen.getByText('Step 1 Title')).toBeInTheDocument();
    });

    it('restarts from defaultStep and reports the reset through onStepChange', async () => {
      const onStepChange = jest.fn();
      await renderWithAct(<UncontrolledTour defaultStep={1} onStepChange={onStepChange} />);
      await userEvent.click(screen.getByText('Start tour'));
      await userEvent.click(screen.getByText('Next'));
      expect(screen.getByText('Step 3 Title')).toBeInTheDocument();
      expect(onStepChange.mock.calls).toEqual([[2]]);

      await userEvent.click(screen.getByText('Close'));
      await act(async () => {
        await wait(300);
      });
      expect(onStepChange.mock.calls).toEqual([[2], [1]]);

      await userEvent.click(screen.getByText('Start tour'));
      expect(screen.getByText('Step 2 Title')).toBeInTheDocument();
    });

    it('keeps the current step when the step is controlled', async () => {
      function ControlledTour() {
        const [active, setActive] = useState(false);
        const [step, setStep] = useState(0);
        return (
          <>
            <button type="button" onClick={() => setActive(true)}>
              Start tour
            </button>
            <DefaultTour
              active={active}
              step={step}
              onStepChange={setStep}
              onClose={() => setActive(false)}
            />
          </>
        );
      }

      await renderWithAct(<ControlledTour />);
      await userEvent.click(screen.getByText('Start tour'));
      await userEvent.click(screen.getByText('Next'));
      await userEvent.click(screen.getByText('Skip'));
      await act(async () => {
        await wait(300);
      });

      await userEvent.click(screen.getByText('Start tour'));
      expect(screen.getByText('Step 2 Title')).toBeInTheDocument();
    });
  });
});
