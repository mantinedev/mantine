import { act } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Accordion, AccordionProps, AccordionStylesNames } from './Accordion';
import { AccordionChevron } from './AccordionChevron';
import { AccordionControl } from './AccordionControl/AccordionControl';
import { AccordionItem } from './AccordionItem/AccordionItem';
import { AccordionPanel } from './AccordionPanel/AccordionPanel';
import {
  useAccordion,
  AccordionControllerOptions,
  AccordionController,
} from './use-accordion/use-accordion';

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
    props: { ...defaultProps, order: 3 },
    varsResolver: true,
    displayName: '@mantine/core/Accordion',
    stylesApiSelectors: [
      'root',
      'chevron',
      'content',
      'control',
      'icon',
      'item',
      'label',
      'itemTitle',
    ],
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
    expect(container.querySelector('.mantine-Accordion-chevron')).toBe(null);
  });

  it('removes the chevron when chevron is set to false', () => {
    const { container } = render(<Accordion {...defaultProps} chevron={false} />);
    expect(container.querySelector('.mantine-Accordion-chevron')).toBe(null);
  });

  it('overrides Accordion chevron with Accordion.Control chevron', () => {
    render(
      <Accordion transitionDuration={0} chevron={<span data-testid="root-chevron" />}>
        <Accordion.Item value="item-1">
          <Accordion.Control chevron={<span data-testid="control-chevron" />}>
            Label 1
          </Accordion.Control>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Control>Label 2</Accordion.Control>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getAllByTestId('control-chevron')).toHaveLength(1);
    expect(screen.getAllByTestId('root-chevron')).toHaveLength(1);
    expect(screen.getAllByRole('button')[0]).toContainElement(
      screen.getByTestId('control-chevron')
    );
  });

  it('removes the chevron of a single control when Accordion.Control chevron is set to null', () => {
    const { container } = render(
      <Accordion transitionDuration={0}>
        <Accordion.Item value="item-1">
          <Accordion.Control chevron={null}>Label 1</Accordion.Control>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Control>Label 2</Accordion.Control>
        </Accordion.Item>
      </Accordion>
    );

    expect(container.querySelectorAll('.mantine-Accordion-chevron')).toHaveLength(1);
    expect(screen.getAllByRole('button')[0].querySelector('.mantine-Accordion-chevron')).toBe(null);
  });

  it('hides the default chevron icon from assistive technologies', () => {
    const { container } = render(<Accordion {...defaultProps} />);
    expect(container.querySelector('.mantine-Accordion-chevron svg')).toHaveAttribute(
      'aria-hidden',
      'true'
    );
  });

  it('renders icon only when Accordion.Control icon prop is set', () => {
    const { container } = render(<Accordion {...defaultProps} chevronPosition="left" />);
    const buttons = screen.getAllByRole('button');
    const icon = buttons[0].querySelector('.mantine-Accordion-icon');

    expect(container.querySelectorAll('.mantine-Accordion-icon')).toHaveLength(1);
    expect(icon).toHaveTextContent('$$');
    expect(icon).toHaveAttribute('data-chevron-position', 'left');
    expect(buttons[1].querySelector('.mantine-Accordion-icon')).toBe(null);
  });

  it('sets data-active on the item and control of the opened item', async () => {
    const { container } = render(<Accordion {...defaultProps} />);
    const items = container.querySelectorAll('.mantine-Accordion-item');
    const buttons = screen.getAllByRole('button');

    expect(items[0]).toHaveAttribute('data-active');
    expect(buttons[0]).toHaveAttribute('data-active');
    expect(items[1]).not.toHaveAttribute('data-active');
    expect(buttons[1]).not.toHaveAttribute('data-active');

    await userEvent.click(buttons[1]);
    expect(items[0]).not.toHaveAttribute('data-active');
    expect(buttons[0]).not.toHaveAttribute('data-active');
    expect(items[1]).toHaveAttribute('data-active');
    expect(buttons[1]).toHaveAttribute('data-active');
  });

  it('connects controls and panels with aria attributes', async () => {
    render(<Accordion {...defaultProps} />);
    const control = screen.getAllByRole('button')[0];
    const panel = screen.getByRole('region');

    expect(control).toHaveAttribute('aria-expanded', 'true');
    expect(control).toHaveAttribute('aria-controls', panel.id);
    expect(panel).toHaveAttribute('aria-labelledby', control.id);

    await userEvent.click(control);
    expect(control).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getAllByRole('button')[1]).toHaveAttribute('aria-expanded', 'false');
  });

  it('keeps generated ids when id is passed to Accordion.Control and Accordion.Panel', () => {
    render(
      <Accordion transitionDuration={0} defaultValue="item-1">
        <Accordion.Item value="item-1">
          <Accordion.Control id="custom-control">Label 1</Accordion.Control>
          <Accordion.Panel id="custom-panel">test-item-1</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );

    const control = screen.getByRole('button');
    const panel = screen.getByRole('region');
    expect(control.id).not.toBe('custom-control');
    expect(panel.id).not.toBe('custom-panel');
    expect(control).toHaveAttribute('aria-controls', panel.id);
    expect(panel).toHaveAttribute('aria-labelledby', control.id);
  });

  it('sets aria-disabled on the open control when disableCollapse is set', async () => {
    render(<Accordion {...defaultProps} disableCollapse />);
    const buttons = screen.getAllByRole('button');

    expect(buttons[0]).toHaveAttribute('aria-disabled', 'true');
    expect(buttons[1]).not.toHaveAttribute('aria-disabled');

    await userEvent.click(buttons[1]);
    expect(buttons[0]).not.toHaveAttribute('aria-disabled');
    expect(buttons[1]).toHaveAttribute('aria-disabled', 'true');
  });

  it('does not set aria-disabled when disableCollapse is set in multiple mode', () => {
    render(<Accordion {...defaultProps} multiple defaultValue={['item-1']} disableCollapse />);
    expect(screen.getAllByRole('button')[0]).not.toHaveAttribute('aria-disabled');
  });

  it('keeps collapsed panels mounted by default', () => {
    render(<Accordion {...defaultProps} transitionDuration={200} />);
    expect(screen.getByText('test-item-2')).toBeInTheDocument();
    expect(screen.getByText('test-item-3')).toBeInTheDocument();
  });

  it('unmounts collapsed panels when keepMounted is false', () => {
    render(<Accordion {...defaultProps} transitionDuration={200} keepMounted={false} />);
    expect(screen.getByText('test-item-1')).toBeInTheDocument();
    expect(screen.queryByText('test-item-2')).toBe(null);
    expect(screen.queryByText('test-item-3')).toBe(null);
  });

  it('supports keepMounted override on Accordion.Panel level', () => {
    render(
      <Accordion transitionDuration={200} keepMounted={false} defaultValue="item-1">
        <Accordion.Item value="item-1">
          <Accordion.Control>Label 1</Accordion.Control>
          <Accordion.Panel>test-item-1</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Control>Label 2</Accordion.Control>
          <Accordion.Panel keepMounted>test-item-2</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Control>Label 3</Accordion.Control>
          <Accordion.Panel>test-item-3</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByText('test-item-2')).toBeInTheDocument();
    expect(screen.queryByText('test-item-3')).toBe(null);
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

  it('does not collapse the open item when disableCollapse is set (uncontrolled, multiple: false)', async () => {
    const spy = jest.fn();
    render(<Accordion {...defaultProps} defaultValue="item-1" disableCollapse onChange={spy} />);

    expect(screen.getByText('test-item-1')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByText('test-item-1')).toBeInTheDocument();
    expect(spy).not.toHaveBeenCalled();
  });

  it('does not collapse the open item when disableCollapse is set (controlled, multiple: false)', async () => {
    const spy = jest.fn();
    render(<Accordion {...defaultProps} value="item-1" disableCollapse onChange={spy} />);

    expect(screen.getByText('test-item-1')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByText('test-item-1')).toBeInTheDocument();
    expect(spy).not.toHaveBeenCalled();
  });

  it('switches to a different item when disableCollapse is set (multiple: false)', async () => {
    const spy = jest.fn();
    render(<Accordion {...defaultProps} defaultValue="item-1" disableCollapse onChange={spy} />);

    await userEvent.click(screen.getAllByRole('button')[1]);
    expect(spy).toHaveBeenCalledWith('item-2');
    expect(screen.getByText('test-item-2')).toBeInTheDocument();
    expect(screen.queryAllByText('test-item-1')).toHaveLength(0);
  });

  it('ignores disableCollapse in multiple mode', async () => {
    const spy = jest.fn();
    render(
      <Accordion
        {...defaultProps}
        multiple
        defaultValue={['item-1']}
        disableCollapse
        onChange={spy}
      />
    );

    expect(screen.getByText('test-item-1')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('button')[0]);
    expect(spy).toHaveBeenCalledWith([]);
    expect(screen.queryAllByText('test-item-1')).toHaveLength(0);
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

  describe('controller prop', () => {
    function ControllerAccordion<Multiple extends boolean = false>({
      options,
      capture,
      children,
      ...others
    }: {
      options?: AccordionControllerOptions<Multiple>;
      capture: (controller: AccordionController<Multiple>) => void;
    } & Partial<AccordionProps<Multiple>>) {
      const controller = useAccordion<Multiple>(options);
      capture(controller);

      return (
        <Accordion controller={controller} transitionDuration={0} {...others}>
          {children ?? defaultProps.children}
        </Accordion>
      );
    }

    it('renders the state owned by the controller', () => {
      let controller: AccordionController<false> = null as any;
      render(
        <ControllerAccordion
          options={{ defaultValue: 'item-2' }}
          capture={(c) => {
            controller = c;
          }}
        />
      );

      expect(screen.getByText('test-item-2')).toBeInTheDocument();
      expect(screen.queryAllByText('test-item-1')).toHaveLength(0);
      expect(controller.value).toBe('item-2');
    });

    it('updates the controller when an item is clicked', async () => {
      let controller: AccordionController<false> = null as any;
      render(
        <ControllerAccordion
          capture={(c) => {
            controller = c;
          }}
        />
      );

      await userEvent.click(screen.getAllByRole('button')[0]);
      expect(controller.value).toBe('item-1');
      expect(controller.isExpanded('item-1')).toBe(true);
      expect(screen.getByText('test-item-1')).toBeInTheDocument();
    });

    it('updates the rendered items when a controller action is called from outside', () => {
      let controller: AccordionController<true> = null as any;
      render(
        <ControllerAccordion
          options={{ multiple: true }}
          capture={(c) => {
            controller = c;
          }}
        />
      );

      act(() => controller.expandAll());

      expect(screen.getByText('test-item-1')).toBeInTheDocument();
      expect(screen.getByText('test-item-2')).toBeInTheDocument();
      expect(screen.getByText('test-item-3')).toBeInTheDocument();

      act(() => controller.collapseAll());
      expect(screen.queryAllByText('test-item-1')).toHaveLength(0);
    });

    it('registers mounted items on the controller in render order', () => {
      let controller: AccordionController<false> = null as any;
      render(
        <ControllerAccordion
          capture={(c) => {
            controller = c;
          }}
        />
      );

      expect(controller.getItems()).toStrictEqual(['item-1', 'item-2', 'item-3']);
    });

    it('unregisters items when they are unmounted without resetting the controller', () => {
      let controller: AccordionController<true> = null as any;
      const capture = (c: AccordionController<true>) => {
        controller = c;
      };

      const { rerender } = render(
        <ControllerAccordion options={{ multiple: true }} capture={capture} />
      );

      expect(controller.getItems()).toStrictEqual(['item-1', 'item-2', 'item-3']);

      act(() => controller.expand('item-2'));
      expect(controller.value).toStrictEqual(['item-2']);

      rerender(
        <ControllerAccordion options={{ multiple: true }} capture={capture}>
          <Accordion.Item value="item-1">
            <Accordion.Control>Label 1</Accordion.Control>
            <Accordion.Panel>test-item-1</Accordion.Panel>
          </Accordion.Item>
        </ControllerAccordion>
      );

      expect(controller.getItems()).toStrictEqual(['item-1']);
      expect(controller.value).toStrictEqual(['item-2']);
    });

    it('ignores value, defaultValue and onChange props when controller is set', async () => {
      const onChange = jest.fn();
      let controller: AccordionController<false> = null as any;

      function Wrapper() {
        const c = useAccordion();
        controller = c;
        return (
          <Accordion
            controller={c}
            value="item-3"
            defaultValue="item-2"
            onChange={onChange}
            transitionDuration={0}
          >
            {defaultProps.children}
          </Accordion>
        );
      }

      render(<Wrapper />);
      expect(screen.queryAllByText('test-item-3')).toHaveLength(0);

      await userEvent.click(screen.getAllByRole('button')[0]);
      expect(controller.value).toBe('item-1');
      expect(screen.getByText('test-item-1')).toBeInTheDocument();
      expect(onChange).not.toHaveBeenCalled();
    });

    it('supports multiple mode through the controller', async () => {
      let controller: AccordionController<true> = null as any;
      render(
        <ControllerAccordion
          options={{ multiple: true }}
          capture={(c) => {
            controller = c;
          }}
        />
      );

      await userEvent.click(screen.getAllByRole('button')[0]);
      await userEvent.click(screen.getAllByRole('button')[1]);

      expect(controller.value).toStrictEqual(['item-1', 'item-2']);
      expect(screen.getByText('test-item-1')).toBeInTheDocument();
      expect(screen.getByText('test-item-2')).toBeInTheDocument();
    });

    it('supports disableCollapse passed as a controller option', async () => {
      let controller: AccordionController<false> = null as any;
      render(
        <ControllerAccordion
          options={{ defaultValue: 'item-1', disableCollapse: true }}
          capture={(c) => {
            controller = c;
          }}
        />
      );

      await userEvent.click(screen.getAllByRole('button')[0]);
      expect(controller.value).toBe('item-1');
      expect(screen.getByText('test-item-1')).toBeInTheDocument();
    });

    it('calls the controller onChange when an item is clicked', async () => {
      const onChange = jest.fn();
      render(<ControllerAccordion options={{ onChange }} capture={() => {}} />);

      await userEvent.click(screen.getAllByRole('button')[1]);
      expect(onChange).toHaveBeenLastCalledWith('item-2');
    });
  });
});
