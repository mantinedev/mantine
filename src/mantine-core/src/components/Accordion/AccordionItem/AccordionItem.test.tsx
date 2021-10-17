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
import { AccordionItem } from './AccordionItem';
import { Accordion as AccordionStylesApi } from '../styles.api';

const defaultProps = {
  label: 'test-label',
  opened: true,
  onToggle: () => {},
  transitionDuration: 200,
  id: 'test-id',
};

describe('@mantine/core/AccordionItem', () => {
  itSupportsOthers(AccordionItem, defaultProps);
  itRendersChildren(AccordionItem, defaultProps);
  itSupportsStyle(AccordionItem, defaultProps);
  itSupportsClassName(AccordionItem, defaultProps);
  checkAccessibility([mount(<AccordionItem {...defaultProps} />)]);
  itSupportsStylesApi(
    AccordionItem,
    defaultProps,
    Object.keys(AccordionStylesApi).filter((key) => key !== 'item' && key !== 'itemOpened'),
    'Accordion'
  );

  it('renders given label', () => {
    const element = shallow(<AccordionItem {...defaultProps} label="test-label" />);
    expect(element.find('.mantine-Accordion-label').text()).toBe('test-label');
  });

  it('has correct displayName', () => {
    expect(AccordionItem.displayName).toEqual('@mantine/core/AccordionItem');
  });
});
