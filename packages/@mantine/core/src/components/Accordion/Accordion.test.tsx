import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Accordion, AccordionProps, AccordionStylesNames } from './Accordion';
import { AccordionChevron } from './AccordionChevron';
import { AccordionControl } from './AccordionControl/AccordionControl';
import { AccordionItem } from './AccordionItem/AccordionItem';
import { AccordionPanel } from './AccordionPanel/AccordionPanel';

const defaultProps = {
  transitionDuration: 0,
  defaultValue: 'item-1',
  children: (
    <>
      <Accordion.Item value="item-1">
        <Accordion.Control icon="$$">Label 1</Accordion.Control>
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
  tests.axe([<Accordion {...defaultProps} />, <Accordion {...defaultProps} order={2} />]);
  tests.itSupportsSystemProps<AccordionProps, AccordionStylesNames>({
    component: Accordion,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    displayName: '@mantine/core/Accordion',
    stylesApiSelectors: ['root', 'chevron', 'content', 'control', 'icon', 'item', 'label'],
  });

  it('renders correct amount of items', () => {
    const { container } = render(<Accordion {...defaultProps} />);
    expect(container.querySelectorAll('.mantine-Accordion-item')).toHaveLength(3);
  });

  it('support uncontrolled state (multiple: false, default)', async () => {
    render(<Accordion {...defaultProps} defaultValue="item-2" />);
    expect(screen.getByText('test-item-2')).toBeInTheDocument();
    expect(screen.queryAllByText('test-item-1')).toHaveLength(0);

    await userEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.queryAllByText('test-item-2')).toHaveLength(0);
    expect(screen.getByText('test-item-1')).toBeInTheDocument();
  });

  it('support uncontrolled state (multiple: true)', async () => {
    render(<Accordion {...defaultProps} multiple defaultValue={['item-2']} />);
    expect(screen.queryAllByText('test-item-1').length).toBe(0);
    expect(screen.getByText('test-item-2')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByText('test-item-1')).toBeInTheDocument();
    expect(screen.getByText('test-item-2')).toBeInTheDocument();
  });

  it('supports navigating between items with up and down arrows (loop: true, default)', async () => {
    render(<Accordion {...defaultProps} defaultValue="item-1" />);

    await userEvent.type(screen.getAllByRole('button')[0], '{arrowdown}');
    expect(screen.getAllByRole('button')[1]).toHaveFocus();

    await userEvent.type(screen.getAllByRole('button')[2], '{arrowup}');
    expect(screen.getAllByRole('button')[1]).toHaveFocus();

    await userEvent.type(screen.getAllByRole('button')[2], '{arrowdown}');
    expect(screen.getAllByRole('button')[0]).toHaveFocus();

    await userEvent.type(screen.getAllByRole('button')[0], '{arrowup}');
    expect(screen.getAllByRole('button')[2]).toHaveFocus();
  });

  it('supports navigating between items with up and down arrows (loop: false)', async () => {
    render(<Accordion {...defaultProps} defaultValue="item-1" loop={false} />);

    await userEvent.type(screen.getAllByRole('button')[0], '{arrowdown}');
    expect(screen.getAllByRole('button')[1]).toHaveFocus();

    await userEvent.type(screen.getAllByRole('button')[2], '{arrowup}');
    expect(screen.getAllByRole('button')[1]).toHaveFocus();

    await userEvent.type(screen.getAllByRole('button')[2], '{arrowdown}');
    expect(screen.getAllByRole('button')[2]).toHaveFocus();

    await userEvent.type(screen.getAllByRole('button')[0], '{arrowup}');
    expect(screen.getAllByRole('button')[0]).toHaveFocus();
  });

  it('supports controlled state (multiple: false, default)', async () => {
    const spy = jest.fn();
    render(<Accordion {...defaultProps} value="item-2" onChange={spy} />);

    expect(screen.getByText('test-item-2')).toBeInTheDocument();
    expect(screen.queryAllByText('test-item-1')).toHaveLength(0);

    await userEvent.click(screen.getAllByRole('button')[0]);
    expect(spy).toHaveBeenCalledWith('item-1');

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

  it('handles tab key correctly', async () => {
    render(<Accordion {...defaultProps} />);
    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole('button')[0]).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole('button')[1]).toHaveFocus();

    await userEvent.tab();
    expect(screen.getAllByRole('button')[2]).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  it('exposes internal components as static properties', () => {
    expect(Accordion.Item).toBe(AccordionItem);
    expect(Accordion.Control).toBe(AccordionControl);
    expect(Accordion.Panel).toBe(AccordionPanel);
    expect(Accordion.Chevron).toBe(AccordionChevron);
  });
});
