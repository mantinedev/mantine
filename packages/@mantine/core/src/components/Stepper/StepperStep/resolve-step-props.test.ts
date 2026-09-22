import type { StepperContextValue } from '../Stepper.context';
import { getStepState, resolveStepProps, type ResolveStepPropsInput } from './resolve-step-props';

function getContext(overrides?: Partial<StepperContextValue>): StepperContextValue {
  return {
    getStyles: (() => ({})) as any,
    orientation: 'horizontal',
    iconPosition: 'left',
    labelPosition: 'right',
    active: 1,
    icon: undefined,
    completedIcon: undefined,
    progressIcon: undefined,
    color: undefined,
    allowNextStepsSelect: true,
    stepsSelectable: true,
    onStepSelect: () => {},
    ...overrides,
  };
}

function getInput(overrides?: Partial<ResolveStepPropsInput>): ResolveStepPropsInput {
  return {
    step: 1,
    state: undefined,
    allowStepClick: undefined,
    allowStepSelect: undefined,
    color: undefined,
    icon: undefined,
    completedIcon: undefined,
    progressIcon: undefined,
    iconPosition: undefined,
    orientation: undefined,
    ...overrides,
  };
}

describe('@mantine/core/Stepper/get-step-state', () => {
  it('returns stepInactive when the step index is not known', () => {
    expect(getStepState(undefined, 2)).toBe('stepInactive');
  });

  it('returns the state based on the active step', () => {
    expect(getStepState(2, 2)).toBe('stepProgress');
    expect(getStepState(1, 2)).toBe('stepCompleted');
    expect(getStepState(3, 2)).toBe('stepInactive');
  });
});

describe('@mantine/core/Stepper/resolve-step-props', () => {
  it('derives state from the active step of the context', () => {
    expect(resolveStepProps(getInput({ step: 0 }), getContext()).state).toBe('stepCompleted');
    expect(resolveStepProps(getInput({ step: 1 }), getContext()).state).toBe('stepProgress');
    expect(resolveStepProps(getInput({ step: 2 }), getContext()).state).toBe('stepInactive');
  });

  it('gives a state declared on the step precedence over the derived state', () => {
    expect(resolveStepProps(getInput({ state: 'stepCompleted' }), getContext()).state).toBe(
      'stepCompleted'
    );
  });

  it('falls back to the context for color, iconPosition and orientation', () => {
    const resolved = resolveStepProps(
      getInput(),
      getContext({ color: 'red', iconPosition: 'right', orientation: 'vertical' })
    );

    expect(resolved.color).toBe('red');
    expect(resolved.iconPosition).toBe('right');
    expect(resolved.orientation).toBe('vertical');
  });

  it('gives values declared on the step precedence over the context', () => {
    const resolved = resolveStepProps(
      getInput({ color: 'blue', iconPosition: 'left', orientation: 'horizontal' }),
      getContext({ color: 'red', iconPosition: 'right', orientation: 'vertical' })
    );

    expect(resolved.color).toBe('blue');
    expect(resolved.iconPosition).toBe('left');
    expect(resolved.orientation).toBe('horizontal');
  });

  it('defaults the icon to the 1-based step index', () => {
    expect(resolveStepProps(getInput({ step: 2 }), getContext()).icon).toBe(3);
    expect(resolveStepProps(getInput({ step: undefined }), getContext()).icon).toBeUndefined();
  });

  it('resolves the icon in order: step, context, step index', () => {
    expect(resolveStepProps(getInput({ icon: 'own' }), getContext({ icon: 'ctx' })).icon).toBe(
      'own'
    );
    expect(resolveStepProps(getInput(), getContext({ icon: 'ctx' })).icon).toBe('ctx');
  });

  it('uses the progress icon for the active step and falls back to the step icon', () => {
    expect(resolveStepProps(getInput({ progressIcon: 'p' }), getContext()).icon).toBe('p');
    expect(resolveStepProps(getInput(), getContext({ progressIcon: 'p' })).icon).toBe('p');
    expect(resolveStepProps(getInput({ step: 2 }), getContext({ progressIcon: 'p' })).icon).toBe(3);
    expect(resolveStepProps(getInput(), getContext()).icon).toBe(2);
  });

  it('resolves the completed icon from the step and the context', () => {
    expect(
      resolveStepProps(getInput({ completedIcon: 'own' }), getContext({ completedIcon: 'ctx' }))
        .completedIcon
    ).toBe('own');
    expect(resolveStepProps(getInput(), getContext({ completedIcon: 'ctx' })).completedIcon).toBe(
      'ctx'
    );
  });

  describe('allowStepClick', () => {
    it('is false when the step index is not known', () => {
      expect(resolveStepProps(getInput({ step: undefined }), getContext()).allowStepClick).toBe(
        false
      );
    });

    it('is false when the stepper cannot change its state', () => {
      expect(
        resolveStepProps(getInput(), getContext({ stepsSelectable: false })).allowStepClick
      ).toBe(false);
    });

    it('follows allowNextStepsSelect for steps that have not been passed', () => {
      const ctx = getContext({ allowNextStepsSelect: false });
      expect(resolveStepProps(getInput({ step: 0 }), ctx).allowStepClick).toBe(true);
      expect(resolveStepProps(getInput({ step: 2 }), ctx).allowStepClick).toBe(false);
    });

    it('gives allowStepSelect precedence over allowNextStepsSelect', () => {
      const ctx = getContext({ allowNextStepsSelect: false });
      expect(
        resolveStepProps(getInput({ step: 2, allowStepSelect: true }), ctx).allowStepClick
      ).toBe(true);
      expect(
        resolveStepProps(getInput({ step: 0, allowStepSelect: false }), ctx).allowStepClick
      ).toBe(false);
    });

    it('treats allowStepClick as a veto that cannot enable a step that is not selectable', () => {
      expect(
        resolveStepProps(getInput({ allowStepClick: false }), getContext()).allowStepClick
      ).toBe(false);
      expect(
        resolveStepProps(getInput({ allowStepClick: true }), getContext({ stepsSelectable: false }))
          .allowStepClick
      ).toBe(false);
    });
  });
});
