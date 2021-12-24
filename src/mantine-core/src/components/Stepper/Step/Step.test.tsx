import React from 'react';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
  checkAccessibility,
  itSupportsSx,
} from '@mantine/tests';
import { mount, shallow } from 'enzyme';
import { Loader } from '../../Loader';
import { Step } from './Step';

const defaultProps = {};

describe('@mantine/core/Step', () => {
  itSupportsClassName(Step, defaultProps);
  itSupportsOthers(Step, defaultProps);
  itSupportsStyle(Step, defaultProps);
  itSupportsSx(Step, defaultProps);
  itSupportsRef(Step, defaultProps, HTMLButtonElement);
  checkAccessibility([
    mount(<Step aria-label="Test" />),
    mount(<Step title="Test" />),
    mount(<Step label="Test" />),
  ]);

  it('renders icon when withIcon is true', () => {
    const withIcon = shallow(<Step withIcon />);
    const withoutIcon = shallow(<Step withIcon={false} />);
    expect(withIcon.find('.mantine-Step-stepIcon')).toHaveLength(1);
    expect(withoutIcon.find('.mantine-Step-stepIcon')).toHaveLength(0);
  });

  it('renders step body if Step has label or description', () => {
    const withLabel = shallow(<Step label="test-label" />);
    const withDescription = shallow(<Step description="test-description" />);
    const withoutBody = shallow(<Step />);

    expect(withoutBody.find('.mantine-Step-stepBody')).toHaveLength(0);

    expect(withLabel.find('.mantine-Step-stepBody')).toHaveLength(1);
    expect(withLabel.find('.mantine-Step-stepLabel').text()).toBe('test-label');

    expect(withDescription.find('.mantine-Step-stepBody')).toHaveLength(1);
    expect(withDescription.find('.mantine-Step-stepDescription').text()).toBe('test-description');
  });

  it('sets button tabIndex based on allowStepClick prop', () => {
    const interactive = shallow(<Step allowStepClick />);
    const nonInteractive = shallow(<Step allowStepClick={false} />);
    expect(interactive.render().attr('tabindex')).toBe('0');
    expect(nonInteractive.render().attr('tabindex')).toBe('-1');
  });

  it('renders Loader instead of an icon if loading prop is true', () => {
    const loading = shallow(<Step loading />);
    const notLoading = shallow(<Step loading={false} />);

    expect(loading.find('.mantine-Step-stepIcon').find(Loader)).toHaveLength(1);
    expect(notLoading.find('.mantine-Step-stepIcon').find(Loader)).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Step.displayName).toEqual('@mantine/core/Step');
  });
});
