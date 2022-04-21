import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem/AccordionItem';
import { AccordionControl } from './AccordionControl/AccordionControl';
import { AccordionPanel } from './AccordionPanel/AccordionPanel';

const defaultProps = {
  transitionDuration: 0,
  children: (
    <>
      <Accordion.Item value="item-1">
        <Accordion.Control>Label 1</Accordion.Control>
        <Accordion.Panel>test-item-1</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Control>Label 2</Accordion.Control>
        <Accordion.Panel>test-item-2</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Control>Label 3</Accordion.Control>
        <Accordion.Panel>test-item-3</Accordion.Panel>
      </Accordion.Item>
    </>
  ),
};

describe('@mantine/core/Accordion', () => {
  checkAccessibility([<Accordion {...defaultProps} />, <Accordion {...defaultProps} order={2} />]);

  itSupportsSystemProps({
    component: Accordion,
    props: defaultProps,
    displayName: '@mantine/core/Accordion',
    name: 'Accordion',
  });

  it('renders correct amount of items', () => {
    const { container } = render(<Accordion {...defaultProps} />);
    expect(container.querySelectorAll('.mantine-Accordion-item')).toHaveLength(3);
  });

  it('support uncontrolled state (multiple: false, default)', () => {
    render(<Accordion {...defaultProps} defaultValue="item-2" />);
    expect(screen.getByText('test-item-2')).toBeInTheDocument();
    expect(screen.queryAllByText('test-item-1')).toHaveLength(0);

    userEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.queryAllByText('test-item-2')).toHaveLength(0);
    expect(screen.getByText('test-item-1')).toBeInTheDocument();
  });

  it('support uncontrolled state (multiple: true)', () => {
    render(<Accordion {...defaultProps} multiple defaultValue={['item-2']} />);
    expect(screen.queryAllByText('test-item-1').length).toBe(0);
    expect(screen.getByText('test-item-2')).toBeInTheDocument();

    userEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByText('test-item-1')).toBeInTheDocument();
    expect(screen.getByText('test-item-2')).toBeInTheDocument();
  });

  it('supports navigating between items with up and down arrows (loop: true, default)', () => {
    render(<Accordion {...defaultProps} defaultValue="item-1" />);

    userEvent.type(screen.getAllByRole('button')[0], '{arrowdown}');
    expect(screen.getAllByRole('button')[1]).toHaveFocus();

    userEvent.type(screen.getAllByRole('button')[2], '{arrowup}');
    expect(screen.getAllByRole('button')[1]).toHaveFocus();

    userEvent.type(screen.getAllByRole('button')[2], '{arrowdown}');
    expect(screen.getAllByRole('button')[0]).toHaveFocus();

    userEvent.type(screen.getAllByRole('button')[0], '{arrowup}');
    expect(screen.getAllByRole('button')[2]).toHaveFocus();
  });

  it('supports navigating between items with up and down arrows (loop: false)', () => {
    render(<Accordion {...defaultProps} defaultValue="item-1" loop={false} />);

    userEvent.type(screen.getAllByRole('button')[0], '{arrowdown}');
    expect(screen.getAllByRole('button')[1]).toHaveFocus();

    userEvent.type(screen.getAllByRole('button')[2], '{arrowup}');
    expect(screen.getAllByRole('button')[1]).toHaveFocus();

    userEvent.type(screen.getAllByRole('button')[2], '{arrowdown}');
    expect(screen.getAllByRole('button')[2]).toHaveFocus();

    userEvent.type(screen.getAllByRole('button')[0], '{arrowup}');
    expect(screen.getAllByRole('button')[0]).toHaveFocus();
  });

  it('supports controlled state (multiple: false, default)', () => {
    const spy = jest.fn();
    render(<Accordion {...defaultProps} value="item-2" onChange={spy} />);

    expect(screen.getByText('test-item-2')).toBeInTheDocument();
    expect(screen.queryAllByText('test-item-1')).toHaveLength(0);

    userEvent.click(screen.getAllByRole('button')[0]);
    expect(spy).toHaveBeenCalledWith('item-1');

    expect(screen.getByText('test-item-2')).toBeInTheDocument();
    expect(screen.queryAllByText('test-item-1')).toHaveLength(0);
  });

  it('supports controlled state (multiple: true)', () => {
    const spy = jest.fn();
    render(<Accordion {...defaultProps} value={['item-2']} multiple onChange={spy} />);

    expect(screen.getByText('test-item-2')).toBeInTheDocument();
    expect(screen.queryAllByText('test-item-1')).toHaveLength(0);

    userEvent.click(screen.getAllByRole('button')[0]);
    expect(spy).toHaveBeenCalledWith(['item-2', 'item-1']);

    expect(screen.getByText('test-item-2')).toBeInTheDocument();
    expect(screen.queryAllByText('test-item-1')).toHaveLength(0);
  });

  it('opens items initially based on defaultValue prop (multiple: false, default)', () => {
    render(<Accordion {...defaultProps} defaultValue="item-3" />);
    expect(screen.getByText('test-item-3')).toBeInTheDocument();
    expect(screen.queryAllByText('test-item-2')).toHaveLength(0);
    expect(screen.queryAllByText('test-item-1')).toHaveLength(0);
  });

  it('opens items initially based on defaultValue prop (multiple: true)', () => {
    render(<Accordion {...defaultProps} multiple defaultValue={['item-3', 'item-1']} />);
    expect(screen.getByText('test-item-3')).toBeInTheDocument();
    expect(screen.getByText('test-item-1')).toBeInTheDocument();
    expect(screen.queryAllByText('test-item-2')).toHaveLength(0);
  });

  it('handles tab key correctly', () => {
    render(<Accordion {...defaultProps} />);
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(screen.getAllByRole('button')[0]).toHaveFocus();

    userEvent.tab();
    expect(screen.getAllByRole('button')[1]).toHaveFocus();

    userEvent.tab();
    expect(screen.getAllByRole('button')[2]).toHaveFocus();

    userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  it('exposes internal components as static properties', () => {
    expect(Accordion.Item).toBe(AccordionItem);
    expect(Accordion.Control).toBe(AccordionControl);
    expect(Accordion.Panel).toBe(AccordionPanel);
  });
});
