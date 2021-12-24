import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  itSupportsOthers,
  itRendersChildren,
  itSupportsStyle,
  itSupportsClassName,
  itSupportsSx,
  checkAccessibility,
} from '@mantine/tests';
import { AccordionItem } from './AccordionItem';

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
  itSupportsSx(AccordionItem, defaultProps);
  itSupportsClassName(AccordionItem, defaultProps);
  checkAccessibility([render(<AccordionItem {...defaultProps} />)]);

  it('renders given label', () => {
    const element = shallow(<AccordionItem {...defaultProps} label="test-label" />);
    expect(element.find('.mantine-Accordion-label').text()).toBe('test-label');
  });

  it('has correct displayName', () => {
    expect(AccordionItem.displayName).toEqual('@mantine/core/AccordionItem');
  });
});
