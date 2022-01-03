import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { Stepper, StepperProps } from './Stepper';

const defaultProps: StepperProps = {
  active: 1,
  children: [
    <Stepper.Step label="1" key="1" description="1">
      1
    </Stepper.Step>,
    <Stepper.Step label="2" key="2" description="2">
      2
    </Stepper.Step>,
    <Stepper.Step label="3" key="3" description="3">
      3
    </Stepper.Step>,
    <Stepper.Completed key="4">4</Stepper.Completed>,
  ],
};

describe('@mantine/core/Stepper', () => {
  checkAccessibility([<Stepper {...defaultProps} />]);
  itSupportsSystemProps({
    component: Stepper,
    props: defaultProps,
    displayName: '@mantine/core/Stepper',
    refType: HTMLDivElement,
  });
});
