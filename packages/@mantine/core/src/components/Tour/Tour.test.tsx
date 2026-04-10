import { render, screen, userEvent } from '@mantine-tests/core';
import { Tour } from './Tour';

function DefaultTour(props: Partial<Tour.Props>) {
  return (
    <Tour active {...props}>
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

  it('renders nothing when active is false', () => {
    render(<DefaultTour active={false} />);
    expect(screen.queryByText('Step 1 Title')).not.toBeInTheDocument();
  });

  it('renders tooltip when active is true', () => {
    render(<DefaultTour />);
    expect(screen.getByText('Step 1 Title')).toBeInTheDocument();
  });

  it('displays current step title and content', () => {
    render(<DefaultTour />);
    expect(screen.getByText('Step 1 Title')).toBeInTheDocument();
    expect(screen.getByText('Step 1 Content')).toBeInTheDocument();
  });

  it('displays correct step when step prop changes', () => {
    const { rerender } = render(<DefaultTour step={0} />);
    expect(screen.getByText('Step 1 Title')).toBeInTheDocument();

    rerender(<DefaultTour step={1} />);
    expect(screen.getByText('Step 2 Title')).toBeInTheDocument();
  });

  it('calls onStepChange when next button is clicked', async () => {
    const onStepChange = jest.fn();
    render(<DefaultTour step={0} onStepChange={onStepChange} />);

    await userEvent.click(screen.getByText('Next'));
    expect(onStepChange).toHaveBeenCalledWith(1);
  });

  it('calls onStepChange when back button is clicked', async () => {
    const onStepChange = jest.fn();
    render(<DefaultTour step={1} onStepChange={onStepChange} />);

    await userEvent.click(screen.getByText('Back'));
    expect(onStepChange).toHaveBeenCalledWith(0);
  });

  it('does not render back button on first step', () => {
    render(<DefaultTour step={0} />);
    expect(screen.queryByText('Back')).not.toBeInTheDocument();
  });

  it('renders close label instead of next on last step', () => {
    render(<DefaultTour step={2} />);
    expect(screen.queryByText('Next')).not.toBeInTheDocument();
    expect(screen.getAllByText('Close').length).toBeGreaterThanOrEqual(1);
  });

  it('calls onClose when skip button is clicked', async () => {
    const onClose = jest.fn();
    render(<DefaultTour onClose={onClose} />);

    await userEvent.click(screen.getByText('Skip'));
    expect(onClose).toHaveBeenCalled();
  });

  it('hides close button when withCloseButton is false', () => {
    render(<DefaultTour withCloseButton={false} />);
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument();
  });

  it('displays step counter', () => {
    render(<DefaultTour step={1} />);
    expect(screen.getByText('2 of 3')).toBeInTheDocument();
  });

  it('uses custom labels', () => {
    render(
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

  it('renders centered tooltip when step has no target', () => {
    render(
      <Tour active step={0}>
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
});
