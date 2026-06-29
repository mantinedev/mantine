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
    varsResolver: true,
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

  it('moves focus to the first enabled control on Home when the first control is disabled', async () => {
    render(
      <Accordion defaultValue="item-2" transitionDuration={0}>
        <Accordion.Item value="item-1">
          <Accordion.Control disabled>Label 1</Accordion.Control>
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
      </Accordion>
    );

    const buttons = screen.getAllByRole('button');
    buttons[2].focus();
    await userEvent.keyboard('{Home}');
    expect(buttons[1]).toHaveFocus();
  });

  it('moves focus to the last enabled control on End when the last control is disabled', async () => {
    render(
      <Accordion defaultValue="item-2" transitionDuration={0}>
        <Accordion.Item value="item-1">
          <Accordion.Control>Label 1</Accordion.Control>
          <Accordion.Panel>test-item-1</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Control>Label 2</Accordion.Control>
          <Accordion.Panel>test-item-2</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Control disabled>Label 3</Accordion.Control>
          <Accordion.Panel>test-item-3</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );

    const buttons = screen.getAllByRole('button');
    buttons[0].focus();
    await userEvent.keyboard('{End}');
    expect(buttons[1]).toHaveFocus();
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

  it('does not toggle a disabled control and sets disabled attributes', async () => {
    const spy = jest.fn();
    render(
      <Accordion onChange={spy} transitionDuration={0}>
        <Accordion.Item value="item-1">
          <Accordion.Control disabled>Label 1</Accordion.Control>
          <Accordion.Panel>test-item-1</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );

    const control = screen.getByRole('button');
    expect(control).toBeDisabled();
    expect(control).toHaveAttribute('data-disabled');

    await userEvent.click(control);
    expect(spy).not.toHaveBeenCalled();
  });

  it('sets data-rotate on the chevron of the opened item', () => {
    const { container } = render(<Accordion {...defaultProps} defaultValue="item-1" />);
    const chevrons = container.querySelectorAll('.mantine-Accordion-chevron');
    expect(chevrons[0]).toHaveAttribute('data-rotate');
    expect(chevrons[1]).not.toHaveAttribute('data-rotate');
  });

  it('does not set data-rotate when disableChevronRotation is set', () => {
    const { container } = render(
      <Accordion {...defaultProps} defaultValue="item-1" disableChevronRotation />
    );
    expect(container.querySelector('.mantine-Accordion-chevron')).not.toHaveAttribute(
      'data-rotate'
    );
  });

  it('sets chevron position data attributes based on chevronPosition prop', () => {
    const { container } = render(<Accordion {...defaultProps} chevronPosition="left" />);
    expect(screen.getAllByRole('button')[0]).toHaveAttribute('data-chevron-position', 'left');
    expect(container.querySelector('.mantine-Accordion-chevron')).toHaveAttribute(
      'data-position',
      'left'
    );
  });

  it('wraps controls in heading tags based on the order prop', () => {
    const { container } = render(<Accordion {...defaultProps} order={3} />);
    expect(container.querySelectorAll('h3.mantine-Accordion-itemTitle')).toHaveLength(3);
  });

  it('does not wrap controls in heading tags when order is not set', () => {
    const { container } = render(<Accordion {...defaultProps} />);
    expect(container.querySelector('.mantine-Accordion-itemTitle')).toBe(null);
  });

  it('renders a custom chevron icon', () => {
    render(<Accordion {...defaultProps} chevron={<span data-testid="custom-chevron" />} />);
    expect(screen.getAllByTestId('custom-chevron')).toHaveLength(3);
  });

  it('removes the chevron when chevron is set to null', () => {
    const { container } = render(<Accordion {...defaultProps} chevron={null} />);
    expect(container.querySelector('.mantine-Accordion-chevron')).toBeEmptyDOMElement();
  });

  it('supports controlled state (multiple: true)', async () => {
    const spy = jest.fn();
    render(
      <Accordion multiple value={['item-1']} onChange={spy} transitionDuration={0}>
        <Accordion.Item value="item-1">
          <Accordion.Control>Label 1</Accordion.Control>
          <Accordion.Panel>test-item-1</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Control>Label 2</Accordion.Control>
          <Accordion.Panel>test-item-2</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );

    await userEvent.click(screen.getAllByRole('button')[1]);
    expect(spy).toHaveBeenCalledWith(['item-1', 'item-2']);

    spy.mockClear();
    await userEvent.click(screen.getAllByRole('button')[0]);
    expect(spy).toHaveBeenCalledWith([]);
  });

  it('exposes internal components as static properties', () => {
    expect(Accordion.Item).toBe(AccordionItem);
    expect(Accordion.Control).toBe(AccordionControl);
    expect(Accordion.Panel).toBe(AccordionPanel);
    expect(Accordion.Chevron).toBe(AccordionChevron);
  });

  it('supports keepMountedMode="display-none" on Accordion level', () => {
    render(
      <Accordion keepMounted keepMountedMode="display-none" transitionDuration={0}>
        <Accordion.Item value="item-1">
          <Accordion.Control>Label 1</Accordion.Control>
          <Accordion.Panel>test-item-1</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByText('test-item-1').parentElement).toHaveStyle({
      display: 'none',
    });
  });

  it('supports keepMountedMode="display-none" override on AccordionPanel level', () => {
    render(
      <Accordion keepMounted keepMountedMode="activity" transitionDuration={0}>
        <Accordion.Item value="item-1">
          <Accordion.Control>Label 1</Accordion.Control>
          <Accordion.Panel keepMountedMode="display-none">test-item-1</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByText('test-item-1').parentElement).toHaveStyle({
      display: 'none',
    });
  });
});
