import { useIsomorphicEffect } from '@mantine/hooks';
import { Children, cloneElement } from 'react';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { useStepperContext } from '../Stepper.context';
import { StepperCompleted } from '../StepperCompleted/StepperCompleted';
import type { StepperStepProps } from '../StepperStep/StepperStep';
import classes from '../Stepper.module.css';

export type StepperStepsStylesNames = 'steps' | 'separator';

export interface StepperStepsProps
  extends BoxProps, CompoundStylesApiProps<StepperStepsFactory>, ElementProps<'div'> {
  /** `Stepper.Step` components */
  children: React.ReactNode;
}

export type StepperStepsFactory = Factory<{
  props: StepperStepsProps;
  ref: HTMLDivElement;
  stylesNames: StepperStepsStylesNames;
  compound: true;
}>;

export const StepperSteps = factory<StepperStepsFactory>((_props) => {
  const props = useProps('StepperSteps', null, _props);
  const { children, className, style, classNames, styles, mod, ...others } = props;

  const ctx = useStepperContext();
  const stylesApiProps = { classNames, styles, props };

  const convertedChildren = Children.toArray(children) as React.ReactElement[];
  const _children = convertedChildren.filter(
    (child) => child.type !== StepperCompleted
  ) as React.ReactElement<StepperStepProps>[];

  useIsomorphicEffect(() => {
    ctx.setStepsCount(_children.length);
  }, [_children.length]);

  const items = _children.reduce<React.ReactElement<StepperStepProps>[]>(
    (acc, item: React.ReactElement<StepperStepProps>, index) => {
      const state =
        ctx.active === index
          ? 'stepProgress'
          : ctx.active > index
            ? 'stepCompleted'
            : 'stepInactive';

      const shouldAllowSelect = () => {
        if (typeof ctx.onStepClick !== 'function') {
          return false;
        }

        if (ctx.active === index) {
          return false;
        }

        if (typeof item.props.allowStepSelect === 'boolean') {
          return item.props.allowStepSelect;
        }

        return state === 'stepCompleted' || ctx.allowNextStepsSelect;
      };

      const isStepSelectionEnabled = shouldAllowSelect();

      acc.push(
        cloneElement(item, {
          icon: item.props.icon || ctx.icon || index + 1,
          key: index,
          step: index,
          state,
          onClick: () => isStepSelectionEnabled && ctx.onStepClick?.(index),
          allowStepClick: isStepSelectionEnabled,
          completedIcon: item.props.completedIcon || ctx.completedIcon,
          progressIcon: item.props.progressIcon || ctx.progressIcon,
          color: item.props.color || ctx.color,
          iconSize: ctx.iconSize,
          iconPosition: item.props.iconPosition || ctx.iconPosition,
          orientation: ctx.orientation,
        })
      );

      if (ctx.orientation === 'horizontal' && index !== _children.length - 1) {
        acc.push(
          <div
            {...ctx.getStyles('separator', stylesApiProps)}
            data-active={index < ctx.active || undefined}
            data-orientation={ctx.orientation}
            key={`separator-${index}`}
          />
        );
      }

      return acc;
    },
    []
  );

  return (
    <Box
      {...ctx.getStyles('steps', { className, style, ...stylesApiProps })}
      mod={[
        {
          orientation: ctx.orientation,
          'icon-position': ctx.iconPosition,
          wrap: ctx.wrap && ctx.orientation !== 'vertical',
        },
        mod,
      ]}
      {...others}
    >
      {items}
    </Box>
  );
});

StepperSteps.classes = classes;
StepperSteps.displayName = '@mantine/core/StepperSteps';
