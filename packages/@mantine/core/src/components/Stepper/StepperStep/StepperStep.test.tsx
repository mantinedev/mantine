import { createContextContainer, render, screen, tests } from '@mantine-tests/core';
import { Stepper } from '../Stepper';
import { StepperStep, StepperStepProps, StepperStepStylesNames } from './StepperStep';

const TestContainer = createContextContainer(StepperStep, Stepper, { active: 0 });

const defaultProps: StepperStepProps = {
  label: 'test-label',
  description: 'test-description',
  step: 1,
};

describe('@mantine/core/StepperStep', () => {
  tests.itSupportsSystemProps<StepperStepProps, StepperStepStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/StepperStep',
    stylesApiSelectors: [
      'step',
      'stepBody',
      'stepDescription',
      'stepIcon',
      'stepIconContent',
      'stepLabel',
      'stepWrapper',
    ],
    compound: true,
    providerStylesApi: false,
    stylesApiName: 'Stepper',
    selector: '.mantine-Stepper-step',
  });

  it('renders icon when withIcon is true', () => {
    const { rerender, container } = render(<TestContainer withIcon={false} />);
    expect(container.querySelectorAll('.mantine-Stepper-stepIcon')).toHaveLength(0);

    rerender(<TestContainer withIcon />);
    expect(container.querySelectorAll('.mantine-Stepper-stepIcon')).toHaveLength(1);
  });

  it('renders step body if Step has label or description', () => {
    const { rerender, container } = render(<TestContainer />);
    expect(container.querySelectorAll('.mantine-Stepper-stepBody')).toHaveLength(0);

    rerender(<TestContainer label="test-label" />);
    expect(container.querySelectorAll('.mantine-Stepper-stepBody')).toHaveLength(1);
    expect(screen.getByText('test-label')).toBeInTheDocument();

    rerender(<TestContainer description="test-description" />);
    expect(container.querySelectorAll('.mantine-Stepper-stepBody')).toHaveLength(1);
    expect(screen.getByText('test-description')).toBeInTheDocument();
  });
});
