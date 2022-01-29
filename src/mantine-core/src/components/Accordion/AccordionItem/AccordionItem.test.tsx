import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { checkAccessibility, itSupportsSystemProps, itRendersChildren } from '@mantine/tests';
import { AccordionItem, AccordionItemProps } from './AccordionItem';

const defaultProps: AccordionItemProps = {
  label: 'test-label',
  opened: true,
  onToggle: () => {},
  transitionDuration: 200,
  id: 'test-id',
};

describe('@mantine/core/AccordionItem', () => {
  checkAccessibility([<AccordionItem {...defaultProps} />]);
  itRendersChildren(AccordionItem, defaultProps);
  itSupportsSystemProps({
    component: AccordionItem,
    props: defaultProps,
    displayName: '@mantine/core/AccordionItem',
  });

  it('renders given label', () => {
    render(<AccordionItem {...defaultProps} label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('supports getting ref with controlRef prop', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<AccordionItem {...defaultProps} controlRef={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('calls onToggle when control button is clicked', () => {
    const spy = jest.fn();
    render(<AccordionItem {...defaultProps} onToggle={spy} />);
    userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onControlKeyDown on control button', () => {
    const spy = jest.fn();
    render(<AccordionItem {...defaultProps} onToggle={spy} />);
    userEvent.type(screen.getByRole('button'), '{arrowdown}');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
