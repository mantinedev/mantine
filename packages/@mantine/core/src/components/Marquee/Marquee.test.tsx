import { render, tests } from '@mantine-tests/core';
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
    const { container } = render(<Marquee repeat={4}>test-children</Marquee>);
    const groups = container.querySelectorAll('.mantine-Marquee-group');
    expect(groups).toHaveLength(4);
    groups.forEach((group) => {
      expect(group.textContent).toBe('test-children');
    });
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

  it('renders correct number of groups based on repeat prop', () => {
    const { container, rerender } = render(<Marquee {...defaultProps} repeat={4} />);
    expect(container.querySelectorAll('.mantine-Marquee-group')).toHaveLength(4);

    rerender(<Marquee {...defaultProps} repeat={2} />);
    expect(container.querySelectorAll('.mantine-Marquee-group')).toHaveLength(2);
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
});
