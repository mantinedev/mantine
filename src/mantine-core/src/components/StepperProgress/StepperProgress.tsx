import { useMantineDefaultProps } from '@mantine/styles';
import React, { Children, forwardRef, useEffect, useState } from 'react';
import { filterChildrenByType, findChildByType } from '../../utils';
import { Box } from '../Box';
import { Button, ButtonProps } from '../Button';
import { Group, GroupProps } from '../Group';
import { Progress } from '../Progress';
import { Step } from '../Stepper/Step/Step';
import { StepCompleted } from '../Stepper/StepCompleted/StepCompleted';
import { StepperProps } from '../Stepper/Stepper';
import useStyles from './StepperProgress.styles';

export type StepperProgressProps = Omit<StepperProps, 'active'> & {
  /* Active is optional when component is uncontrolled */
  active?: number;

  /* Index of active step content */
  activeContent?: number;

  /* Group button to control state */
  control?: React.ReactNode;

  /* Group button properties when uncontrolled */
  groupButtonProps?: {
    group?: GroupProps;
    prev?: ButtonProps<any>;
    next?: ButtonProps<any>;
    finish?: ButtonProps<any>;
  };

  /* Previous button label when uncontrolled */
  prevBtnLabel?: string;

  /* Next button label when uncontrolled */
  nextBtnLabel?: string;

  /* Finish button label when uncontrolled */
  finishBtnLabel?: string;

  /* Finish step icon */
  finishStepIcon?: React.ReactNode;

  /* Action to finish button when clicked */
  onFinish?: () => void;
};

type StepperComponent = ((props: StepperProgressProps) => React.ReactElement) & {
  displayName: string;
  Step: typeof Step;
  Completed: typeof StepCompleted;
};

const defaultProps: Partial<StepperProgressProps> = {
  contentPadding: 'md',
  size: 'md',
  radius: 'xl',
  orientation: 'horizontal',
  iconPosition: 'left',
};

