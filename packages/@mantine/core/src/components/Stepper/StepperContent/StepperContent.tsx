import { Activity } from 'react';
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
import classes from '../Stepper.module.css';

export type StepperContentStylesNames = 'content';

export interface StepperContentProps
  extends BoxProps, CompoundStylesApiProps<StepperContentFactory>, ElementProps<'div'> {
  /** Content displayed when the associated step is active */
  children?: React.ReactNode;

  /** 0-based index of the associated `Stepper.Step` component */
  step: number;

  /** If set, the content is kept mounted, even if `keepMounted` is not set on the parent `Stepper.Root` component */
  keepMounted?: boolean;
}

export type StepperContentFactory = Factory<{
  props: StepperContentProps;
  ref: HTMLDivElement;
  stylesNames: StepperContentStylesNames;
  compound: true;
}>;

export const StepperContent = factory<StepperContentFactory>((_props) => {
  const props = useProps('StepperContent', null, _props);
  const { children, className, style, classNames, styles, mod, step, keepMounted, ...others } =
    props;

  const ctx = useStepperContext();
  const active = ctx.active === step;
  const shouldKeepMounted = ctx.keepMounted || keepMounted;

  if (!shouldKeepMounted && (!active || children == null)) {
    return null;
  }

  const content = (
    <Box
      {...ctx.getStyles('content', { className, style, classNames, styles, props })}
      mod={mod}
      {...others}
    >
      {children}
    </Box>
  );

  if (shouldKeepMounted) {
    return <Activity mode={active ? 'visible' : 'hidden'}>{content}</Activity>;
  }

  return content;
});

StepperContent.classes = classes;
StepperContent.displayName = '@mantine/core/StepperContent';
