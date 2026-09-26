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

  tests.axe([
    <ActionBar {...defaultProps} key="1" aria-label="Bulk actions">
      <span>3 selected</span>
      <ActionBar.Divider />
      <ActionBar.CloseButton aria-label="Clear selection" />
    </ActionBar>,
    <ActionBar {...defaultProps} key="2" announcement="3 rows selected">
      content
    </ActionBar>,
  ]);

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
      <ActionBar opened unstyled>
        <ActionBar.CloseButton />
      </ActionBar>
    );

    expect(screen.getByRole('button').className).not.toContain('mantine-focus-auto');
  });

  it('does not set aria-label by default', () => {
    render(<ActionBar {...defaultProps} />);
    expect(screen.getByRole('group')).not.toHaveAttribute('aria-label');
  });

  it('merges affixProps className with the scroll lock class', () => {
    render(
      <ActionBar {...defaultProps} affixProps={{ className: 'test-affix', 'data-test': 'affix' }} />
    );

    const affix = document.querySelector('.mantine-Affix-root')!;
    expect(affix).toHaveClass('test-affix');
    expect(affix).toHaveClass('width-before-scroll-bar');
    expect(affix).toHaveAttribute('data-test', 'affix');
  });

  it('announces the announcement in a polite live region only when opened', () => {
    const { rerender } = render(<ActionBar {...defaultProps} announcement="3 rows selected" />);
    expect(screen.getByRole('status')).toHaveTextContent('3 rows selected');

    rerender(<ActionBar {...defaultProps} opened={false} announcement="3 rows selected" />);
    expect(screen.getByRole('status')).toBeEmptyDOMElement();
  });

  it('does not render a live region without announcement', () => {
    render(<ActionBar {...defaultProps} />);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('ignores Escape from elements with data-mantine-stop-propagation', async () => {
    const spy = jest.fn();
    render(
      <ActionBar {...defaultProps} onClose={spy} closeOnEscape>
        <input data-mantine-stop-propagation="true" />
      </ActionBar>
    );

    await userEvent.type(screen.getByRole('textbox'), '{Escape}');
    expect(spy).not.toHaveBeenCalled();
  });

  it('ignores Escape from inside a modal dialog', async () => {
    const spy = jest.fn();
    render(
      <>
        <div role="dialog" aria-modal="true">
          <input />
        </div>
        <ActionBar {...defaultProps} onClose={spy} closeOnEscape>
          content
        </ActionBar>
      </>
    );

    await userEvent.type(screen.getByRole('textbox'), '{Escape}');
    expect(spy).not.toHaveBeenCalled();
  });

  it('removes Escape listener when the bar is closed', async () => {
    const spy = jest.fn();
    render(
      <ActionBar {...defaultProps} opened={false} onClose={spy} closeOnEscape>
        content
      </ActionBar>
    );

    await userEvent.keyboard('{Escape}');
    expect(spy).not.toHaveBeenCalled();
  });
});
