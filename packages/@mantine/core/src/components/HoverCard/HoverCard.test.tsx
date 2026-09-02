import { render, screen, tests, userEvent } from '@mantine-tests/core';
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

describe('@mantine/core/HoverCard', () => {
  tests.axe([<TestContainer initiallyOpened key="1" />, <TestContainer key="2" />]);
  tests.itRendersChildren({
    component: HoverCard,
    props: {},
  });

  it('correctly handles initiallyOpened prop', () => {
    render(<TestContainer initiallyOpened />);
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
});
