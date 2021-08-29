import React from 'react';
import { mount } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  itRendersChildren,
  checkAccessibility,
} from '@mantine/tests';
import { Collapse } from './Collapse';
import { Collapse as CollapseStylesApi } from './styles.api';

const defaultProps = {
  in: false,
  children: <div style={{ height: '300px' }} />,
};

describe('@mantine/core/Collapse', () => {
  itRendersChildren(Collapse, defaultProps);
  itSupportsClassName(Collapse, defaultProps);
  itSupportsOthers(Collapse, defaultProps);
  itSupportsStyle(Collapse, defaultProps);
  itSupportsStylesApi(Collapse, defaultProps, Object.keys(CollapseStylesApi), 'collapse');
  checkAccessibility([mount(<Collapse {...defaultProps} />)]);

  it('has correct displayName', () => {
    expect(Collapse.displayName).toEqual('@mantine/core/Collapse');
  });

  it('transitionend event bubbling doesnt run onAnimationEnd twice', () => {
    const mockedFunction = jest.fn();
    const element = mount(<Collapse {...defaultProps} onTransitionEnd={mockedFunction} id="collapse-id" />);

    expect(mockedFunction).not.toBeCalled();

    element.find('#collapse-id').at(0).simulate('transitionend', { propertyName: 'height' });
    element.find('#collapse-id').at(1).simulate('transitionend', { propertyName: 'opacity' });

    expect(mockedFunction).toHaveBeenCalledTimes(1);
  });
});
