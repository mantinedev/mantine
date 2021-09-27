import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  checkAccessibility,
} from '@mantine/tests';
import { Accordion } from './Accordion';
import { Accordion as AccordionStylesApi } from './styles.api';

const defaultProps = {
  initialItem: 1,
  children: [
    <Accordion.Item label="Test 1">Test 1</Accordion.Item>,
    <Accordion.Item label="Test 2">Test 2</Accordion.Item>,
    <Accordion.Item label="Test 3">Test 3</Accordion.Item>,
  ],
};

describe('@mantine/core/Accordion', () => {
  itSupportsClassName(Accordion, defaultProps);
  itSupportsOthers(Accordion, defaultProps);
  itSupportsStyle(Accordion, defaultProps);
  itSupportsMargins(Accordion, defaultProps);
  checkAccessibility([mount(<Accordion {...defaultProps} />)]);
  itSupportsStylesApi(Accordion, defaultProps, Object.keys(AccordionStylesApi), 'accordion');

  it('renders correct amount of items', () => {
    const element = shallow(<Accordion {...defaultProps} />);
    expect(element.find(Accordion.Item)).toHaveLength(defaultProps.children.length);
  });

  it('has correct displayName', () => {
    expect(Accordion.displayName).toEqual('@mantine/core/Accordion');
  });
});
