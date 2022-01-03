import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { Button } from '../Button';
import { Accordion, AccordionProps } from './Accordion';
import { AccordionItem } from './AccordionItem/AccordionItem';

const defaultProps: AccordionProps = {
  initialItem: 1,
  children: [
    <Accordion.Item label="test-label-1">test-item-1</Accordion.Item>,
    <Accordion.Item label="test-label-2">test-item-2</Accordion.Item>,
    <Accordion.Item label="test-label-3">test-item-3</Accordion.Item>,
  ],
};

describe('@mantine/core/Accordion', () => {
  itSupportsSystemProps({
    component: Accordion,
    props: defaultProps,
    displayName: '@mantine/core/Accordion',
    refType: HTMLDivElement,
  });
  checkAccessibility([<Accordion {...defaultProps} />]);

  it('renders correct amount of items', () => {
    const { container } = render(<Accordion {...defaultProps} />);
    expect(container.querySelectorAll('.mantine-Accordion-item')).toHaveLength(3);
  });

  it('filters out unexpected children', () => {
    const { container } = render(
      <Accordion>
        <Accordion.Item label="Child 1 label">Child 1</Accordion.Item>
        <p className="unexpected">Unexpected child 1</p>
        <div className="unexpected">Unexpected child 1</div>
        <Accordion.Item label="Child 2 label">Child 2</Accordion.Item>
        <Button>Unexpected component</Button>
      </Accordion>
    );

    expect(container.querySelectorAll('.mantine-Accordion-item')).toHaveLength(2);
    expect(container.querySelectorAll('.mantine-Button-root')).toHaveLength(0);
    expect(container.querySelectorAll('.unexpected')).toHaveLength(0);
  });

  it('supports controlRef on Accordion.Item', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <Accordion>
        <Accordion.Item controlRef={ref} />
      </Accordion>
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('opens item on control click', () => {
    render(<Accordion {...defaultProps} initialItem={1} transitionDuration={0} />);
    expect(screen.getByText('test-item-2')).toBeInTheDocument();
    expect(screen.queryAllByText('test-item-1')).toHaveLength(0);

    userEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.queryAllByText('test-item-2')).toHaveLength(0);
    expect(screen.getByText('test-item-1')).toBeInTheDocument();
  });

  it('supports navigating between items with up and down arrows', () => {
    render(<Accordion {...defaultProps} initialItem={0} />);

    userEvent.type(screen.getAllByRole('button')[0], '{arrowdown}');
    expect(screen.getAllByRole('button')[1]).toHaveFocus();

    userEvent.type(screen.getAllByRole('button')[2], '{arrowup}');
    expect(screen.getAllByRole('button')[1]).toHaveFocus();

    userEvent.type(screen.getAllByRole('button')[2], '{arrowdown}');
    expect(screen.getAllByRole('button')[0]).toHaveFocus();

    userEvent.type(screen.getAllByRole('button')[0], '{arrowup}');
    expect(screen.getAllByRole('button')[2]).toHaveFocus();
  });

  it('supports controlled state', () => {
    const spy = jest.fn();
    render(
      <Accordion
        {...defaultProps}
        onChange={spy}
        state={{ 0: false, 1: true, 2: false }}
        transitionDuration={0}
      />
    );

    expect(screen.getByText('test-item-2')).toBeInTheDocument();
    expect(screen.queryAllByText('test-item-1')).toHaveLength(0);

    userEvent.click(screen.getAllByRole('button')[0]);
    expect(spy).toHaveBeenCalledWith({ 0: true, 1: false, 2: false });
  });

  it('supports multiple controlled state', () => {
    const spy = jest.fn();
    render(
      <Accordion
        {...defaultProps}
        multiple
        onChange={spy}
        state={{ 0: false, 1: true, 2: false }}
      />
    );

    userEvent.click(screen.getAllByRole('button')[0]);
    expect(spy).toHaveBeenCalledWith({ 0: true, 1: true, 2: false });
  });

  it('sets initial opened item based on initialItem prop', () => {
    render(<Accordion {...defaultProps} initialItem={2} transitionDuration={0} />);
    expect(screen.getByText('test-item-3')).toBeInTheDocument();
    expect(screen.queryAllByText('test-item-2')).toHaveLength(0);
    expect(screen.queryAllByText('test-item-1')).toHaveLength(0);
  });

  it('sets initial opened items with initialState for multiple variant', () => {
    render(
      <Accordion
        {...defaultProps}
        multiple
        initialState={{ 0: true, 1: true, 2: false }}
        transitionDuration={0}
      />
    );
    expect(screen.getByText('test-item-1')).toBeInTheDocument();
    expect(screen.getByText('test-item-2')).toBeInTheDocument();
    expect(screen.queryAllByText('test-item-3')).toHaveLength(0);
  });

  it('exposes AccordionItem component as Accordion.Item', () => {
    expect(Accordion.Item).toBe(AccordionItem);
  });
});
