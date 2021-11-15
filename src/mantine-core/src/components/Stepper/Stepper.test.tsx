import React from 'react';
import {
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
  checkAccessibility,
} from '@mantine/tests';
import { mount } from 'enzyme';
import { Stepper } from './Stepper';

const defaultProps = {
  active: 0,
  children: [<Stepper.Step label="1" key="1" />, <Stepper.Step label="2" key="2" />],
};

describe('@mantine/core/Stepper', () => {
  itSupportsClassName(Stepper, defaultProps);
  itSupportsMargins(Stepper, defaultProps);
  itSupportsOthers(Stepper, defaultProps);
  itSupportsStyle(Stepper, defaultProps);
  itSupportsRef(Stepper, defaultProps, HTMLDivElement);
  checkAccessibility([mount(<Stepper {...defaultProps} />)]);

  it('has correct displayName', () => {
    expect(Stepper.displayName).toEqual('@mantine/core/Stepper');
  });
});
