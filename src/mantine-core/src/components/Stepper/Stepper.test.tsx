import React from 'react';
import {
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
  itSupportsStylesApi,
  checkAccessibility,
  itSupportsSx,
} from '@mantine/tests';
import { mount } from 'enzyme';
import { Stepper } from './Stepper';
import { Stepper as StepperStylesApi } from './styles.api';

const defaultProps = {
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
  itSupportsClassName(Stepper, defaultProps);
  itSupportsMargins(Stepper, defaultProps);
  itSupportsOthers(Stepper, defaultProps);
  itSupportsStyle(Stepper, defaultProps);
  itSupportsSx(Stepper, defaultProps);
  itSupportsRef(Stepper, defaultProps, HTMLDivElement);
  checkAccessibility([mount(<Stepper {...defaultProps} />)]);
  itSupportsStylesApi(Stepper, defaultProps, Object.keys(StepperStylesApi), 'Stepper');

  it('has correct displayName', () => {
    expect(Stepper.displayName).toEqual('@mantine/core/Stepper');
  });
});
