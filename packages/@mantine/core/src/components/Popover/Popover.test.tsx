import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Popover, PopoverProps, PopoverStylesNames } from './Popover';
import { PopoverDropdown } from './PopoverDropdown/PopoverDropdown';
import { PopoverTarget } from './PopoverTarget/PopoverTarget';

const defaultProps: PopoverProps = {
  opened: true,
  withinPortal: false,
  withArrow: true,
  children: 'test-children',
};

function TestContainer(props: Partial<PopoverProps>) {
  return (
    <Popover transitionProps={{ duration: 0 }} withinPortal={false} {...props}>
      <Popover.Target>
        <button type="button">test-target</button>
      </Popover.Target>

      <Popover.Dropdown>
        <div>test-dropdown</div>
        <input aria-label="1" />
        <input aria-label="2" data-autofocus />
        <input aria-label="3" />
      </Popover.Dropdown>
    </Popover>
  );
}

describe('@mantine/core/Popover', () => {
  tests.axe([<TestContainer opened key="1" />, <TestContainer opened={false} key="2" />]);
  tests.itHasExtend({ component: Popover });
  tests.itRendersChildren({ component: Popover, props: defaultProps });
  tests.itSupportsStylesApi<PopoverProps, PopoverStylesNames>({
    component: TestContainer,
    props: defaultProps,
    selectors: ['dropdown', 'arrow'],
    providerName: 'Popover',
  });

  it('supports uncontrolled mode', async () => {
    render(<TestContainer />);
    expect(screen.queryAllByText('test-dropdown')).toHaveLength(0);

    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));
    expect(screen.queryAllByText('test-dropdown')).toHaveLength(0);
  });

  it('correctly handles defaultOpened prop', () => {
    render(<TestContainer defaultOpened />);
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();
  });

  it('calls onOpen and onClose functions when dropdown state changes', async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    render(<TestContainer onOpen={onOpen} onClose={onClose} />);

    await userEvent.click(screen.getByRole('button'));
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(0);

    await userEvent.click(screen.getByRole('button'));
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('supports controlled mode', async () => {
    const spy = jest.fn();
    render(<TestContainer opened onChange={spy} />);

    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(0);

    await userEvent.type(screen.getByRole('dialog'), '{Escape}');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(false);

    await userEvent.click(document.body);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('correctly handles closeOnClickOutside={false}', async () => {
    const spy = jest.fn();
    render(<TestContainer defaultOpened closeOnClickOutside={false} onClose={spy} />);
    await userEvent.click(document.body);
    expect(spy).not.toHaveBeenCalled();
  });

  it('correctly handles closeOnClickOutside={true}', async () => {
    const spy = jest.fn();
    render(<TestContainer defaultOpened closeOnClickOutside onClose={spy} />);
    await userEvent.click(document.body);
    expect(spy).toHaveBeenCalled();
  });

  it('correctly handles closeOnEscape={false}', async () => {
    const spy = jest.fn();
    render(<TestContainer defaultOpened closeOnEscape={false} onClose={spy} />);
    await userEvent.type(screen.getByRole('dialog'), '{Escape}');
    expect(spy).not.toHaveBeenCalled();
  });

  it('correctly handles closeOnEscape={true}', async () => {
    const spy = jest.fn();
    render(<TestContainer defaultOpened closeOnEscape onClose={spy} />);
    await userEvent.type(screen.getByRole('dialog'), '{Escape}');
    expect(spy).toHaveBeenCalled();
  });

  it('sets dropdown z-index based on zIndex prop', () => {
    render(<TestContainer defaultOpened zIndex={452} />);
    expect(screen.getByRole('dialog')).toHaveStyle({ zIndex: 452 });
  });

  it('correctly handles withArrow={true}', () => {
    const { container } = render(<TestContainer defaultOpened withArrow />);
    expect(container.querySelectorAll('.mantine-Popover-arrow')).toHaveLength(1);
  });

  it('correctly handles withArrow={false}', () => {
    const { container } = render(<TestContainer defaultOpened withArrow={false} />);
    expect(container.querySelectorAll('.mantine-Popover-arrow')).toHaveLength(0);
  });

  it('exposes PopoverTarget and PopoverDropdown as static properties', () => {
    expect(Popover.Dropdown).toBe(PopoverDropdown);
    expect(Popover.Target).toBe(PopoverTarget);
  });
});
