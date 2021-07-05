import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  checkAccessibility,
} from '@mantine/tests';
import { Accordion, AccordionItem } from './Accordion';
import { Accordion as AccordionStylesApi } from './styles.api';
import { AccordionControl } from './AccordionControl/AccordionControl';

const defaultProps = {
  children: [
    <AccordionItem label="Test 1">Test 1</AccordionItem>,
    <AccordionItem label="Test 2">Test 2</AccordionItem>,
    <AccordionItem label="Test 3">Test 3</AccordionItem>,
  ],
};

describe('@mantine/core/Accordion', () => {
  itSupportsClassName(Accordion, defaultProps);
  itSupportsOthers(Accordion, defaultProps);
  itSupportsStyle(Accordion, defaultProps);
  checkAccessibility([mount(<Accordion {...defaultProps} />)]);
  itSupportsStylesApi(Accordion, defaultProps, Object.keys(AccordionStylesApi), 'accordion');

  it('renders correct amount of items', () => {
    const element = shallow(<Accordion {...defaultProps} />);
    expect(element.find(AccordionControl)).toHaveLength(defaultProps.children.length);
  });

  it('has correct displayName', () => {
    expect(Accordion.displayName).toEqual('@mantine/core/Accordion');
  });
});
