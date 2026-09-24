import { act } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { Stepper, StepperProps } from './Stepper';
import { useStepper, type StepperController } from './use-stepper/use-stepper';

const defaultProps: StepperProps = {
  active: 1,
  children: [
    <Stepper.Step label="0" key="0" description="0">
      test-step-content-0
    </Stepper.Step>,
    <Stepper.Step label="1" key="1" description="1">
      test-step-content-1
    </Stepper.Step>,
    <Stepper.Step label="2" key="2" description="2">
      test-step-content-2
    </Stepper.Step>,
    <Stepper.Step label="3" key="3" description="3">
      test-step-content-3
    </Stepper.Step>,
    <Stepper.Completed key="4">test-step-completed</Stepper.Completed>,
  ],
};

function ControllerTest({
  stepsCount = 3,
  withCompleted = true,
  onController,
}: {
  stepsCount?: number;
  withCompleted?: boolean;
  onController: (controller: StepperController) => void;
}) {
  const controller = useStepper();
  onController(controller);

  return (
    <Stepper controller={controller}>
      {Array.from({ length: stepsCount }, (_, index) => (
        <Stepper.Step label={index} key={index}>
          {`test-step-content-${index}`}
        </Stepper.Step>
      ))}
      {withCompleted ? <Stepper.Completed>test-step-completed</Stepper.Completed> : null}
    </Stepper>
  );
}

describe('@mantine/core/Stepper/controller', () => {
  it('takes the active step from the controller and ignores active, defaultActive and onActiveChange', () => {
    const onActiveChange = jest.fn();
    let controller: StepperController = null as any;

    function Test() {
      controller = useStepper({ defaultActive: 2 });
      return (
        <Stepper
          {...defaultProps}
          controller={controller}
          active={0}
          defaultActive={0}
          onActiveChange={onActiveChange}
        />
      );
    }

    render(<Test />);
    expect(screen.getByText('test-step-content-2')).toBeInTheDocument();

    act(() => controller.setActive(3));
    expect(screen.getByText('test-step-content-3')).toBeInTheDocument();
    expect(onActiveChange).not.toHaveBeenCalled();
  });

  it('registers the number of steps rendered by Stepper on the controller', () => {
    let controller: StepperController = null as any;
    render(<ControllerTest onController={(value) => (controller = value)} />);
    expect(controller.getStepCount()).toBe(3);
  });

  it('updates the registered steps when the number of steps changes', () => {
    let controller: StepperController = null as any;
    const { rerender } = render(
      <ControllerTest onController={(value) => (controller = value)} stepsCount={3} />
    );
    expect(controller.getStepCount()).toBe(3);

    rerender(<ControllerTest onController={(value) => (controller = value)} stepsCount={5} />);
    expect(controller.getStepCount()).toBe(5);
  });

  it('clamps next at Stepper.Completed when it is rendered', () => {
    let controller: StepperController = null as any;
    render(<ControllerTest onController={(value) => (controller = value)} />);

    act(() => controller.complete());
    expect(screen.getByText('test-step-completed')).toBeInTheDocument();

    act(() => controller.next());
    expect(controller.active).toBe(3);
  });

  it('clamps next at the last step when Stepper.Completed is not rendered', () => {
    let controller: StepperController = null as any;
    render(<ControllerTest onController={(value) => (controller = value)} withCompleted={false} />);

    act(() => controller.next());
    act(() => controller.next());
    act(() => controller.next());
    expect(controller.active).toBe(2);
    expect(screen.getByText('test-step-content-2')).toBeInTheDocument();
  });

  it('allows selecting steps when a controller is set without onStepClick', async () => {
    let controller: StepperController = null as any;
    render(<ControllerTest onController={(value) => (controller = value)} />);

    await userEvent.click(screen.getAllByRole('button')[2]);
    expect(controller.active).toBe(2);
    expect(screen.getByText('test-step-content-2')).toBeInTheDocument();
  });
});
