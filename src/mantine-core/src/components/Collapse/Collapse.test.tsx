import React from 'react';
import { mount } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itRendersChildren,
  itSupportsMargins,
  itSupportsRef,
} from '@mantine/tests';
import { Collapse } from './Collapse';

const defaultProps = {
  in: true,
  children: <div style={{ height: '300px' }} />,
};

describe('@mantine/core/Collapse', () => {
  itRendersChildren(Collapse, defaultProps);
  itSupportsClassName(Collapse, defaultProps);
  itSupportsOthers(Collapse, defaultProps);
  itSupportsStyle(Collapse, defaultProps);
  itSupportsMargins(Collapse, defaultProps);
  itSupportsRef(Collapse, defaultProps, HTMLDivElement);

  it('transitionend event bubbling does not run onTransitionEnd twice', () => {
    const mockedFunction = jest.fn();
    const element = mount(
      <Collapse {...defaultProps} onTransitionEnd={mockedFunction} id="collapse-id" />
    );

    expect(mockedFunction).not.toBeCalled();

    element.find('#collapse-id').at(0).simulate('transitionend', { propertyName: 'height' });
    element.find('#collapse-id').at(1).simulate('transitionend', { propertyName: 'opacity' });

    expect(mockedFunction).toHaveBeenCalledTimes(1);
  });

  it('has correct displayName', () => {
    expect(Collapse.displayName).toEqual('@mantine/core/Collapse');
  });
});