export const StepperProgress: StepperComponent = forwardRef<HTMLDivElement, StepperProgressProps>(
  (props: StepperProgressProps, ref) => {
    const {
      active = 0,
      activeContent = 0,
      groupButtonProps,
      control,
      prevBtnLabel,
      nextBtnLabel,
      finishBtnLabel,
      finishStepIcon,
      onFinish,
      className,
      children,
      onStepClick,
      completedIcon,
      progressIcon,
      color,
      iconSize,
      contentPadding,
      size,
      radius,
      orientation,
      breakpoint,
      iconPosition,
      classNames,
      styles,
      ...others
    } = useMantineDefaultProps('Stepper', defaultProps, props);

    const { classes, cx } = useStyles(
      { contentPadding, color, orientation, iconPosition, size, iconSize, breakpoint },
      { classNames, styles, name: 'Stepper' }
    );
    const filteredChildren = filterChildrenByType(children, Step);
    const completedStep = findChildByType(children, StepCompleted);

    /* Index of active step */
    const [activeStep, setActiveStep] = useState(0);

    /* Index of active step content to be shown */
    const [activeStepContent, setActiveStepContent] = useState(0);

    /* Group Button props */
    const groupProps = groupButtonProps?.group || {};
    const prevBtnProps = groupButtonProps?.prev || {};
    const nextBtnProps = groupButtonProps?.next || {};
    const finishBtnProps = groupButtonProps?.finish || {};

    const validIndex = Math.min(activeStep, filteredChildren.length - 1);
    const activeStepChildren = Children.toArray(filteredChildren?.[validIndex]?.props?.children);

    const finished = activeStep === filteredChildren.length;
    const prevDisabled = activeStep === 0 && activeStepContent === 0;
    const nextDisabled = activeStep === filteredChildren.length + 1;

    useEffect(() => {
      /* [Controlled] Update step state */
      setActiveStep(Math.min(active, filteredChildren.length));
    }, [active]);

    useEffect(() => {
      /* [Controlled] Update step content state */
      setActiveStepContent(Math.min(activeContent, activeStepChildren.length - 1));
    }, [activeContent]);

    /* [Uncontrolled] Handle previous step/step content */
    const handlePrev = () => {
      if (finished || nextDisabled) {
        const { length } = filteredChildren;
        setActiveStep(finished ? length - 1 : length);
        setActiveStepContent(finished ? activeStepChildren.length - 1 : activeStepContent);
        return;
      }

      const max = Math.max(-1, activeStepContent - 1);
      if (max === -1) {
        setActiveStep(Math.max(0, activeStep - 1));
        setActiveStepContent(activeStepChildren.length - 1);
      } else {
        setActiveStepContent(max);
      }
    };

    /* [Uncontrolled] Handle next step/step content */
    const handleNext = () => {
      if (finished) {
        setActiveStep(filteredChildren.length + 1);
        return;
      }

      const min = Math.min(activeStepChildren.length, activeStepContent + 1);
      if (min === activeStepChildren.length) {
        setActiveStep(activeStep + 1);
        setActiveStepContent(0);
      } else {
        setActiveStepContent(min);
      }
    };

    /* [Controlled/Uncontrolled] Handle step click when allowed */
    const handleStepClick = (index: number) => {
      if (!onStepClick) {
        setActiveStep(index);
      } else {
        onStepClick(index);
        active !== activeStep && setActiveStep(active);
      }

      setActiveStepContent(0);
    };

    const items = filteredChildren.reduce<React.ReactNode[]>((acc, item, index, array) => {
      const stepChildren = Children.toArray(filteredChildren[index]?.props.children);

      const shouldAllowSelect =
        typeof item.props.allowStepSelect === 'boolean'
          ? item.props.allowStepSelect
          : typeof onStepClick === 'function';

      const state =
        activeStep > index || nextDisabled
          ? 'stepCompleted'
          : activeStep === index
          ? 'stepProgress'
          : 'stepInactive';

      acc.push(
        <Step
          {...item.props}
          __staticSelector="StepperProgress"
          icon={item.props.icon || index + 1}
          key={index}
          state={state}
          onClick={() => shouldAllowSelect && handleStepClick(index)}
          allowStepClick={shouldAllowSelect || typeof onStepClick === 'function'}
          completedIcon={item.props.completedIcon || completedIcon}
          progressIcon={item.props.progressIcon || progressIcon}
          color={item.props.color || color}
          iconSize={iconSize}
          size={size}
          radius={radius}
          classNames={classNames}
          styles={styles}
          iconPosition={item.props.iconPosition || iconPosition}
        />
      );

      /* [core] Add progress bar in last index, before stepper is completed */
      if (index < array.length) {
        const value =
          state === 'stepInactive'
            ? 0
            : state === 'stepCompleted'
            ? 100
            : (100 / stepChildren.length) * activeStepContent;

        acc.push(
          <Progress
            key={`separator-${index}`}
            aria-label={`separator-${index}`}
            radius={radius}
            value={value}
            className={classes.separator}
            color={color}
          />
        );
      }

      return acc;
    }, []);

    /* [core] Add step on last index to end stepper */
    items.push(
      <Step
        __staticSelector="StepperProgress"
        icon={finishStepIcon || filteredChildren.length + 1}
        key={filteredChildren.length}
        state={
          activeStep > filteredChildren.length
            ? 'stepCompleted'
            : activeStep === filteredChildren.length
            ? 'stepProgress'
            : 'stepInactive'
        }
        allowStepClick={typeof onStepClick === 'function'}
        allowStepSelect={typeof onStepClick === 'function'}
        onClick={() => onStepClick(filteredChildren.length)}
        completedIcon={completedIcon}
        progressIcon={progressIcon}
        color={color}
        iconSize={iconSize}
        size={size}
        radius={radius}
        classNames={classNames}
        styles={styles}
        iconPosition={iconPosition}
      />
    );

    const stepContent = filteredChildren[validIndex]?.props?.children;
    const completedContent = completedStep?.props?.children;

    const content = nextDisabled || finished ? completedContent : stepContent?.[activeStepContent];

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        <div className={classes.steps}>{items}</div>
        {content && <div className={classes.content}>{content}</div>}

        {/* [Controlled/Uncontrolled] Group button according prop control  */}
        {control ?? (
          <Group {...groupProps} pt="md">
            <Button {...prevBtnProps} onClick={handlePrev} disabled={prevDisabled}>
              {prevBtnProps?.children || prevBtnLabel || 'Previous'}
            </Button>
            {!finished ? (
              <Button {...nextBtnProps} onClick={handleNext} disabled={nextDisabled}>
                {nextBtnProps?.children || nextBtnLabel || 'Next'}
              </Button>
            ) : (
              <Button
                {...finishBtnProps}
                color={finishBtnProps?.color || 'teal'}
                onClick={() => {
                  !!onFinish && onFinish();
                  handleNext();
                }}
              >
                {finishBtnProps?.children || finishBtnLabel || 'Finish'}
              </Button>
            )}
          </Group>
        )}
      </Box>
    );
  }
) as any;

StepperProgress.Step = Step;
StepperProgress.Completed = StepCompleted;
StepperProgress.displayName = '@mantine/core/StepperProgress';
