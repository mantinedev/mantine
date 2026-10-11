import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Spoiler, SpoilerProps, SpoilerStylesNames } from './Spoiler';

class TallContentResizeObserver {
  constructor(private callback: ResizeObserverCallback) {}

  observe() {
    this.callback(
      [
        {
          contentRect: { x: 0, y: 0, width: 0, height: 200, top: 0, left: 0, bottom: 0, right: 0 },
        },
      ] as any,
      this as any
    );
  }

  unobserve() {}

  disconnect() {}
}

const defaultProps: SpoilerProps = {
  maxHeight: 100,
  showLabel: 'show',
  hideLabel: 'hide',
  children: 'test-children',
};

describe('@mantine/core/Spoiler', () => {
  tests.itSupportsSystemProps<SpoilerProps, SpoilerStylesNames>({
    component: Spoiler,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Spoiler',
    stylesApiSelectors: ['root', 'content'],
  });

  const originalResizeObserver = window.ResizeObserver;

  beforeEach(() => {
    window.ResizeObserver = TallContentResizeObserver as any;
  });

  afterEach(() => {
    window.ResizeObserver = originalResizeObserver;
  });

  it('toggles aria-expanded and label when control is clicked', async () => {
    render(<Spoiler {...defaultProps} />);
    const control = await screen.findByRole('button', { name: 'show' });
    expect(control).toHaveAttribute('aria-expanded', 'false');
    expect(document.getElementById(control.getAttribute('aria-controls')!)).toHaveTextContent(
      'test-children'
    );

    await userEvent.click(control);
    expect(control).toHaveAttribute('aria-expanded', 'true');
    expect(control).toHaveTextContent('hide');

    await userEvent.click(control);
    expect(control).toHaveAttribute('aria-expanded', 'false');
    expect(control).toHaveTextContent('show');
  });

  it('does not render a region landmark', async () => {
    render(<Spoiler {...defaultProps} />);
    await screen.findByRole('button');
    expect(screen.queryByRole('region')).not.toBeInTheDocument();
  });

  it('supports defaultExpanded', async () => {
    render(<Spoiler {...defaultProps} defaultExpanded />);
    expect(await screen.findByRole('button', { name: 'hide' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
  });

  it('supports controlled expanded state', async () => {
    const spy = jest.fn();
    const { rerender } = render(
      <Spoiler {...defaultProps} expanded={false} onExpandedChange={spy} />
    );
    await userEvent.click(await screen.findByRole('button'));
    expect(spy).toHaveBeenCalledWith(true);
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');

    rerender(<Spoiler {...defaultProps} expanded onExpandedChange={spy} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
  });

  it('uses showAriaLabel and hideAriaLabel', async () => {
    render(<Spoiler {...defaultProps} showAriaLabel="Show more text" hideAriaLabel="Hide text" />);
    await userEvent.click(await screen.findByRole('button', { name: 'Show more text' }));
    expect(screen.getByRole('button', { name: 'Hide text' })).toBeInTheDocument();
  });
});
