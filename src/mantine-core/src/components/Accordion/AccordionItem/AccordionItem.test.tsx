import React from 'react';
import { render, screen } from '@testing-library/react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { AccordionItem, AccordionItemProps } from './AccordionItem';

const defaultProps: AccordionItemProps = {
  label: 'test-label',
  opened: true,
  onToggle: () => {},
  transitionDuration: 200,
  id: 'test-id',
};

describe('@mantine/core/AccordionItem', () => {
  checkAccessibility([render(<AccordionItem {...defaultProps} />)]);
  itSupportsSystemProps({
    component: AccordionItem,
    props: defaultProps,
    displayName: '@mantine/core/AccordionItem',
  });

  it('renders given label', () => {
    render(<AccordionItem {...defaultProps} label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });
});
