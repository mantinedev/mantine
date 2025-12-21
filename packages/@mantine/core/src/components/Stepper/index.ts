import type {
  StepFragmentComponent,
  StepperCssVariables,
  StepperFactory,
  StepperProps,
  StepperStylesNames,
} from './Stepper';
import type { StepperContextValue } from './Stepper.context';
import type { StepperCompletedProps } from './StepperCompleted/StepperCompleted';
import type { StepperStepProps } from './StepperStep/StepperStep';

export { Stepper } from './Stepper';
export { StepperStep } from './StepperStep/StepperStep';
export { StepperCompleted } from './StepperCompleted/StepperCompleted';
export { useStepperContext } from './Stepper.context';

export type {
  StepperProps,
  StepperStylesNames,
  StepperCssVariables,
  StepperFactory,
  StepFragmentComponent,
  StepperStepProps,
  StepperCompletedProps,
  StepperContextValue,
};

export namespace Stepper {
  export type Props = StepperProps;
  export type StylesNames = StepperStylesNames;
  export type CssVariables = StepperCssVariables;
  export type Factory = StepperFactory;
  export type Step = StepFragmentComponent;
  export type ContextValue = StepperContextValue;

  export namespace Step {
    export type Props = StepperStepProps;
  }

  export namespace Completed {
    export type Props = StepperCompletedProps;
  }
}
