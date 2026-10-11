import { render, screen, tests } from '@mantine-tests/core';
import { Marquee, MarqueeProps, MarqueeStylesNames } from './Marquee';

const defaultProps: MarqueeProps = {
  children: 'Test content',
};

describe('@mantine/core/Marquee', () => {
  tests.itSupportsSystemProps<MarqueeProps, MarqueeStylesNames>({
    component: Marquee,
    props: defaultProps,
    varsResolver: true,
    children: false,
    displayName: '@mantine/core/Marquee',
    stylesApiSelectors: ['root', 'content', 'group'],
  });

  it('renders children in all group elements', () => {
    const { container, rerender } = render(<Marquee repeat={4}>test-children</Marquee>);
    const groups = container.querySelectorAll('.mantine-Marquee-group');
    expect(groups).toHaveLength(4);
    groups.forEach((group) => {
      expect(group.textContent).toBe('test-children');
    });

    rerender(<Marquee repeat={2}>test-children</Marquee>);
    expect(container.querySelectorAll('.mantine-Marquee-group')).toHaveLength(2);
  });

  it('sets data-orientation attribute based on orientation prop', () => {
    const { rerender, container } = render(<Marquee {...defaultProps} orientation="horizontal" />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveAttribute(
      'data-orientation',
      'horizontal'
    );

    rerender(<Marquee {...defaultProps} orientation="vertical" />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveAttribute(
      'data-orientation',
      'vertical'
    );
  });

  it('sets data-reverse attribute when reverse prop is true', () => {
    const { rerender, container } = render(<Marquee {...defaultProps} reverse={false} />);
    expect(container.querySelector('.mantine-Marquee-root')).not.toHaveAttribute('data-reverse');

    rerender(<Marquee {...defaultProps} reverse />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveAttribute('data-reverse');
  });

  it('sets data-pause-on-hover attribute when pauseOnHover prop is true', () => {
    const { rerender, container } = render(<Marquee {...defaultProps} pauseOnHover={false} />);
    expect(container.querySelector('.mantine-Marquee-root')).not.toHaveAttribute(
      'data-pause-on-hover'
    );

    rerender(<Marquee {...defaultProps} pauseOnHover />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveAttribute('data-pause-on-hover');
  });

  it('supports duration prop', () => {
    const { container } = render(<Marquee {...defaultProps} duration={10000} />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveStyle({
      '--marquee-duration': '10000ms',
    });
  });

  it('supports gap prop', () => {
    const { container } = render(<Marquee {...defaultProps} gap="xl" />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveStyle({
      '--marquee-gap': 'var(--mantine-spacing-xl)',
    });
  });

  it('sets data-fade-edges attribute when fadeEdges prop is true (default)', () => {
    const { container } = render(<Marquee {...defaultProps} />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveAttribute('data-fade-edges');
  });

  it('does not set data-fade-edges attribute when fadeEdges prop is false', () => {
    const { container } = render(<Marquee {...defaultProps} fadeEdges={false} />);
    expect(container.querySelector('.mantine-Marquee-root')).not.toHaveAttribute('data-fade-edges');
  });

  it('supports fadeEdgeColor prop', () => {
    const { container } = render(<Marquee {...defaultProps} fadeEdgeColor="red" />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveStyle({
      '--marquee-fade-color': 'red',
    });
  });

  it('supports fadeEdgeSize prop', () => {
    const { container } = render(<Marquee {...defaultProps} fadeEdgeSize="10%" />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveStyle({
      '--marquee-fade-size': '10%',
    });
  });

  it('hides repeated groups from assistive technologies', () => {
    const { container } = render(
      <Marquee repeat={3}>
        <a href="#">link</a>
      </Marquee>
    );
    const groups = container.querySelectorAll('.mantine-Marquee-group');
    expect(groups[0]).not.toHaveAttribute('aria-hidden');
    expect(groups[0]).not.toHaveAttribute('inert');
    expect(groups[1]).toHaveAttribute('aria-hidden', 'true');
    expect(groups[1]).toHaveAttribute('inert');
    expect(groups[2]).toHaveAttribute('aria-hidden', 'true');
    expect(groups[2]).toHaveAttribute('inert');
    expect(screen.getAllByRole('link')).toHaveLength(1);
  });

  it('sets data-reduce-motion attribute on content', () => {
    const { container } = render(<Marquee {...defaultProps} />);
    expect(container.querySelector('.mantine-Marquee-content')).toHaveAttribute(
      'data-reduce-motion'
    );
  });

  it('sets data-paused attribute when playing is false', () => {
    const { container, rerender } = render(<Marquee {...defaultProps} />);
    expect(container.querySelector('.mantine-Marquee-root')).not.toHaveAttribute('data-paused');

    rerender(<Marquee {...defaultProps} playing={false} />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveAttribute('data-paused');

    rerender(<Marquee {...defaultProps} playing />);
    expect(container.querySelector('.mantine-Marquee-root')).not.toHaveAttribute('data-paused');
  });
});
