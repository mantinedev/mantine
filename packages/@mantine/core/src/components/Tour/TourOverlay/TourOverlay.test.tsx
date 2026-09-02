import { createContextContainer, render } from '@mantine-tests/core';
import { Tour } from '../Tour';
import { TourOverlay, TourOverlayProps } from './TourOverlay';

const TestContainer = createContextContainer(TourOverlay, Tour.Root, { active: true });
const PaddedContainer = createContextContainer(TourOverlay, Tour.Root, {
  active: true,
  spotlightPadding: 10,
  spotlightRadius: 6,
});

const defaultProps: TourOverlayProps = {};

describe('@mantine/core/TourOverlay', () => {
  it('has correct displayName', () => {
    expect(TourOverlay.displayName).toBe('@mantine/core/TourOverlay');
  });

  it('renders svg overlay', () => {
    const { container } = render(<TestContainer {...defaultProps} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders spotlight rect when targetRect is provided', () => {
    const { container } = render(
      <TestContainer
        {...defaultProps}
        targetRect={{ top: 100, left: 200, width: 50, height: 30 }}
      />
    );
    const maskRects = container.querySelectorAll('mask rect');
    expect(maskRects.length).toBe(2);
  });

  it('derives spotlight geometry from targetRect, spotlightPadding and spotlightRadius', () => {
    const { container } = render(
      <PaddedContainer
        {...defaultProps}
        targetRect={{ top: 100, left: 200, width: 50, height: 30 }}
      />
    );
    const spotlight = container.querySelector('mask rect:nth-child(2)')!;
    expect(spotlight).toHaveAttribute('x', '190');
    expect(spotlight).toHaveAttribute('y', '90');
    expect(spotlight).toHaveAttribute('width', '70');
    expect(spotlight).toHaveAttribute('height', '50');
    expect(spotlight).toHaveAttribute('rx', '6');
    expect(spotlight).toHaveAttribute('ry', '6');
  });

  it('does not render spotlight rect when targetRect is null', () => {
    const { container } = render(<TestContainer {...defaultProps} targetRect={null} />);
    const maskRects = container.querySelectorAll('mask rect');
    expect(maskRects.length).toBe(1);
  });
});
