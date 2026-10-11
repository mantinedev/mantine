import { createRef } from 'react';
import { act, fireEvent } from '@testing-library/react';
import { render, renderWithAct, screen, tests, userEvent, wait } from '@mantine-tests/core';
import { Switch } from '../Switch';
import { HoverCard, HoverCardProps } from './HoverCard';
import { HoverCardDropdown } from './HoverCardDropdown/HoverCardDropdown';
import { HoverCardTarget } from './HoverCardTarget/HoverCardTarget';

function TestContainer(props: Partial<HoverCardProps>) {
  return (
    <HoverCard transitionProps={{ duration: 0 }} closeDelay={0} {...props}>
      <HoverCard.Target>
        <button type="button">test-target</button>
      </HoverCard.Target>
      <HoverCard.Dropdown>test-dropdown</HoverCard.Dropdown>
    </HoverCard>
  );
}

function GroupContainer(props: Partial<HoverCardProps>) {
  return (
    <HoverCard.Group>
      <TestContainer {...props} />
    </HoverCard.Group>
  );
}

function InteractiveContainer(props: Partial<HoverCardProps> & { dropdownProps?: any }) {
  const { dropdownProps, ...others } = props;
  return (
    <HoverCard transitionProps={{ duration: 0 }} closeDelay={0} {...others}>
      <HoverCard.Target>
        <button type="button">test-target</button>
      </HoverCard.Target>
      <HoverCard.Dropdown {...dropdownProps}>
        <button type="button">inner</button>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}

async function flushTimers(ms = 20) {
  await act(async () => {
    await wait(ms);
  });
}

describe('@mantine/core/HoverCard', () => {
  tests.axe([<TestContainer initiallyOpened key="1" />, <TestContainer key="2" />]);
  tests.itRendersChildren({
    component: HoverCard,
    props: {},
  });

  it('correctly handles initiallyOpened prop', async () => {
    await renderWithAct(<TestContainer initiallyOpened />);
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();
  });

  it('exposes HoverCardTarget and HoverCardDropdown as static properties', () => {
    expect(HoverCard.Dropdown).toBe(HoverCardDropdown);
    expect(HoverCard.Target).toBe(HoverCardTarget);
  });

  it('has correct displayName', () => {
    expect(HoverCard.displayName).toEqual('@mantine/core/HoverCard');
  });

  it('opens dropdown when the target is hovered', async () => {
    render(<TestContainer />);
    await userEvent.hover(screen.getByText('test-target'));
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();

    await userEvent.unhover(screen.getByText('test-target'));
    expect(screen.queryByText('test-dropdown')).not.toBeInTheDocument();
  });

  it('opens dropdown when the target is focused with the keyboard', async () => {
    render(<TestContainer />);
    await userEvent.tab();
    expect(screen.getByText('test-target')).toHaveFocus();
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();
  });

  it('does not open dropdown on focus if events.focus is false', async () => {
    render(<TestContainer events={{ focus: false }} />);
    await userEvent.tab();
    expect(screen.getByText('test-target')).toHaveFocus();
    expect(screen.queryByText('test-dropdown')).not.toBeInTheDocument();
  });

  it('keeps hover activation enabled when events.focus is false (omitted fields keep defaults)', async () => {
    render(<TestContainer events={{ focus: false }} />);
    await userEvent.hover(screen.getByText('test-target'));
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();
  });

  it('does not open dropdown on hover if events.hover is false', async () => {
    render(<TestContainer events={{ hover: false }} />);
    await userEvent.hover(screen.getByText('test-target'));
    expect(screen.queryByText('test-dropdown')).not.toBeInTheDocument();
  });

  it('closes dropdown with Escape key', async () => {
    render(<TestContainer />);
    await userEvent.hover(screen.getByText('test-target'));
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');
    expect(screen.queryByText('test-dropdown')).not.toBeInTheDocument();
  });

  it('closes dropdown with Escape key within HoverCard.Group', async () => {
    render(<GroupContainer />);
    await userEvent.hover(screen.getByText('test-target'));
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');
    expect(screen.queryByText('test-dropdown')).not.toBeInTheDocument();
  });

  it('does not close dropdown with Escape key if closeOnEscape is false', async () => {
    render(<TestContainer closeOnEscape={false} />);
    await userEvent.hover(screen.getByText('test-target'));
    await userEvent.keyboard('{Escape}');
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();
  });

  it('sets dialog related aria attributes by default', async () => {
    render(<TestContainer />);
    const target = screen.getByText('test-target');
    expect(target).toHaveAttribute('aria-haspopup', 'dialog');
    expect(target).toHaveAttribute('aria-expanded', 'false');

    await userEvent.hover(target);
    const dropdown = screen.getByRole('dialog');
    expect(target).toHaveAttribute('aria-expanded', 'true');
    expect(target).toHaveAttribute('aria-controls', dropdown.getAttribute('id')!);
    expect(dropdown).toHaveTextContent('test-dropdown');
  });

  it('sets the same dialog related aria attributes within HoverCard.Group', async () => {
    render(<GroupContainer />);
    const target = screen.getByText('test-target');
    expect(target).toHaveAttribute('aria-haspopup', 'dialog');

    await userEvent.hover(target);
    const dropdown = screen.getByRole('dialog');
    expect(target).toHaveAttribute('aria-expanded', 'true');
    expect(target).toHaveAttribute('aria-controls', dropdown.getAttribute('id')!);
  });

  it('sets tooltip related aria attributes with role="tooltip"', async () => {
    render(<TestContainer role="tooltip" />);
    const target = screen.getByText('test-target');
    expect(target).not.toHaveAttribute('aria-haspopup');
    expect(target).not.toHaveAttribute('aria-expanded');
    expect(target).not.toHaveAttribute('aria-describedby');

    await userEvent.hover(target);
    const dropdown = screen.getByRole('tooltip');
    expect(target).toHaveAttribute('aria-describedby', dropdown.getAttribute('id')!);
    expect(dropdown).toHaveTextContent('test-dropdown');
  });

  it('merges aria-describedby of the target with role="tooltip"', async () => {
    render(
      <HoverCard transitionProps={{ duration: 0 }} closeDelay={0} role="tooltip">
        <HoverCard.Target>
          <button type="button" aria-describedby="test-description">
            test-target
          </button>
        </HoverCard.Target>
        <HoverCard.Dropdown>test-dropdown</HoverCard.Dropdown>
      </HoverCard>
    );

    const target = screen.getByText('test-target');
    expect(target).toHaveAttribute('aria-describedby', 'test-description');

    await userEvent.hover(target);
    expect(target).toHaveAttribute(
      'aria-describedby',
      `test-description ${screen.getByRole('tooltip').getAttribute('id')}`
    );
  });

  it('does not set role related attributes with withRoles={false}', async () => {
    render(<TestContainer role="tooltip" withRoles={false} />);
    const target = screen.getByText('test-target');

    await userEvent.hover(target);
    expect(target).not.toHaveAttribute('aria-describedby');
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();
  });

  it('does not open dropdown on touch by default', async () => {
    render(<TestContainer events={{ focus: false }} />);
    await userEvent.pointer({ target: screen.getByText('test-target'), keys: '[TouchA]' });
    expect(screen.queryByText('test-dropdown')).not.toBeInTheDocument();
  });

  it('opens dropdown on touch with events.touch', async () => {
    render(<TestContainer events={{ focus: false, touch: true }} />);
    await userEvent.pointer({ target: screen.getByText('test-target'), keys: '[TouchA]' });
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();
  });

  it('calls target own mouse event handlers', async () => {
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();

    render(
      <HoverCard transitionProps={{ duration: 0 }} closeDelay={0}>
        <HoverCard.Target>
          <button type="button" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            test-target
          </button>
        </HoverCard.Target>
        <HoverCard.Dropdown>test-dropdown</HoverCard.Dropdown>
      </HoverCard>
    );

    await userEvent.hover(screen.getByText('test-target'));
    expect(onMouseEnter).toHaveBeenCalledTimes(1);

    await userEvent.unhover(screen.getByText('test-target'));
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });

  it('supports targets that expect event listeners in a nested prop', async () => {
    render(
      <HoverCard transitionProps={{ duration: 0 }} closeDelay={0}>
        <HoverCard.Target refProp="rootRef" eventPropsWrapperName="wrapperProps">
          <Switch label="test-target" />
        </HoverCard.Target>
        <HoverCard.Dropdown>test-dropdown</HoverCard.Dropdown>
      </HoverCard>
    );

    await userEvent.hover(screen.getByText('test-target'));
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();
  });

  it('calls onOpen and onClose', async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    render(<TestContainer onOpen={onOpen} onClose={onClose} />);

    await userEvent.hover(screen.getByText('test-target'));
    expect(onOpen).toHaveBeenCalledTimes(1);

    await userEvent.unhover(screen.getByText('test-target'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onOpen and onClose without a state change', async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    render(<TestContainer onOpen={onOpen} onClose={onClose} />);

    await userEvent.unhover(screen.getByText('test-target'));
    expect(onClose).not.toHaveBeenCalled();

    await userEvent.hover(screen.getByText('test-target'));
    await userEvent.keyboard('{Escape}');
    await userEvent.unhover(screen.getByText('test-target'));

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('keeps the floating ref when ref is passed to HoverCard.Dropdown', async () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <HoverCard transitionProps={{ duration: 0 }} closeDelay={0} interactive>
        <HoverCard.Target>
          <button type="button">test-target</button>
        </HoverCard.Target>
        <HoverCard.Dropdown ref={ref}>test-dropdown</HoverCard.Dropdown>
      </HoverCard>
    );

    await userEvent.hover(screen.getByText('test-target'));
    expect(ref.current).toBe(screen.getByText('test-dropdown'));

    await userEvent.unhover(screen.getByText('test-target'));
    expect(screen.queryByText('test-dropdown')).not.toBeInTheDocument();
  });

  it('closes dropdown on outside press', () => {
    render(<TestContainer initiallyOpened events={{ focus: false }} />);
    fireEvent.pointerDown(document.body);
    expect(screen.queryByText('test-dropdown')).not.toBeInTheDocument();
  });

  it('does not close dropdown on outside press if closeOnClickOutside is false', async () => {
    await renderWithAct(
      <TestContainer initiallyOpened closeOnClickOutside={false} events={{ focus: false }} />
    );
    fireEvent.pointerDown(document.body);
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();
  });

  it('does not return focus to the target when focus moves away with returnFocus', async () => {
    render(
      <>
        <TestContainer returnFocus />
        <button type="button">next</button>
      </>
    );

    await userEvent.tab();
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();

    await userEvent.tab();
    expect(screen.getByText('next')).toHaveFocus();

    await flushTimers(40);
    expect(screen.getByText('next')).toHaveFocus();
    expect(screen.queryByText('test-dropdown')).not.toBeInTheDocument();
  });

  it('returns focus to the target when Escape is pressed inside the dropdown', async () => {
    render(<InteractiveContainer />);
    await userEvent.tab();
    await userEvent.tab();
    await flushTimers();
    expect(screen.getByText('inner')).toHaveFocus();

    await userEvent.keyboard('{Escape}');
    expect(screen.getByText('test-target')).toHaveFocus();
    expect(screen.queryByText('inner')).not.toBeInTheDocument();
  });

  it('calls onDismiss when dropdown is closed with Escape key', async () => {
    const onDismiss = jest.fn();
    render(<TestContainer onDismiss={onDismiss} />);

    await userEvent.hover(screen.getByText('test-target'));
    await userEvent.keyboard('{Escape}');
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('calls onDismiss once when dropdown is closed with outside press', () => {
    const onDismiss = jest.fn();
    render(<TestContainer initiallyOpened events={{ focus: false }} onDismiss={onDismiss} />);

    fireEvent.pointerDown(document.body);
    fireEvent.mouseDown(document.body);
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('test-dropdown')).not.toBeInTheDocument();
  });

  it('calls onDismiss once when Escape is pressed inside the dropdown', async () => {
    const onDismiss = jest.fn();
    render(<InteractiveContainer onDismiss={onDismiss} />);

    await userEvent.tab();
    await userEvent.tab();
    await flushTimers();
    expect(screen.getByText('inner')).toHaveFocus();

    await userEvent.keyboard('{Escape}');
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('inner')).not.toBeInTheDocument();
  });

  it('does not call onDismiss when dropdown is closed by unhover or when it is closed', async () => {
    const onDismiss = jest.fn();
    render(<TestContainer onDismiss={onDismiss} />);

    await userEvent.hover(screen.getByText('test-target'));
    await userEvent.unhover(screen.getByText('test-target'));
    expect(onDismiss).not.toHaveBeenCalled();

    fireEvent.pointerDown(document.body);
    fireEvent.mouseDown(document.body);
    expect(onDismiss).not.toHaveBeenCalled();
  });

  it('uses id prop for the dropdown id with role="tooltip"', async () => {
    render(<TestContainer role="tooltip" id="custom-id" />);
    const target = screen.getByText('test-target');

    await userEvent.hover(target);
    expect(screen.getByRole('tooltip')).toHaveAttribute('id', 'custom-id-dropdown');
    expect(target).toHaveAttribute('aria-describedby', 'custom-id-dropdown');
  });

  it('uses id prop for the dropdown id with role="dialog"', async () => {
    render(<TestContainer id="custom-id" />);
    const target = screen.getByText('test-target');

    await userEvent.hover(target);
    expect(screen.getByRole('dialog')).toHaveAttribute('id', 'custom-id-dropdown');
    expect(target).toHaveAttribute('aria-controls', 'custom-id-dropdown');
  });

  it('keeps dropdown opened with trapFocus after keyboard activation', async () => {
    render(<TestContainer trapFocus />);
    await userEvent.tab();
    await flushTimers();
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');
    expect(screen.queryByText('test-dropdown')).not.toBeInTheDocument();
    expect(screen.getByText('test-target')).toHaveFocus();
  });

  it('keeps the same dropdown element and id with keepMounted', async () => {
    render(<TestContainer keepMounted role="tooltip" />);
    const target = screen.getByText('test-target');
    const dropdown = screen.getByRole('tooltip', { hidden: true });
    const id = dropdown.getAttribute('id')!;
    expect(target).not.toHaveAttribute('aria-describedby');

    await userEvent.tab();
    expect(target).toHaveAttribute('aria-describedby', id);
    expect(screen.getByRole('tooltip')).toBe(dropdown);

    await userEvent.keyboard('{Escape}');
    expect(target).not.toHaveAttribute('aria-describedby');
    expect(screen.getByRole('tooltip', { hidden: true })).toBe(dropdown);
    expect(dropdown).toHaveAttribute('id', id);
  });

  it('moves the dropdown between cards within HoverCard.Group with Tab key', async () => {
    render(
      <HoverCard.Group>
        <HoverCard transitionProps={{ duration: 0 }}>
          <HoverCard.Target>
            <button type="button">target-1</button>
          </HoverCard.Target>
          <HoverCard.Dropdown>dropdown-1</HoverCard.Dropdown>
        </HoverCard>
        <HoverCard transitionProps={{ duration: 0 }}>
          <HoverCard.Target>
            <button type="button">target-2</button>
          </HoverCard.Target>
          <HoverCard.Dropdown>dropdown-2</HoverCard.Dropdown>
        </HoverCard>
      </HoverCard.Group>
    );

    await userEvent.tab();
    expect(screen.getByText('dropdown-1')).toBeInTheDocument();

    await userEvent.tab();
    await flushTimers();
    expect(screen.getByText('target-2')).toHaveFocus();
    expect(screen.queryByText('dropdown-1')).not.toBeInTheDocument();
    expect(screen.getByText('dropdown-2')).toBeInTheDocument();
  });

  it('opens and closes dropdown on focus and blur without openDelay and closeDelay', async () => {
    render(
      <>
        <TestContainer openDelay={500} closeDelay={500} />
        <button type="button">next</button>
      </>
    );

    await userEvent.tab();
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();

    await userEvent.tab();
    await flushTimers();
    expect(screen.getByText('next')).toHaveFocus();
    expect(screen.queryByText('test-dropdown')).not.toBeInTheDocument();
  });

  it('does not set dialog related aria attributes with withRoles={false}', async () => {
    render(<TestContainer withRoles={false} />);
    const target = screen.getByText('test-target');
    expect(target).not.toHaveAttribute('aria-haspopup');
    expect(target).not.toHaveAttribute('aria-expanded');

    await userEvent.hover(target);
    expect(target).not.toHaveAttribute('aria-controls');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();
  });

  it('calls target own onKeyDown handler and closes dropdown with Escape key', async () => {
    const onKeyDown = jest.fn();
    render(
      <HoverCard transitionProps={{ duration: 0 }} closeDelay={0}>
        <HoverCard.Target>
          <button type="button" onKeyDown={onKeyDown}>
            test-target
          </button>
        </HoverCard.Target>
        <HoverCard.Dropdown>test-dropdown</HoverCard.Dropdown>
      </HoverCard>
    );

    await userEvent.tab();
    await userEvent.keyboard('{Escape}');
    expect(onKeyDown).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('test-dropdown')).not.toBeInTheDocument();
  });

  it('calls dropdown own onKeyDown handler and closes dropdown with Escape key', async () => {
    const onKeyDown = jest.fn();
    render(<InteractiveContainer dropdownProps={{ onKeyDown }} />);

    await userEvent.tab();
    await userEvent.tab();
    await flushTimers();
    expect(screen.getByText('inner')).toHaveFocus();

    await userEvent.keyboard('{Escape}');
    expect(onKeyDown).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('inner')).not.toBeInTheDocument();
  });

  it('does not render dropdown on focus when disabled', async () => {
    render(<TestContainer disabled />);
    await userEvent.tab();
    expect(screen.getByText('test-target')).toHaveFocus();
    expect(screen.queryByText('test-dropdown')).not.toBeInTheDocument();
  });

  it('closes initially opened dropdown with Escape key', async () => {
    render(<TestContainer initiallyOpened />);
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByText('test-dropdown')).not.toBeInTheDocument();
  });
});
