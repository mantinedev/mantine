import { Children, cloneElement } from 'react';
import { factory, Factory, useProps, useResolvedStylesApi } from '../../core';
import type { StepperContextValue } from './Stepper.context';
import { StepperCompleted, StepperCompletedProps } from './StepperCompleted/StepperCompleted';
import {
  StepperContent,
  type StepperContentProps,
  type StepperContentStylesNames,
} from './StepperContent/StepperContent';
import {
  StepperRoot,
  varsResolver,
  type StepFragmentComponent,
  type StepperRootCssVariables,
  type StepperRootProps,
  type StepperRootStylesNames,
} from './StepperRoot/StepperRoot';
import { StepperStep, StepperStepProps } from './StepperStep/StepperStep';
import {
  StepperSteps,
  type StepperStepsProps,
  type StepperStepsStylesNames,
} from './StepperSteps/StepperSteps';
import classes from './Stepper.module.css';

export type { StepFragmentComponent };

export type StepperStylesNames = StepperRootStylesNames;
export type StepperCssVariables = StepperRootCssVariables;

export interface StepperProps extends StepperRootProps {
  /** `Stepper.Step` components */
  children: React.ReactNode;
}

export type StepperFactory = Factory<{
  props: StepperProps;
  ref: HTMLDivElement;
  stylesNames: StepperStylesNames;
  vars: StepperCssVariables;
  staticComponents: {
    Step: typeof StepperStep;
    Completed: typeof StepperCompleted;
    Root: typeof StepperRoot;
    Steps: typeof StepperSteps;
    Content: typeof StepperContent;
  };
}>;

const defaultProps = {
  orientation: 'horizontal',
  iconPosition: 'left',
  allowNextStepsSelect: true,
  wrap: true,
} satisfies Partial<StepperProps>;

export const Stepper = factory<StepperFactory>((_props) => {
  const props = useProps('Stepper', defaultProps, _props);
  const { children, classNames, styles, vars, stepsCount, ...others } = props;

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<StepperFactory>({
    classNames,
    styles,
    props,
  });

  const convertedChildren = Children.toArray(children) as React.ReactElement[];
  const _children = convertedChildren.filter(
    (child) => child.type !== StepperCompleted
  ) as React.ReactElement<StepperStepProps>[];
  const completedStep = convertedChildren.find((item) => item.type === StepperCompleted) as
    | React.ReactElement<StepperCompletedProps>
    | undefined;

  return (
    <StepperRoot
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      vars={vars}
      {...others}
      stepsCount={stepsCount ?? _children.length}
    >
      <StepperSteps>{_children}</StepperSteps>
      {_children.map((child, index) => (
        <StepperContent step={index} key={index}>
          {child.props.children}
        </StepperContent>
      ))}
      {completedStep && cloneElement(completedStep, { step: _children.length })}
    </StepperRoot>
  );
});

Stepper.classes = classes;
Stepper.varsResolver = varsResolver;
Stepper.displayName = '@mantine/core/Stepper';
Stepper.Completed = StepperCompleted;
Stepper.Step = StepperStep;
Stepper.Root = StepperRoot;
Stepper.Steps = StepperSteps;
Stepper.Content = StepperContent;

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

  export namespace Root {
    export type Props = StepperRootProps;
    export type StylesNames = StepperRootStylesNames;
    export type CssVariables = StepperRootCssVariables;
  }

  export namespace Steps {
    export type Props = StepperStepsProps;
    export type StylesNames = StepperStepsStylesNames;
  }

  export namespace Content {
    export type Props = StepperContentProps;
    export type StylesNames = StepperContentStylesNames;
  }
}
