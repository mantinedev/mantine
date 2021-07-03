import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  itSupportsOthers,
  itRendersChildren,
  itSupportsStyle,
  itSupportsClassName,
  itSupportsStylesApi,
  checkAccessibility,
} from '@mantine/tests';
import { AccordionControl } from './AccordionControl';
import { Accordion as AccordionStylesApi } from '../styles.api';

const defaultProps = {
  label: 'test-label',
  opened: true,
  onToggle: () => {},
  transitionDuration: 200,
  id: 'test-id',
};

describe('@mantine/core/AccordionControl', () => {
  itSupportsOthers(AccordionControl, defaultProps);
  itRendersChildren(AccordionControl, defaultProps);
  itSupportsStyle(AccordionControl, defaultProps);
  itSupportsClassName(AccordionControl, defaultProps);
  checkAccessibility([mount(<AccordionControl {...defaultProps} />)]);
  itSupportsStylesApi(
    AccordionControl,
    defaultProps,
    Object.keys(AccordionStylesApi).filter((key) => key !== 'item' && key !== 'itemOpened'),
    'accordion'
  );

  it('renders given label', () => {
    const element = shallow(<AccordionControl {...defaultProps} label="test-label" />);
    expect(element.find('.mantine-accordion-label').text()).toBe('test-label');
  });

  it('sets animation properties based on opened prop', () => {
    const opened = shallow(<AccordionControl {...defaultProps} opened />);
    const closed = shallow(<AccordionControl {...defaultProps} opened={false} />);

    expect(opened.find('.mantine-accordion-contentInner').prop('style').opacity).toBe(1);
    expect(opened.find('.mantine-accordion-content').prop('style').height).toBe('auto');

    expect(closed.find('.mantine-accordion-contentInner').prop('style').opacity).toBe(0);
    expect(closed.find('.mantine-accordion-content').prop('style').height).toBe(0);
  });

  it('has correct displayName', () => {
    expect(AccordionControl.displayName).toEqual('@mantine/core/AccordionControl');
  });
});
