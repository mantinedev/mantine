import { render, screen, userEvent } from '@mantine-tests/core';
import { TourProvider, type TourContextValue } from '../Tour.context';
import { TourNavigation, TourNavigationProps } from './TourNavigation';

function createMockContext(overrides: Partial<TourContextValue> = {}): TourContextValue {
  return {
    getStyles: () => ({}) as any,
    step: 0,
    setStep: jest.fn(),
    stepsCount: 3,
    close: jest.fn(),
    mode: 'guided',
    withOverlay: true,
    withOverlayInteraction: false,
    withCloseButton: true,
    withKeyboardNavigation: true,
    withScrollIntoView: true,
    scrollToHandler: undefined,
    spotlightPadding: 8,
    spotlightRadius: 4,
    closeOnEscape: true,
    closeOnOverlayClick: false,
    labels: {
      skip: 'Skip',
      back: 'Back',
      next: 'Next',
      close: 'Close',
      stepCounter: (current: number, total: number) => `${current} of ${total}`,
      beacon: 'Start tour',
    },
    titleId: 'tour-title',
    bodyId: 'tour-body',
    titleMounted: false,
    bodyMounted: false,
    setTitleMounted: jest.fn(),
    setBodyMounted: jest.fn(),
    setTargetElement: jest.fn(),
    ...overrides,
  };
}

function renderNavigation(
  props: TourNavigationProps = {},
  contextOverrides: Partial<TourContextValue> = {}
) {
  const ctx = createMockContext(contextOverrides);
  return {
    ctx,
    ...render(
      <TourProvider value={ctx}>
        <TourNavigation {...props} />
      </TourProvider>
    ),
  };
}

const defaultProps: TourNavigationProps = {};

describe('@mantine/core/TourNavigation', () => {
  it('has correct displayName', () => {
    expect(TourNavigation.displayName).toBe('@mantine/core/TourNavigation');
  });

  it('renders skip, next buttons and step counter on first step', () => {
    renderNavigation(defaultProps, { step: 0 });
    expect(screen.getByText('Skip')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('1 of 3')).toBeInTheDocument();
    expect(screen.queryByText('Back')).not.toBeInTheDocument();
  });

  it('renders back button on non-first step', () => {
    renderNavigation(defaultProps, { step: 1 });
    expect(screen.getByText('Back')).toBeInTheDocument();
  });

  it('renders close label on last step', () => {
    renderNavigation(defaultProps, { step: 2 });
    expect(screen.queryByText('Next')).not.toBeInTheDocument();
    expect(screen.getAllByText('Close').length).toBeGreaterThanOrEqual(1);
  });

  it('calls setStep when next is clicked', async () => {
    const { ctx } = renderNavigation(defaultProps, { step: 0 });
    await userEvent.click(screen.getByText('Next'));
    expect(ctx.setStep).toHaveBeenCalledWith(1);
  });

  it('calls setStep when back is clicked', async () => {
    const { ctx } = renderNavigation(defaultProps, { step: 1 });
    await userEvent.click(screen.getByText('Back'));
    expect(ctx.setStep).toHaveBeenCalledWith(0);
  });

  it('calls close when skip is clicked', async () => {
    const { ctx } = renderNavigation(defaultProps, { step: 0 });
    await userEvent.click(screen.getByText('Skip'));
    expect(ctx.close).toHaveBeenCalled();
  });

  it('calls close on last step when close button is clicked', async () => {
    const { ctx } = renderNavigation(defaultProps, { step: 2 });
    const closeButtons = screen.getAllByText('Close');
    await userEvent.click(closeButtons[closeButtons.length - 1]);
    expect(ctx.close).toHaveBeenCalled();
  });
});
