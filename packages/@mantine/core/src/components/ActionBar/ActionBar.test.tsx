import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { ActionBar, ActionBarProps, ActionBarStylesNames } from './ActionBar';

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

  it('keeps DOM node with display: none when keepMounted is true and closed', () => {
    const { container } = render(
      <ActionBar {...defaultProps} opened={false} keepMounted>
        test-keep-mounted
      </ActionBar>
    );
    expect(screen.getByText('test-keep-mounted')).toBeInTheDocument();
    expect(container.querySelector('.mantine-ActionBar-root')).toHaveStyle({ display: 'none' });
  });
});
