import { useEffect } from 'react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { ActionBar, ActionBarProps, ActionBarStylesNames } from './ActionBar';

function EffectChild({ onCleanup }: { onCleanup: () => void }) {
  useEffect(() => onCleanup, [onCleanup]);
  return <div>effect-child</div>;
}

const defaultProps: ActionBarProps = {
  opened: true,
  withinPortal: false,
  children: 'test-action-bar',
  transitionProps: { duration: 0, transition: 'fade' },
};

describe('@mantine/core/ActionBar', () => {
  tests.itSupportsSystemProps<ActionBarProps, ActionBarStylesNames>({
    component: ActionBar,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/ActionBar',
    stylesApiSelectors: ['root'],
    selector: '.mantine-ActionBar-root',
  });

  it('renders children when opened is true', () => {
    render(<ActionBar {...defaultProps}>test-content</ActionBar>);
    expect(screen.getByText('test-content')).toBeInTheDocument();
  });

  it('does not render children when opened is false', () => {
    render(
      <ActionBar {...defaultProps} opened={false}>
        test-content
      </ActionBar>
    );
    expect(screen.queryByText('test-content')).not.toBeInTheDocument();
  });

  it('calls onClose when ActionBar.CloseButton is clicked', async () => {
    const spy = jest.fn();
    render(
      <ActionBar {...defaultProps} onClose={spy}>
        <ActionBar.CloseButton />
      </ActionBar>
    );
    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onClose on Escape keydown when closeOnEscape is true', async () => {
    const spy = jest.fn();
    render(
      <ActionBar {...defaultProps} onClose={spy} closeOnEscape>
        content
      </ActionBar>
    );
    await userEvent.keyboard('{Escape}');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose on Escape when closeOnEscape is false', async () => {
    const spy = jest.fn();
    render(
      <ActionBar {...defaultProps} onClose={spy} closeOnEscape={false}>
        content
      </ActionBar>
    );
    await userEvent.keyboard('{Escape}');
    expect(spy).not.toHaveBeenCalled();
  });

  it('renders ActionBar.Divider', () => {
    const { container } = render(
      <ActionBar {...defaultProps}>
        <ActionBar.Divider />
      </ActionBar>
    );
    expect(container.querySelector('.mantine-ActionBar-divider')).toBeInTheDocument();
  });

  it('keeps children mounted and pauses their effects when closed with keepMounted', () => {
    const cleanup = jest.fn();
    const { rerender } = render(
      <ActionBar opened keepMounted withinPortal={false} transitionProps={{ duration: 0 }}>
        <EffectChild onCleanup={cleanup} />
      </ActionBar>,
      undefined,
      { env: 'default' }
    );

    expect(cleanup).not.toHaveBeenCalled();

    rerender(
      <>
        <ActionBar
          opened={false}
          keepMounted
          withinPortal={false}
          transitionProps={{ duration: 0 }}
        >
          <EffectChild onCleanup={cleanup} />
        </ActionBar>
      </>
    );

    expect(cleanup).toHaveBeenCalledTimes(1);
    expect(screen.getByText('effect-child')).toBeInTheDocument();
  });

  it('keeps children effects running and hides the bar with display: none when keepMountedMode is display-none', () => {
    const cleanup = jest.fn();
    const transitionProps = { duration: 0, keepMountedMode: 'display-none' as const };
    const { container, rerender } = render(
      <ActionBar opened keepMounted withinPortal={false} transitionProps={transitionProps}>
        <EffectChild onCleanup={cleanup} />
      </ActionBar>,
      undefined,
      { env: 'default' }
    );

    rerender(
      <>
        <ActionBar
          opened={false}
          keepMounted
          withinPortal={false}
          transitionProps={transitionProps}
        >
          <EffectChild onCleanup={cleanup} />
        </ActionBar>
      </>
    );

    expect(cleanup).not.toHaveBeenCalled();
    expect(screen.getByText('effect-child')).toBeInTheDocument();
    expect(container.querySelector('.mantine-ActionBar-root')).toHaveStyle({ display: 'none' });
  });

  it('exposes the bar as a group and the divider as a separator', () => {
    render(
      <ActionBar opened>
        <div>content</div>
        <ActionBar.Divider />
      </ActionBar>
    );

    expect(screen.getByRole('group')).toBeInTheDocument();
    const separator = screen.getByRole('separator');
    expect(separator).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('allows overriding the default roles', () => {
    render(
      <ActionBar opened role="toolbar">
        <ActionBar.Divider role="presentation" />
      </ActionBar>
    );

    expect(screen.getByRole('toolbar')).toBeInTheDocument();
    expect(screen.queryByRole('separator')).not.toBeInTheDocument();
  });

  it('calls the given onClick before onClose on ActionBar.CloseButton', async () => {
    const calls: string[] = [];
    render(
      <ActionBar opened onClose={() => calls.push('close')}>
        <ActionBar.CloseButton onClick={() => calls.push('click')} />
      </ActionBar>
    );

    await userEvent.click(screen.getByRole('button'));
    expect(calls).toStrictEqual(['click', 'close']);
  });

  it('forwards unstyled to ActionBar.CloseButton', () => {
    const { rerender } = render(
      <ActionBar opened>
        <ActionBar.CloseButton />
      </ActionBar>
    );

    expect(screen.getByRole('button').className).toContain('mantine-focus-auto');

    rerender(
      <>
        <ActionBar opened unstyled>
          <ActionBar.CloseButton />
        </ActionBar>
      </>
    );

    expect(screen.getByRole('button').className).not.toContain('mantine-focus-auto');
  });
});
